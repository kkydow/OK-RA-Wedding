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
 */
function onPlayerReady(event) {
    console.log("YouTube Player Siap");
    event.target.setVolume(80); // Atur volume (0-100)
    // Kita tidak putar di sini, kita tunggu openInvitation
}
// --- Akhir Perubahan YouTube IFrame API ---


// Logika Utama Aplikasi (Event Listeners, Modals, dll)
document.addEventListener('DOMContentLoaded', () => {
    // Muat bahasa default (ID)
    window.setLanguage('id');

    const cover = document.getElementById('cover');
    const mainContent = document.getElementById('main-content');
    const openButton = document.getElementById('open-invitation');
    
    // PERUBAHAN: Hapus referensi ke elemen <audio>
    // const music = document.getElementById('background-music'); 
    
    const musicToggle = document.getElementById('music-toggle');
    const musicIcon = musicToggle.querySelector('i');
    // Variabel ini akan kita gunakan untuk memantau state (playing/paused)
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
        
        // --- PERUBAHAN: Mulai musik YouTube ---
        try {
            // Cek apakah ytPlayer sudah siap
            if (ytPlayer && typeof ytPlayer.playVideo === 'function') {
                ytPlayer.playVideo();
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
        // --- Akhir Perubahan ---
    }

    // Event listener untuk tombol buka undangan
    openButton.addEventListener('click', openInvitation);

    // --- PERUBAHAN: Kontrol Tombol Musik ---
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
// ... (sisa file main.js tetap utuh) ...
