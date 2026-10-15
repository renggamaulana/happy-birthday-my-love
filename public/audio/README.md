# Panduan Mengganti Musik & Pesan Suara (Audio Replacement Guide)

Folder ini berisi file audio untuk latar musik romantis dan rekaman suara ucapan ulang tahun (*voice note*).
File yang ada saat ini adalah sampel audio nada lembut yang valid (*valid gentle chime tone placeholder*).

---

## 🎵 File Audio

1. **`background.mp3`**
   - **Fungsi:** Lagu latar belakang romantis yang dapat diputar/dijeda oleh pasangan melalui tombol pemutar musik mengambang (*floating music player*).
   - **Rekomendasi:** Lagu favorit berdua, lagu kenangan, musik akustik lembut, atau lagu ulang tahun instrumental (format `.mp3`).
   - **Cara ganti:** Cukup salin lagu pilihanmu ke folder ini dan beri nama `background.mp3`.

2. **`birthday-voice.mp3`**
   - **Fungsi:** Rekaman pesan suara personal (*voice note*) yang disematkan di dalam surat cinta (*Section 4: A Letter From My Heart*).
   - **Rekomendasi:** Rekaman suara aslimu yang mengucapkan selamat ulang tahun, doa tulus, atau pesan manis (durasi bebas, format `.mp3`).
   - **Cara ganti:** Rekam suara di HP / perekam suara, konversi/ekspor sebagai `.mp3`, lalu ganti file `birthday-voice.mp3` di folder ini.

---

## ⚙️ Pengaturan di Kode

Kamu juga bisa mengubah judul lagu, nama penyanyi, dan pesan keterangan voice note langsung di:
`src/data/birthday-content.ts` pada bagian `musicConfig` dan `voiceNoteConfig`.
