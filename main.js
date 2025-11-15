// Pastikan variabel global ini didefinisikan SEBELUM skrip module
let currentLang = 'id'; // Bahasa default

// Database Teks untuk Terjemahan
const translations = {
    // --- BAHASA INDONESIA ---
    id: {
        // Cover
        coverTitle: "We Are Getting Married",
        vinylLabel: '"Our<br>Love Song"',
        guestLabel: "Kepada Yth.",
        guestDefault: "Bapak/Ibu/Saudara/i",
        guestNote: "*(Nama tamu diambil dari link URL)*",
        openButton: '<i class="fa-solid fa-envelope-open mr-2"></i> Buka Undangan',
        // Nav
        navHome: "Home",
        navCouple: "Mempelai",
        navEvent: "Acara",
        navGallery: "Galeri",
        navRsvp: "Ucapan",
        // Hero
        heroTitle: "The Wedding of",
        heroScroll: "Scroll ke bawah",
        // Quote
        quoteText: `"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir."`,
        quoteSource: "(QS. Ar-Rum: 21)",
        // Couple
        coupleTitle: "Mempelai",
        coupleIntro: "Assalamu'alaikum Warahmatullahi Wabarakatuh.<br>Maha suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.<br>Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami:",
        groomParents: "Putra dari:",
        groomFather: "Bpk. Sarimin (alm)",
        groomMother: "& Ibu Endang Tri Ningsih",
        brideParents: "Putri dari:",
        brideFather: "Bpk. Sriyono",
        brideMother: "& Ibu Dwiliasnur",
        // Event
        eventTitle: "Waktu & Tempat",
        countdownTitle: "Menuju Hari Bahagia",
        countdownDays: "Hari",
        countdownHours: "Jam",
        countdownMinutes: "Menit",
        countdownSeconds: "Detik",
        countdownOver: "Acara Telah Berlangsung",
        eventAkadTitle: "Akad Nikah",
        eventResepsiTitle: "Resepsi",
        eventDate: "Minggu, 21 Desember 2025",
        eventTimeAkad: "Pukul 09:00 WIB - Selesai",
        eventTimeResepsi: "Pukul 10:00 WIB - Selesai",
        eventLocationTitle: "Lokasi Acara",
        eventLocationButton: '<i class="fa-solid fa-map-location-dot mr-2"></i> Buka Peta',
        // Gallery
        galleryTitle: "Galeri Cerita Kami",
        gallery1: "Ganti Foto 1",
        gallery2: "Ganti Foto 2",
        gallery3: "Ganti Foto 3",
        gallery4: "Ganti Foto 4",
        gallery5: "Ganti Foto 5",
        gallery6: "Ganti Foto 6",
        // Vendors
        vendorTitle: "Turut Mendukung Acara",
        vendorEntertainment: "Hiburan",
        vendorPhoto: "Photo & Videographer",
        vendorMUA: "Dekor & Rias Pengantin",
        // Gift
        giftTitle: "Kirim Hadiah",
        giftIntro: "Doa restu Anda merupakan hadiah yang tak ternilai bagi kami. Namun, jika Anda ingin memberikan tanda kasih, Anda dapat melakukannya melalui tautan berikut:",
        giftButton: '<i class="fa-solid fa-gift mr-2"></i> Kirim Angpao Digital',
        giftModalTitle: "Amplop Digital",
        giftModalIntro: "Untuk Okki & Rara",
        giftModalBank: "Bank BCA",
        giftModalEwallet: "DANA / OVO",
        giftCopyRek: "Salin No. Rek",
        giftCopyNo: "Salin No.",
        giftCopySuccess: "Berhasil disalin!",
        // RSVP
        rsvpTitle: "Buku Tamu",
        rsvpFormTitle: "Konfirmasi Kehadiran",
        rsvpFormName: "Nama Anda",
        rsvpFormAttending: "Konfirmasi",
        rsvpFormAttending1: "InsyaAllah, Hadir",
        rsvpFormAttending2: "Maaf, Berhalangan",
        rsvpFormMessage: "Ucapan & Doa",
        rsvpFormPlaceholder: "Tulis ucapan selamat...",
        rsvpFormSubmit: "Kirim Ucapan",
        rsvpFormSubmitting: "Mengirim...",
        rsvpErrorFill: "Nama dan pesan wajib diisi.",
        rsvpErrorAuth: "Gagal mengirim: Autentikasi belum siap.",
        rsvpErrorServer: "Terjadi kesalahan. Coba lagi.",
        rsvpSuccess: "Ucapan Anda berhasil dikirim!",
        rsvpWishesTitle: "Ucapan & Doa",
        wishesLoading: "Memuat ucapan...",
        wishesEmpty: "Jadilah yang pertama mengirim ucapan!",
        wishesError: "Gagal memuat ucapan. Silakan coba lagi nanti.",
        // Footer
        footerText: "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai.",
        footerThanks: "Terima Kasih",
        footerClosing: "Wassalamu'alaikum Warahmatullahi Wabarakatuh",
        footerMadeBy: "Digital Invitation by Gemini",
    },
    // --- BAHASA INGGRIS ---
    en: {
        // Cover
        coverTitle: "We Are Getting Married",
        vinylLabel: '"Our<br>Love Song"',
        guestLabel: "To:",
        guestDefault: "Mr./Mrs./Guest",
        guestNote: "*(Guest name is taken from the URL)*",
        openButton: '<i class="fa-solid fa-envelope-open mr-2"></i> Open Invitation',
        // Nav
        navHome: "Home",
        navCouple: "Couple",
        navEvent: "Event",
        navGallery: "Gallery",
        navRsvp: "Wishes",
        // Hero
        heroTitle: "The Wedding of",
        heroScroll: "Scroll down",
        // Quote
        quoteText: `"And among His signs is this, that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts. Verily in that are Signs for those who reflect."`,
        quoteSource: "(Q.S. Ar-Rum: 21)",
        // Couple
        coupleTitle: "The Couple",
        coupleIntro: "Assalamu'alaikum Warahmatullahi Wabarakatuh.<br>Glory be to Allah, who created all things in pairs.<br>By asking for the mercy and blessing of Allah SWT, we intend to hold the marriage of our children:",
        groomParents: "Son of:",
        groomFather: "Mr. Sarimin (late)",
        groomMother: "& Mrs. Endang Tri Ningsih",
        brideParents: "Daughter of:",
        brideFather: "Mr. Sriyono",
        brideMother: "& Mrs. Dwiliasnur",
        // Event
        eventTitle: "Time & Place",
        countdownTitle: "Countdown to The Day",
        countdownDays: "Days",
        countdownHours: "Hours",
        countdownMinutes: "Minutes",
        countdownSeconds: "Seconds",
        countdownOver: "The Event Has Passed",
        eventAkadTitle: "Marriage Contract",
        eventResepsiTitle: "Reception",
        eventDate: "Sunday, 21 December 2025",
        eventTimeAkad: "09:00 AM (WIB) - Done",
        eventTimeResepsi: "10:00 AM (WIB) - Done",
        eventLocationTitle: "Event Location",
        eventLocationButton: '<i class="fa-solid fa-map-location-dot mr-2"></i> Open Map',
        // Gallery
        galleryTitle: "Our Story Gallery",
        gallery1: "Change Photo 1",
        gallery2: "Change Photo 2",
        gallery3: "Change Photo 3",
        gallery4: "Change Photo 4",
        gallery5: "Change Photo 5",
        gallery6: "Change Photo 6",
        // Vendors
        vendorTitle: "Event Vendors",
        vendorEntertainment: "Entertainment",
        vendorPhoto: "Photo & Videographer",
        vendorMUA: "Decor & Bridal Makeup",
        // Gift
        giftTitle: "Wedding Gift",
        giftIntro: "Your prayers and blessings are the most precious gift to us. However, if you wish to send a token of love, you may do so via the following link:",
        giftButton: '<i class="fa-solid fa-gift mr-2"></i> Send Digital Gift',
        giftModalTitle: "Digital Envelope",
        giftModalIntro: "For Okki & Rara",
        giftModalBank: "BCA Bank",
        giftModalEwallet: "DANA / OVO",
        giftCopyRek: "Copy Account No.",
        giftCopyNo: "Copy No.",
        giftCopySuccess: "Copied successfully!",
        // RSVP
        rsvpTitle: "Guest Book",
        rsvpFormTitle: "Confirm Attendance",
        rsvpFormName: "Your Name",
        rsvpFormAttending: "Confirmation",
        rsvpFormAttending1: "Will Attend",
        rsvpFormAttending2: "Will Not Attend",
        rsvpFormMessage: "Wishes & Prayers",
        rsvpFormPlaceholder: "Write your wishes...",
        rsvpFormSubmit: "Send Wish",
        rsvpFormSubmitting: "Sending...",
        rsvpErrorFill: "Name and message are required.",
        rsvpErrorAuth: "Failed to send: Authentication not ready.",
        rsvpErrorServer: "An error occurred. Please try again.",
        rsvpSuccess: "Your wish has been sent!",
        rsvpWishesTitle: "Wishes & Prayers",
        wishesLoading: "Loading wishes...",
        wishesEmpty: "Be the first to send a wish!",
        wishesError: "Failed to load wishes. Please try again later.",
        // Footer
        footerText: "It would be an honor and a joy for us if you could be present to give your blessings to the bride and groom.",
        footerThanks: "Thank You",
        footerClosing: "Wassalamu'alaikum Warahmatullahi Wabarakatuh",
        footerMadeBy: "Digital Invitation by Gemini",
    },
    // --- BAHASA JEPANG ---
    ja: {
        // Cover
        coverTitle: "結婚式のご案内",
        vinylLabel: '"愛の<br>歌"',
        guestLabel: "ゲスト様:",
        guestDefault: "ゲスト様",
        guestNote: "*(ゲスト名はURLから取得されます)*",
        openButton: '<i class="fa-solid fa-envelope-open mr-2"></i> 招待状を開く',
        // Nav
        navHome: "ホーム",
        navCouple: "二人",
        navEvent: "日時",
        navGallery: "ギャラリー",
        navRsvp: "お祝い",
        // Hero
        heroTitle: "結婚式",
        heroScroll: "下へスクロール",
        // Quote
        quoteText: `"（アッラーの）印の一つに、あなたがた自身から配偶者を創られ、あなたがたが彼女らによって安らぎを得るようにし、あなたがたの間に愛と慈しみを置かれたことがある。本当にその中には、考え深い人々のための印がある。"`,
        quoteSource: "(クルアーン 30:21)",
        // Couple
        coupleTitle: "新郎新婦",
        coupleIntro: "Assalamu'alaikum Warahmatullahi Wabarakatuh.<br>万物をペアで創造されたアッラーに栄光あれ。<br>アッラーの慈悲と祝福を願い、私たちは子供たちの結婚式を執り行います。",
        groomParents: "新郎:",
        groomFather: "父：故 サリミン",
        groomMother: "母：エンダン・トリ・ニンシ",
        brideParents: "新婦:",
        brideFather: "父：スリヨノ",
        brideMother: "母：ドウィリアスヌル",
        // Event
        eventTitle: "日時と場所",
        countdownTitle: "ハッピーデーまで",
        countdownDays: "日",
        countdownHours: "時間",
        countdownMinutes: "分",
        countdownSeconds: "秒",
        countdownOver: "イベントは終了しました",
        eventAkadTitle: "結婚契約式",
        eventResepsiTitle: "披露宴",
        eventDate: "2025年12月21日 (日曜日)",
        eventTimeAkad: "09:00 (WIB) - 終了",
        eventTimeResepsi: "10:00 (WIB) - 終了",
        eventLocationTitle: "会場の場所",
        eventLocationButton: '<i class="fa-solid fa-map-location-dot mr-2"></i> 地図を開く',
        // Gallery
        galleryTitle: "二人のギャラリー",
        gallery1: "写真1を変更",
        gallery2: "写真2を変更",
        gallery3: "写真3を変更",
        gallery4: "写真4を変更",
        gallery5: "写真5を変更",
        gallery6: "写真6を変更",
        // Vendors
        vendorTitle: "協力ベンダー",
        vendorEntertainment: "エンターテイメント",
        vendorPhoto: "写真・ビデオ",
        vendorMUA: "装飾・ブライダル",
        // Gift
        giftTitle: "お祝い",
        giftIntro: "皆様からの祝福の言葉が私たちにとって何よりの贈り物です。もし記念の品をお送りいただける場合は、以下のリンクをご利用ください。",
        giftButton: '<i class="fa-solid fa-gift mr-2"></i> デジタルギフトを送る',
        giftModalTitle: "デジタルご祝儀",
        giftModalIntro: "Okki & Rara へ",
        giftModalBank: "BCA銀行",
        giftModalEwallet: "DANA / OVO",
        giftCopyRek: "口座番号をコピー",
        giftCopyNo: "番号をコピー",
        giftCopySuccess: "コピーしました！",
        // RSVP
        rsvpTitle: "芳名帳",
        rsvpFormTitle: "出欠確認",
        rsvpFormName: "お名前",
        rsvpFormAttending: "ご出欠",
        rsvpFormAttending1: "出席します",
        rsvpFormAttending2: "欠席します",
        rsvpFormMessage: "お祝いの言葉",
        rsvpFormPlaceholder: "メッセージをご記入ください...",
        rsvpFormSubmit: "メッセージを送る",
        rsvpFormSubmitting: "送信中...",
        rsvpErrorFill: "お名前とメッセージは必須です。",
        rsvpErrorAuth: "送信失敗：認証がまだです。",
        rsvpErrorServer: "エラーが発生しました。もう一度お試しください。",
        rsvpSuccess: "メッセージが送信されました！",
        rsvpWishesTitle: "お祝いの言葉",
        wishesLoading: "メッセージを読み込み中...",
        wishesEmpty: "最初のメッセージを送りましょう！",
        wishesError: "メッセージの読み込みに失敗しました。",
        // Footer
        footerText: "皆様にご出席いただき、二人に祝福の言葉をいただけますと幸いです。",
        footerThanks: "ありがとうございます",
        footerClosing: "Wassalamu'alaikum Warahmatullahi Wabarakatuh",
        footerMadeBy: "Digital Invitation by Gemini",
    }
};

