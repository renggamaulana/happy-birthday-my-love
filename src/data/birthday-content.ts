import { BirthdayContentConfig } from '@/types/birthday';

export const birthdayData: BirthdayContentConfig = {
  // =========================================================================
  // 1. INFORMASI UTAMA (Ganti dengan nama & tanggal pasanganmu)
  // =========================================================================
  recipientName: '[NAMA PACAR]',
  senderName: '[NAMA KAMU]',
  // Format tanggal: 'YYYY-MM-DD' atau null jika belum ingin ditampilkan
  birthdayDate: null, // contoh: '2026-10-15'
  relationshipStartDate: null, // contoh: '2023-08-14' (otomatis menghitung hari jika diisi)

  // =========================================================================
  // 2. SECTION 1 — THE LITTLE INVITATION (Halaman Sampul)
  // =========================================================================
  intro: {
    topLabel: 'A LITTLE GIFT FOR YOU',
    heading: 'For my favorite human ♡',
    subheading:
      "Another year of you being you. And somehow, that's still my favorite thing in the world.",
    buttonText: 'Open your little surprise ✉',
    noteText: 'Made with love, just for you ♡',
    coverPhoto: {
      url: '/images/cover.jpg',
      caption: 'The brightest smile in my world ♡',
      dateLabel: 'A special day for someone special',
      rotation: -2,
    },
  },

  // =========================================================================
  // 3. SECTION 2 — OUR LITTLE JOURNEY (Garis Waktu Perjalanan)
  // =========================================================================
  journey: {
    sectionTitle: "Look how far we've come.",
    sectionSubtitle: 'Little moments, big happiness.',
    memories: [
      {
        id: 'memory-1',
        date: 'Day One',
        title: 'The Beginning',
        photoUrl: '/images/memory-01.jpg',
        caption:
          'Saat pertama kali kita saling menyapa. Siapa sangka obrolan canggung waktu itu jadi awal dari hal paling indah?',
        rotation: -2.5,
        aspect: 'portrait',
      },
      {
        id: 'memory-2',
        date: 'Our First Date',
        title: 'Two Cups of Coffee',
        photoUrl: '/images/memory-02.jpg',
        caption:
          'Deg-degan yang nggak bisa disembunyiin. Duduk berhadapan dan pura-pura tenang, padahal jantung berdegup kencang.',
        rotation: 2,
        aspect: 'portrait',
      },
      {
        id: 'memory-3',
        date: 'An Ordinary Day',
        title: 'Became Special With You',
        photoUrl: '/images/memory-03.jpg',
        caption:
          'Nggak ke tempat mewah, cuma jalan sore dan ngobrol berjam-jam tentang hal-hal random yang bikin lupa waktu.',
        rotation: -1.5,
        aspect: 'landscape',
      },
      {
        id: 'memory-4',
        date: 'A Laughing Fit',
        title: 'Our Silly Moments',
        photoUrl: '/images/memory-04.jpg',
        caption:
          'Momen absurd yang bikin kita ketawa sampai perut sakit. Bersamamu, aku bisa jadi diriku yang paling konyol.',
        rotation: 3,
        aspect: 'portrait',
      },
      {
        id: 'memory-5',
        date: 'Golden Hour',
        title: 'A Favorite Moment',
        photoUrl: '/images/memory-05.jpg',
        caption:
          'Duduk berdua di bawah langit senja. Di antara keramaian dunia, rasanya damai sekali saat ada di sampingmu.',
        rotation: -2,
        aspect: 'landscape',
      },
      {
        id: 'memory-6',
        date: 'Today & Beyond',
        title: 'And Everything Still to Come',
        photoUrl: '/images/memory-06.jpg',
        caption:
          'Hari ini giliran kamu yang dirayakan. Dan aku bersyukur masih ada di sini, menemani langkahmu ke depan.',
        rotation: 1.5,
        aspect: 'portrait',
      },
    ],
  },

  // =========================================================================
  // 4. SECTION 3 — LITTLE THINGS I LOVE ABOUT YOU (Catatan Kertas Interaktif)
  // =========================================================================
  loveNotes: {
    sectionTitle: 'Little things I love about you ♡',
    sectionSubtitle: 'Some things are too lovely not to tell you.',
    notes: [
      {
        id: 'note-1',
        label: 'a tiny secret',
        title: 'The Way You Tell Stories',
        message: 'I love the way you tell stories about things you care about. Matamu selalu berbinar dan itu sangat menggemaskan.',
        colorVariant: 'cream',
      },
      {
        id: 'note-2',
        label: 'just between us',
        title: 'Making Ordinary Days Shine',
        message: 'You somehow make ordinary days feel a little more special. Bahkan hari yang melelahkan jadi terasa ringan.',
        colorVariant: 'linen',
      },
      {
        id: 'note-3',
        label: 'my favorite view',
        title: 'Unconscious Expressions',
        message: 'I love the little expressions you make without noticing. Wajah cemberut lucu atau senyum kecil saat kamu fokus.',
        colorVariant: 'rose-tint',
      },
      {
        id: 'note-4',
        label: 'sweet moments',
        title: 'Spontaneous Laughter',
        message: 'You make me laugh at the most unexpected moments. Ketawa lepasmu adalah obat paling ampuh buat hariku.',
        colorVariant: 'warm-coffee-tint',
      },
      {
        id: 'note-5',
        label: 'so proud of you',
        title: 'Growing and Glowing',
        message: 'I love seeing you become more and more yourself. Melihat caramu berusaha dan bertumbuh bikin aku kagum.',
        colorVariant: 'cream',
      },
      {
        id: 'note-6',
        label: 'one more thing',
        title: 'Always Something New',
        message: 'And somehow, there is always something new to love about you. Setiap hari selalu ada alasan baru untuk bersyukur.',
        colorVariant: 'rose-tint',
      },
    ],
  },

  // =========================================================================
  // 5. SECTION 4 — A LETTER FROM MY HEART (Surat Cinta & Voice Note)
  // =========================================================================
  loveLetter: {
    sectionTitle: 'A Letter from My Heart',
    sectionSubtitle: 'Tulisan kecil dari sudut hati yang paling tulus.',
    salutation: 'Dear, my love.',
    paragraphs: [
      'Happy birthday, my favorite person.',
      'Aku nggak bisa menjanjikan bahwa setiap hari akan selalu mudah. Tapi aku ingin terus belajar memahami kamu, merayakan hal-hal kecil bersamamu, dan hadir bukan hanya saat semuanya menyenangkan.',
      'Terima kasih sudah menjadi bagian dari hari-hariku. Semoga di umur yang baru ini, kamu punya lebih banyak alasan untuk tersenyum, lebih banyak keberanian untuk mengejar impianmu, dan lebih banyak kesempatan untuk melakukan hal-hal yang membuatmu bahagia.',
      'Aku harap kamu selalu punya ruang untuk menjadi dirimu sendiri, untuk beristirahat saat lelah, untuk mencoba lagi saat sesuatu tidak berjalan sesuai rencana, dan untuk merayakan setiap langkah kecil yang berhasil kamu ambil.',
      'Dan semoga, di antara banyak hal baik yang kamu temukan tahun ini, kita masih diberi banyak waktu untuk membuat cerita baru bersama.',
      'Happy birthday, my favorite person. ♡',
    ],
    signOff: 'With all my heart, yours,',
    signature: '[NAMA KAMU]',
    letterDate: 'Special Birthday Edition',
  },

  // =========================================================================
  // 6. SECTION 5 — OUR LITTLE MEMORIES (Galeri Polaroid & Lightbox)
  // =========================================================================
  gallery: {
    sectionTitle: 'Some moments, forever in my heart.',
    sectionSubtitle: 'Kumpulan pecahan waktu yang selalu kusimpan rapi.',
    items: [
      {
        id: 'gallery-1',
        title: 'Pressed Flowers & Memories',
        photoUrl: '/images/gallery-01.jpg',
        caption: 'Bunga-bunga kecil yang mengingatkanku pada hangatnya kehadiranmu.',
        rotation: -3,
        aspect: 'portrait',
        tapePosition: 'top-center',
      },
      {
        id: 'gallery-2',
        title: 'Warm Nights Under Lights',
        photoUrl: '/images/gallery-02.jpg',
        caption: 'Cahaya lampu kota yang hangat, tapi tatapanmu tetap yang paling indah.',
        rotation: 2.5,
        aspect: 'landscape',
        tapePosition: 'top-right',
      },
      {
        id: 'gallery-3',
        title: 'Handwritten Chapters',
        photoUrl: '/images/gallery-03.jpg',
        caption: 'Setiap lembar buku ini ditulis dengan rasa syukur yang tak pernah habis.',
        rotation: -1.5,
        aspect: 'square',
        tapePosition: 'top-left',
      },
      {
        id: 'gallery-4',
        title: 'Corner of Our Favorite Cafe',
        photoUrl: '/images/gallery-04.jpg',
        caption: 'Aroma kopi, musik lembut, dan percakapan manis bersamamu.',
        rotation: 2,
        aspect: 'portrait',
        tapePosition: 'both',
      },
      {
        id: 'gallery-5',
        title: 'Chasing Sunsets Together',
        photoUrl: '/images/gallery-05.jpg',
        caption: 'Menatap luasnya langit senja dan menyadari betapa berartinya kita.',
        rotation: -2,
        aspect: 'landscape',
        tapePosition: 'top-center',
      },
      {
        id: 'gallery-6',
        title: 'Quiet Afternoon Together',
        photoUrl: '/images/gallery-06.jpg',
        caption: 'Saat kita cuma duduk berdampingan dalam keheningan yang nyaman.',
        rotation: 3,
        aspect: 'portrait',
        tapePosition: 'top-left',
      },
      {
        id: 'gallery-7',
        title: 'Under the Starlit Sky',
        photoUrl: '/images/gallery-07.jpg',
        caption: 'Di bawah miliaran bintang, doaku selalu sederhana: semoga kamu bahagia.',
        rotation: -2.5,
        aspect: 'landscape',
        tapePosition: 'top-right',
      },
      {
        id: 'gallery-8',
        title: 'Wild Daisies & Smiles',
        photoUrl: '/images/gallery-08.jpg',
        caption: 'Senyum manismu mekar lebih indah dari padang bunga di musim semi.',
        rotation: 1.5,
        aspect: 'square',
        tapePosition: 'both',
      },
    ],
  },

  // =========================================================================
  // 7. SECTION 6 — MAKE A WISH (Kue Ulang Tahun & Tiup Lilin)
  // =========================================================================
  birthdayWish: {
    sectionTitle: 'Make a wish, birthday girl!',
    sectionSubtitle:
      'Pejamkan mata sebentar, pikirkan satu harapanmu, lalu padamkan lilinnya.',
    promptText: 'Pikirkan harapan terindahmu sebelum meniup lilinnya...',
    blowButtonText: 'Blow the candles ♡',
    celebrationMessage:
      'Wish made! Semoga satu per satu hal baik menemukan jalannya kepadamu. ♡',
    nextButtonText: 'One last thing…',
  },

  // =========================================================================
  // 8. SECTION 7 — THE LAST LITTLE SURPRISE (Amplop Rahasia & Penutup)
  // =========================================================================
  finalSurprise: {
    sectionTitle: 'One more thing…',
    sectionSubtitle: "There's something else I want you to know.",
    envelopeLabel: 'Tap to open the secret letter ✉',
    letterTitle: 'Untukmu yang selalu istimewa,',
    paragraphs: [
      'Kalau suatu hari kamu lupa betapa berharganya dirimu, buka lagi halaman kecil ini.',
      'Di suatu sudut internet, ada seseorang yang bersyukur bisa mengenalmu, yang senang melihatmu tersenyum, dan yang masih ingin mengenalmu lebih jauh.',
      'Terima kasih sudah menjadi bagian dari ceritaku.',
      'Semoga tahun ini membawa banyak hal baik untukmu. Dan semoga kita masih punya banyak kesempatan untuk membuat kenangan baru, tertawa karena hal-hal kecil, dan saling mendukung saat hidup terasa tidak mudah.',
      'Happy birthday, my favorite person. ♡',
    ],
    closingQuote: 'Same place, same feeling, with you.',
    restartButtonText: 'Read our story again ↑',
  },

  // =========================================================================
  // 9. PENGATURAN MUSIK & SUARA
  // =========================================================================
  music: {
    enabled: true,
    title: 'Warm Music Box Melodies',
    artist: 'A Little More of You (Placeholder)',
    audioSrc: '/audio/background.mp3',
    loop: true,
  },
  voiceNote: {
    enabled: true,
    title: 'Pesan Suara Spesial Untukmu',
    subtitle: 'Dengarkan suara dari seseorang yang menyayangimu',
    audioSrc: '/audio/birthday-voice.mp3',
    placeholderNotice:
      'File ini adalah sampel placeholder audio nada lembut. Silakan ganti dengan rekaman suara aslimu di public/audio/birthday-voice.mp3!',
  },

  // =========================================================================
  // 10. FITUR TAMBAHAN (FEATURE FLAGS)
  // =========================================================================
  featureFlags: {
    showDaysTogether: true, // Akan otomatis disembunyikan jika relationshipStartDate null/invalid
    showMusicPlayer: true,
    showVoiceNote: true,
    enableConfetti: true,
  },
};
