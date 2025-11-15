import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, signInAnonymously, signInWithCustomToken } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, collection, addDoc, onSnapshot, serverTimestamp, setLogLevel } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

// Ambil 'translations' dan 'currentLang' dari global scope
// 'main.js' harus dimuat lebih dulu dan mendefinisikan ini di 'window'
const translations = window.translations;
const getCurrentLang = () => window.currentLang;

// Konfigurasi Firebase (disediakan oleh environment)
let firebaseConfig, __app_id, __initial_auth_token;
try {
    firebaseConfig = JSON.parse(typeof __firebase_config !== 'undefined' ? __firebase_config : '{}');
    __app_id = typeof __app_id !== 'undefined' ? __app_id : 'default-app-id';
    __initial_auth_token = typeof __initial_auth_token !== 'undefined' ? __initial_auth_token : null;
} catch (e) {
    console.error("Gagal memuat konfigurasi Firebase:", e);
    firebaseConfig = { apiKey: "dummy", authDomain: "dummy.firebaseapp.com", projectId: "dummy" };
    __app_id = 'default-app-id';
    __initial_auth_token = null;
}

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
setLogLevel('Debug'); // Aktifkan log untuk debugging

const appId = __app_id;
let userId = null;

// Autentikasi
(async () => {
    try {
        if (__initial_auth_token) {
            await signInWithCustomToken(auth, __initial_auth_token);
            console.log("Autentikasi berhasil dengan custom token.");
        } else {
            await signInAnonymously(auth);
            console.log("Autentikasi berhasil secara anonim.");
        }
        userId = auth.currentUser?.uid || crypto.randomUUID();
        
        // Setelah auth siap, kita muat data
        loadWishes(); 
    } catch (error) {
        console.error("Autentikasi Firebase gagal:", error);
        userId = crypto.randomUUID(); // Fallback
        
        const wishesContainer = document.getElementById('wishes-container');
        if (wishesContainer) {
            // Gunakan terjemahan
            wishesContainer.innerHTML = `<p class="text-sm text-red-500 text-center">${translations[getCurrentLang()].wishesError}</p>`;
        }
    }
})();

// Referensi Firestore (jalur publik)
const wishesCollectionRef = collection(db, `artifacts/${appId}/public/data/wishes`);

// Muat Ucapan (Buku Tamu) - VERSI MODIFIKASI
function loadWishes() {
    if (!auth.currentUser) {
        console.warn("Autentikasi belum siap (auth.currentUser null), membatalkan pemuatan ucapan.");
        return;
    }
    
    const wishesContainer = document.getElementById('wishes-container');
    if (!wishesContainer) {
        console.error("Elemen 'wishes-container' tidak ditemukan.");
        return;
    }

    onSnapshot(wishesCollectionRef, (snapshot) => {
        wishesContainer.innerHTML = ''; // Kosongkan kontainer
        if (snapshot.empty) {
            // Gunakan terjemahan
            wishesContainer.innerHTML = `<p class="text-sm text-gray-500 text-center">${translations[getCurrentLang()].wishesEmpty}</p>`;
            return;
        }
        snapshot.docs.sort((a, b) => b.data().createdAt?.toDate() - a.data().createdAt?.toDate())
            .forEach(doc => {
                const wish = doc.data();
                const wishElement = document.createElement('div');
                wishElement.className = 'bg-white/70 backdrop-blur-sm p-4 rounded-lg shadow-sm mb-3';
                
                // Tentukan teks "Hadir" / "Tidak Hadir" berdasarkan bahasa
                let attendingText = wish.attending;
                if (wish.attending === 'Hadir') {
                    attendingText = translations[getCurrentLang()].rsvpFormAttending1;
                } else if (wish.attending === 'Tidak Hadir') {
                    attendingText = translations[getCurrentLang()].rsvpFormAttending2;
                }

                wishElement.innerHTML = `
                    <p class="font-bold text-orange-700">${wish.name || 'Tamu'}</p>
                    <span class="text-xs px-2 py-0.5 rounded ${wish.attending === 'Hadir' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}">${attendingText}</span>
                    <p class="text-gray-700 mt-2 text-sm">${wish.message}</p>
                    <p class="text-xs text-gray-400 mt-2 text-right">${wish.createdAt ? new Date(wish.createdAt.toDate()).toLocaleString(getCurrentLang()) : ''}</p>
                `;
                wishesContainer.appendChild(wishElement);
            });
    }, (error) => {
        console.error("Gagal mengambil data ucapan:", error);
        // Gunakan terjemahan
        wishesContainer.innerHTML = `<p class="text-sm text-red-500 text-center">${translations[getCurrentLang()].wishesError}</p>`;
    });
}

// Kirim RSVP dan Ucapan - VERSI MODIFIKASI
window.handleRsvpSubmit = async (event) => {
    event.preventDefault();
    const lang = getCurrentLang(); // Dapatkan bahasa saat ini

    const rsvpMessageEl = document.getElementById('rsvp-message');

    if (!auth.currentUser) {
        console.error("Autentikasi belum siap. Tidak bisa mengirim RSVP.");
        // Gunakan terjemahan
        rsvpMessageEl.innerText = translations[lang].rsvpErrorAuth;
        rsvpMessageEl.classList.remove('text-green-600');
        rsvpMessageEl.classList.add('text-red-600');
        return;
    }

    const form = event.target;
    const name = form.name.value;
    const attending = form.attending.value; // Ini tetap 'Hadir' / 'Tidak Hadir'
    const message = form.message.value;
    const submitButton = form.querySelector('button[type="submit"]');

    if (!name || !message) {
        // Gunakan terjemahan
        rsvpMessageEl.innerText = translations[lang].rsvpErrorFill;
        rsvpMessageEl.classList.remove('text-green-600');
        rsvpMessageEl.classList.add('text-red-600');
        return;
    }

    // Gunakan terjemahan
    submitButton.disabled = true;
    submitButton.innerText = translations[lang].rsvpFormSubmitting;

    try {
        await addDoc(wishesCollectionRef, {
            name,
            attending, // Simpan nilai 'Hadir' / 'Tidak Hadir'
            message,
            createdAt: serverTimestamp()
        });
        
        form.reset();
        // Gunakan terjemahan
        rsvpMessageEl.innerText = translations[lang].rsvpSuccess;
        rsvpMessageEl.classList.add('text-green-600');
        rsvpMessageEl.classList.remove('text-red-600');

    } catch (error) {
        console.error("Error saat menambahkan dokumen: ", error);
        // Gunakan terjemahan
        rsvpMessageEl.innerText = translations[lang].rsvpErrorServer;
        rsvpMessageEl.classList.remove('text-green-600');
        rsvpMessageEl.classList.add('text-red-600');
    } finally {
        submitButton.disabled = false;
        // Gunakan terjemahan
        submitButton.innerHTML = translations[lang].rsvpFormSubmit; // innerHTML karena data-key
        setTimeout(() => {
            rsvpMessageEl.innerText = '';
        }, 5000);
    }
};
