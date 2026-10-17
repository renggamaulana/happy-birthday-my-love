import { BirthdayContentConfig } from '@/types/birthday';

export const birthdayData: BirthdayContentConfig = {
  // =========================================================================
  // 1. INFORMASI UTAMA (Ganti dengan nama & tanggal pasanganmu)
  // =========================================================================
  recipientName: 'Mala',
  senderName: 'Rengga (your favorite bocil)',
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
      url: '/images/smile.jpg',
      caption: 'Senyum tipis manis yang selalu bikin hariku adem ♡',
      dateLabel: 'Hari spesial buat orang tersayangku, Mala',
      rotation: -2,
    },
  },

  // =========================================================================
  // 3. SECTION 2 — OUR LITTLE JOURNEY (Garis Waktu Perjalanan)
  // =========================================================================
  journey: {
    sectionTitle: "Look how far we've come.",
    sectionSubtitle: 'Cerita kecil perjalanan kita dari awal ketemu sampai hari ini.',
    memories: [
      {
        id: 'memory-1',
        date: 'Hari Pertama',
        title: 'Awal Mula yang Nggak Disengaja',
        photoUrl: '/images/first.jpg',
        caption:
          'Pertemuan pertama kita yang bener-bener nggak disengaja. Siapa yang nyangka ya, dari yang awalnya cuma sebatas kenal di satu tempat kerja dan masih saling asing, sekarang kita malah bisa jalan sejauh ini bareng-bareng.',
        rotation: -2.5,
        aspect: 'portrait',
      },
      {
        id: 'memory-2',
        date: 'Photobox Pertama',
        title: 'Hari Pertama Jalan Berdua',
        photoUrl: '/images/first-photobox.jpg',
        caption:
          'Hari pertama kita akhirnya jalan-jalan bareng dan nyobain photobox berdua untuk pertama kalinya. Liat deh fotonya, kamu langsung pasang pose gemas begini. Dari sini rasanya udah mulai ada getaran yang beda di hati (ciee).',
        rotation: 2,
        aspect: 'portrait',
      },
      {
        id: 'memory-3',
        date: 'Momen Absurd',
        title: 'Muka Manyun Gemas Andalanmu',
        photoUrl: '/images/mala-silly-night.png',
        caption:
          'Foto spontan kayak gini kayaknya belum sempet mikirin ekspresi haha. Muka semi cemberut aja bisa selucu ini.',
        rotation: 3,
        aspect: 'portrait',
      },
      {
        id: 'memory-4',
        date: 'Hari Jadian Kita',
        title: 'Dua Gelas & Awal Cerita Kita',
        photoUrl: '/images/coffee.jpg',
        caption:
          'Saksi bisu hari bersejarah kita: dua gelas minuman sama sepiring kentang goreng. Di meja ini, hari itu kita resmi mulai jalan bareng sebagai pasangan.',
        rotation: 2,
        aspect: 'portrait',
      },
      {
        id: 'memory-5',
        date: 'Main ke Kotaku',
        title: 'Kunjungan Pertamamu',
        photoUrl: '/images/mala-the-little-prince.jpg',
        caption:
          'Pertama kalinya kamu akhirnya main dan nyamperin ke kotaku! Duduk santai di food court, senyum kamu manis deh. Sore itu sederhana, tapi senengnya bukan main!',
        rotation: -1.5,
        aspect: 'portrait',
      },
      {
        id: 'memory-6',
        date: 'Jemput Tuan Putri',
        title: 'Pose di Depan Pintu',
        photoUrl: '/images/princess.jpg',
        caption:
          'Momen jemput tuan putri langsung di depan rumahnya :D. Pas kamu udah siap rapi begini sambil pasang pose dua jari, rasanya gemes banget. Momen simpel gini yang selalu bikin aku senyum-senyum sendiri kalau liat fotonya.',
        rotation: -2,
        aspect: 'portrait',
      },
      {
        id: 'memory-7',
        date: 'Hari Ini & Seterusnya',
        title: 'Tetap Genggam Tanganku, ya?',
        photoUrl: '/images/couple-hands-ring.jpg',
        caption:
          'Selamat ulang tahun ya, Mala sayangku. Terima kasih udah mau hadir, bertahan, dan saling genggam tangan sampai hari ini. Ke depannya, ayo terus jalan bareng-bareng lewatin banyak hal sama aku. Jangan dilepas ya.',
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
        title: 'The Way You Look at Me',
        message: 'I love the way you look at me. Mata kamu selalu berbinar dan itu gemesin banget! Cara kamu natap aku sambil dengerin ocehan panjangku atau saat kamu tersenyum malu-malu, selalu bikin aku merasa istimewa (kadang salting sih).',
        colorVariant: 'cream',
      },
      {
        id: 'note-2',
        label: 'just between us',
        title: 'Making Ordinary Days Shine',
        message: 'You somehow make ordinary days feel a little more special. Lelah seharian bekerja terbayar dengan pertemuan kecil kita yang sederhana.',
        colorVariant: 'linen',
      },
      {
        id: 'note-3',
        label: 'my favorite view',
        title: 'Unconscious Expressions',
        message: 'I love the little expressions you make without noticing. Wajah cemberut lucu atau senyum kecil kamu yang selalu bikin aku kesemsem.',
        colorVariant: 'rose-tint',
      },
      {
        id: 'note-4',
        label: 'sweet moments',
        title: 'Spontaneous Laughter',
        message: 'You make me laugh at the most unexpected moments. Ketawa lepas kamu itu obat paling ampuh buat hariku yang melelahkan.',
        colorVariant: 'warm-coffee-tint',
      },
      {
        id: 'note-5',
        label: 'so proud of you',
        title: 'Growing and Glowing',
        message: 'I love seeing you become more and more yourself, growing into an even better person. Ngeliat cara kamu berusaha dan bertumbuh jadi pribadi yang lebih baik bikin aku kagum.',
        colorVariant: 'cream',
      },
      {
        id: 'note-6',
        label: 'one more thing',
        title: 'Little Things You Notice About Me',
        message: 'And somehow, there are always little things you notice about me. Cara kamu memperhatikan detail-detail kecil dari aku, apa yang aku suka, dan nggak cuma notice tapi kamu berusaha lakuin hal yang aku suka, itu yang selalu bikin aku ngerasa spesial.',
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
      'Aku nggak bisa menjanjikan kalau setiap hari bakal selalu mudah. Tapi aku pengen terus belajar memahami kamu, merayakan hal-hal kecil bareng kamu, dan hadir nggak cuma saat semuanya menyenangkan.',
      'Terima kasih sayanggg udah jadi bagian dari hari-hariku. Semoga di umur yang baru ini, kamu punya lebih banyak alasan untuk tersenyum, lebih banyak keberanian buat mengejar mimpi kamu, dan lebih banyak kesempatan buat melakukan hal-hal yang bikin kamu bahagia.',
      'Aku harap kamu selalu punya ruang untuk menjadi diri kamu sendiri, untuk beristirahat saat lelah, untuk mencoba lagi saat sesuatu nggak berjalan sesuai rencana, dan untuk merayakan setiap langkah kecil yang berhasil kamu lalui.',
      'Dan semoga, di antara banyak hal baik yang kamu temukan tahun ini, kita masih diberi banyak waktu untuk membuat cerita baru bersama.',
      'Happy birthday, my favorite person. ♡',
    ],
    signOff: 'With all my heart, yours,',
    signature: 'Your Man',
    letterDate: 'Special Birthday Edition',
  },

  // =========================================================================
  // 6. SECTION 5 — OUR LITTLE MEMORIES (Galeri Polaroid & Lightbox)
  // =========================================================================
  gallery: {
    sectionTitle: 'Some moments, forever in my heart.',
    sectionSubtitle: 'Foto-foto kecil kita yang selalu bikin aku senyum tiap kali ngeliatnya lagi.',
    items: [
      {
        id: 'gallery-1',
        title: 'Foto Berdua di Depan Cermin',
        photoUrl: '/images/couple-studio-mirror.jpg',
        caption:
          'Momen setelah quality time pertama kita nihh (you know laa).',
        rotation: -3,
        aspect: 'portrait',
        tapePosition: 'top-center',
      },
      {
        id: 'gallery-2',
        title: 'Choco Mint Favorit Kamu',
        photoUrl: '/images/mala-chocolate-drink.jpg',
        caption:
          'Muka adem kamu tiap megang minuman choco mint kesukaan kamu. Senyum manisnya nular banget, bikin kopi paitku terasa manis.',
        rotation: 2.5,
        aspect: 'portrait',
        tapePosition: 'top-right',
      },
      {
        id: 'gallery-3',
        title: 'Ketawa Malu-Malu',
        photoUrl: '/images/mala-shy-laugh.jpg',
        caption:
          'Ketawa lepas sambil nutupin muka gara-gara malu pas lagi aku fotoin. Ekspresi asli kamu kayak gini tuh selalu juara gemesnya.',
        rotation: -1.5,
        aspect: 'portrait',
        tapePosition: 'top-left',
      },
      {
        id: 'gallery-4',
        title: 'Sore Santai di Pinggir Taman',
        photoUrl: '/images/couple-park-kiss.jpg',
        caption:
          'Lagi duduk berdua sebelum magrib, terus kamu tiba-tiba pasang muka kissy gemas gini. Ada aja dah tingkah polahnya.',
        rotation: 2,
        aspect: 'portrait',
        tapePosition: 'both',
      },
      {
        id: 'gallery-5',
        title: 'Mala Kicik',
        photoUrl: '/images/mala-throwback.jpg',
        caption:
          'Ternyata cantiknya udah dari dulu... deymmm!!',
        rotation: -2,
        aspect: 'portrait',
        tapePosition: 'top-center',
      },
      {
        id: 'gallery-6',
        title: 'Poni Badai Bikin Kesemsem',
        photoUrl: '/images/mala-dreamy.jpg',
        caption:
          'Difoto jarak deket pas kena cahaya dan aura cantiknya bikin aku pengen teriak aaaaaa!! Bikin makin cinta.',
        rotation: 3,
        aspect: 'portrait',
        tapePosition: 'top-left',
      },
      {
        id: 'gallery-7',
        title: 'Duduk di Pinggir Danau',
        photoUrl: '/images/couple-park-greenery.jpg',
        caption:
          'Teduh banget rasanya waktu kita duduk berdua di pinggir danau. Mode bu guru kamu lucu banget di sini.',
        rotation: -2.5,
        aspect: 'portrait',
        tapePosition: 'top-right',
      },
      {
        id: 'gallery-8',
        title: 'Ekspresi Random Kamu',
        photoUrl: '/images/mala-fish-face.jpg',
        caption:
          'Lagi asyik nongkrong di kafe bisa-bisanya malah pamer ekspresi bibir monyong ala ikan gini haha. Tapi anehnya tetep keliatan lucu banget wkwk.',
        rotation: 1.5,
        aspect: 'portrait',
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
      'Wish made! Semoga satu per satu hal baik selalu menyertai kamu. ♡',
    nextButtonText: 'One last thing…',
  },

  // =========================================================================
  // 8. SECTION 7 — THE LAST LITTLE SURPRISE (Amplop Rahasia & Penutup)
  // =========================================================================
  finalSurprise: {
    sectionTitle: 'One more thing…',
    sectionSubtitle: "There's something else I want you to know.",
    envelopeLabel: 'Tap to open the secret letter ✉',
    letterTitle: 'Untuk kamu yang selalu istimewa,',
    paragraphs: [
      'Kalau suatu hari kamu lupa betapa berharganya kamu, buka lagi halaman kecil ini.',
      'Di halaman sederhana ini, ada seseorang yang bersyukur bisa kenal kamu, yang senang ngeliat kamu tersenyum, dan yang masih ingin terus mengenalmu lebih jauh.',
      'Terima kasih sudah menjadi bagian dari ceritaku.',
      'Semoga tahun ini membawa banyak hal baik buat kamu. Dan semoga kita masih punya banyak kesempatan untuk membuat kenangan baru, ketawa bareng karena hal-hal kecil, dan saling mendukung saat hidup terasa nggak mudah.',
      'Happy birthday, my favorite person. ♡',
    ],
    closingQuote: 'Every little moment feels special with you.',
    restartButtonText: 'Read our story again ↑',
  },

  // =========================================================================
  // 9. PENGATURAN MUSIK & SUARA
  // =========================================================================
  music: {
    enabled: true,
    title: 'Tenerife Sea',
    artist: 'Ed Sheeran',
    audioSrc: '/audio/background-1.mp3',
    loop: true,
  },
  voiceNote: {
    enabled: true,
    title: 'Pesan Suara Spesial Buat Kamu',
    subtitle: 'Dengarkan suara dari seseorang yang sangat menyayangimu',
    audioSrc: '/audio/my-voice-for-you.m4a',
    placeholderNotice:
      'Ucapan selamat dari aku yang sayang sama kamu. Dengerin yaa ♡',
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