// Fungsi untuk mengganti bahasa
window.setLanguage = (lang) => {
    if (!translations[lang]) return;
    currentLang = lang;

    // Ganti semua teks berdasarkan data-key
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.dataset.key;
        const translation = translations[lang][key];
        if (translation) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                if (el.placeholder !== undefined) {
                    el.placeholder = translation;
                }
            } else if (el.tagName === 'IMG') {
                // Untuk placeholder text di gambar
                el.src = `https://placehold.co/${el.width}x${el.height}/FDBF81/333333?text=${encodeURIComponent(translation)}`;
                el.alt = translation;
            } else {
                el.innerHTML = translation;
            }
        }
    });

    // Ganti teks dinamis (yang tidak pakai data-key)
    // Default nama tamu
    const urlParams = new URLSearchParams(window.location.search);
    const guestName = urlParams.get('to');
    const guestNameEl = document.getElementById('guest-name');
    if (guestNameEl && !guestName) {
        guestNameEl.innerText = translations[lang].guestDefault;
    }

    // Ganti tombol aktif
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
};


// Logika Utama Aplikasi (Event Listeners, Modals, dll)
document.addEventListener('DOMContentLoaded', () => {
    // Muat bahasa default (ID)
    window.setLanguage('id');

    const cover = document.getElementById('cover');
    const mainContent = document.getElementById('main-content');
    const openButton = document.getElementById('open-invitation');
    const music = document.getElementById('background-music');
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
        
        // Mulai musik
        music.play().then(() => {
            isMusicPlaying = true;
            musicIcon.classList.add('fa-spin'); // Tambah animasi putar
        }).catch(e => {
            console.warn("Autoplay musik diblokir oleh browser:", e);
            // Jika diblokir, biarkan ikon statis
            isMusicPlaying = false;
            musicIcon.classList.remove('fa-spin');
            musicIcon.classList.remove('fa-music');
            musicIcon.classList.add('fa-volume-mute');
        });
    }

    // Event listener untuk tombol buka undangan
    openButton.addEventListener('click', openInvitation);

    // Kontrol Tombol Musik
    musicToggle.addEventListener('click', () => {
        if (isMusicPlaying) {
            music.pause();
            musicIcon.classList.remove('fa-spin');
            musicIcon.classList.remove('fa-music');
            musicIcon.classList.add('fa-volume-mute');
        } else {
            music.play();
            musicIcon.classList.remove('fa-volume-mute');
            musicIcon.classList.add('fa-music');
            musicIcon.classList.add('fa-spin');
        }
        isMusicPlaying = !isMusicPlaying;
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
