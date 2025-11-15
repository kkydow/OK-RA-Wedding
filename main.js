// Pastikan variabel global ini didefinisikan SEBELUM skrip module
let currentLang = 'id'; // Bahasa default

// Database Teks untuk Terjemahan
const translations = {
// ... (objek translations tetap utuh) ...
    ja: {
// ... (isi terjemahan ja tetap utuh) ...
        footerMadeBy: "Digital Invitation by Gemini",
    }
};

// Fungsi untuk mengganti bahasa
window.setLanguage = (lang) => {
// ... (fungsi setLanguage tetap utuh) ...
};


// --- PERUBAHAN: YouTube IFrame API ---
let ytPlayer;
const youtubeVideoId = 'jJzMDeVkMlw'; // ID dari link YouTube Anda

/**
 * Fungsi ini dipanggil secara otomatis oleh API YouTube IFrame
 * setelah skrip API (dari index.html) selesai diunduh.
 */
window.onYouTubeIframeAPIReady = function() {
    console.log("YouTube API Siap");
    ytPlayer = new YT.Player('youtube-player', {
        height: '1', // Ukuran minimal
        width: '1',
        videoId: youtubeVideoId,
        playerVars: {
            'playsinline': 1,  // Wajib untuk iOS
            'autoplay': 0,     // 0 = Jangan autoplay saat load, tunggu tombol Buka
            'controls': 0,     // 0 = Sembunyikan kontrol player
            'loop': 1,         // 1 = Loop video
            'playlist': youtubeVideoId // Wajib diisi agar 'loop: 1' berfungsi
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

/**
 * API akan memanggil fungsi ini saat player video sudah siap.
 * PERBAIKAN: Kita tidak mengatur volume di sini lagi.
 */
function onPlayerReady(event) {
    console.log("YouTube Player Siap");
    // event.target.setVolume(80); // DIHAPUS: Pindahkan ke 'openInvitation'
}
// --- Akhir Perubahan YouTube IFrame API ---


// Logika Utama Aplikasi (Event Listeners, Modals, dll)
document.addEventListener('DOMContentLoaded', () => {
    // Muat bahasa default (ID)
    window.setLanguage('id');

    const cover = document.getElementById('cover');
    const mainContent = document.getElementById('main-content');
    const openButton = document.getElementById('open-invitation');
    
    const musicToggle = document.getElementById('music-toggle');
    const musicIcon = musicToggle.querySelector('i');
    let isMusicPlaying = false; 
    
    // Mengambil nama tamu dari URL
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get('to');
    const guestNameEl = document.getElementById('guest-name');
    if (guestName) {
        guestNameEl.innerText = guestName;
    } else {
         // Set default jika tidak ada nama tamu, sesuai bahasa yg dipilih
        guestNameEl.innerText = translations[currentLang].guestDefault;
    }

    // Fungsi Aksi Buka Undangan
    function openInvitation() {
        // Animasi fade-out & scale
        cover.style.opacity = '0';
        cover.style.transform = 'scale(1.1)';
        
        setTimeout(() => {
            cover.style.display = 'none';
        }, 500); // Sesuaikan dengan durasi transisi di CSS (0.5s)

        // Tampilkan konten utama
        mainContent.style.display = 'block';
        document.body.style.overflow = 'auto'; // Izinkan scroll
        
        // --- PERBAIKAN: Mulai musik YouTube dengan trik Mute/Unmute ---
        try {
            // Cek apakah ytPlayer sudah siap
            if (ytPlayer && typeof ytPlayer.playVideo === 'function') {
                
                // 1. Mute player
                ytPlayer.mute();
                // 2. Mainkan video (browser mengizinkan autoplay jika muted)
                ytPlayer.playVideo();
                // 3. Langsung unmute dan atur volume
                // Diberi jeda sedikit (misal 100ms) terkadang membantu
                setTimeout(() => {
                    ytPlayer.unMute();
                    ytPlayer.setVolume(80); // Atur volume (0-100)
                }, 100);

                isMusicPlaying = true;
                musicIcon.classList.add('fa-spin');
            } else {
                console.warn("YouTube Player belum siap saat openInvitation dipanggil.");
                isMusicPlaying = false;
                musicIcon.classList.remove('fa-spin');
                musicIcon.classList.remove('fa-music');
                musicIcon.classList.add('fa-volume-mute');
            }
        } catch (e) {
             console.error("Gagal memutar video YouTube:", e);
             isMusicPlaying = false;
             musicIcon.classList.remove('fa-spin');
             musicIcon.classList.remove('fa-music');
             musicIcon.classList.add('fa-volume-mute');
        }
        // --- Akhir Perbaikan ---
    }

    // Event listener untuk tombol buka undangan
    openButton.addEventListener('click', openInvitation);

    // Kontrol Tombol Musik
    musicToggle.addEventListener('click', () => {
        // Pastikan player sudah ada
        if (!ytPlayer || typeof ytPlayer.getPlayerState !== 'function') {
            console.warn("Tombol musik diklik, tapi player belum siap.");
            return;
        }

        // Dapatkan state player saat ini
        const playerState = ytPlayer.getPlayerState();
        
        // 1 = PLAYING, 2 = PAUSED
        if (playerState === YT.PlayerState.PLAYING) {
            ytPlayer.pauseVideo();
            isMusicPlaying = false;
            musicIcon.classList.remove('fa-spin');
            musicIcon.classList.remove('fa-music');
            musicIcon.classList.add('fa-volume-mute');
        } else {
            // Jika state PAUSED (2) atau UNSTARTED (-1) atau ENDED (0)
            ytPlayer.playVideo();
            isMusicPlaying = true;
            musicIcon.classList.remove('fa-volume-mute');
            musicIcon.classList.add('fa-music');
            musicIcon.classList.add('fa-spin');
        }
    });

    // Hitung Mundur (Countdown)
    const countdownDate = new Date("2025-12-21T09:00:00").getTime();
    const countdownTimer = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        const f = (n) => (n < 10 ? '0' + n : n); // Format 2 digit
        
        // Pastikan elemen ada sebelum diisi
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl && hoursEl && minutesEl && secondsEl) {
            daysEl.innerText = f(days);
            hoursEl.innerText = f(hours);
            minutesEl.innerText = f(minutes);
            secondsEl.innerText = f(seconds);
        }

        if (distance < 0) {
            clearInterval(countdownTimer);
            const countdownEl = document.getElementById('countdown');
            if (countdownEl) {
                // Gunakan terjemahan
                countdownEl.innerHTML = `<p class="text-xl font-bold text-green-700">${translations[currentLang].countdownOver}</p>`;
            }
        }
    }, 1000);

    // Modal Hadiah
    const giftModal = document.getElementById('gift-modal');
    const openGiftModal = document.getElementById('open-gift-modal');
    const closeGiftModal = document.getElementById('close-gift-modal');

    if(openGiftModal) openGiftModal.addEventListener('click', () => giftModal.classList.remove('hidden'));
    if(closeGiftModal) closeGiftModal.addEventListener('click', () => giftModal.classList.add('hidden'));
    if(giftModal) giftModal.addEventListener('click', (e) => {
        if (e.target === giftModal) {
            giftModal.classList.add('hidden');
        }
    });
    
    // Navigasi Scroll
    window.scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if(section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    
    // Fungsi Salin (Copy to Clipboard)
    window.copyToClipboard = (elementId) => {
        const textToCopy = document.getElementById(elementId).innerText;
        const helperTextarea = document.getElementById('copy-helper');
        helperTextarea.value = textToCopy;
        helperTextarea.select();
        try {
            document.execCommand('copy');
            const copyMessage = document.getElementById('copy-message');
            if(copyMessage) {
                // Gunakan terjemahan
                copyMessage.innerText = translations[currentLang].giftCopySuccess;
                setTimeout(() => copyMessage.innerText = '', 2000);
            }
        } catch (err) {
            console.error('Gagal menyalin: ', err);
        }
    }
});
