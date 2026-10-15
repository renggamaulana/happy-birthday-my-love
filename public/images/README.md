# Panduan Mengganti Foto Polaroid & Scrapbook (Image Replacement Guide)

Folder ini berisi seluruh aset foto placeholder untuk website **"A Little More of You"**.
Semua foto lokal di sini dapat langsung diganti dengan foto asli kalian berdua tanpa mengubah baris kode apapun di komponen!

---

## 📌 Cara Mengganti Foto

1. Siapkan foto asli kalian yang ingin dipakai.
2. Ubah format dan nama file foto sesuai dengan tabel pemetaan di bawah (misalnya: `cover.jpg`, `memory-01.jpg`, dst).
3. Timpa (*replace*) file di dalam folder `public/images/` ini.
4. Refresh browser atau restart dev server (`npm run dev`) untuk melihat hasilnya.

> **Tips:**
> - Gunakan format `.jpg` atau `.jpeg` dengan resolusi wajar (sekitar 800px – 1200px) agar website tetap ringan dibuka di HP.
> - Jika ingin mengubah teks caption atau deskripsinya, cukup buka file `src/data/birthday-content.ts`.

---

## 🗺️ Tabel Pemetaan Foto (Mapping Table)

| Nama File | Lokasi Muncul di Website | Rekomendasi Subjek Foto | Rasio Aspek Rekomendasi |
| :--- | :--- | :--- | :--- |
| `cover.jpg` | **Section 1: The Little Invitation** (Polaroid utama di sampul awal) | Foto berdua paling berkesan, candid senyum/tertawa hangat | 1:1 (Kotak) atau 4:5 (Potret) |
| `memory-01.jpg` | **Section 2: Timeline Memory 1** (Awal cerita / The Beginning) | Foto saat awal kenal, jalan santai pertama, atau selfie awal | 4:5 (Potret) |
| `memory-02.jpg` | **Section 2: Timeline Memory 2** (Kencan pertama / First Date) | Foto di cafe / makan bareng pertama kali | 4:5 (Potret) |
| `memory-03.jpg` | **Section 2: Timeline Memory 3** (Hari biasa jadi istimewa) | Momen jalan sore, hunting foto, atau golden hour sunset | 5:4 (Lanskap) |
| `memory-04.jpg` | **Section 2: Timeline Memory 4** (Momen lucu & konyol) | Foto candid ekspresi lucu, ketawa lepas berdua | 4:5 (Potret) |
| `memory-05.jpg` | **Section 2: Timeline Memory 5** (Momen favorit) | Gandengan tangan, pemandangan pantai / tempat liburan favorit | 5:4 (Lanskap) |
| `memory-06.jpg` | **Section 2: Timeline Memory 6** (Hari ini dan masa depan) | Menatap masa depan bersama, siluet berdua di senja | 4:5 (Potret) |
| `gallery-01.jpg` | **Section 5: Gallery Foto 1** | Bunga / kado kecil / tangan memegang sesuatu | 4:5 (Potret) |
| `gallery-02.jpg` | **Section 5: Gallery Foto 2** | Suasana malam hangat / lampu kota / konser | 5:4 (Lanskap) |
| `gallery-03.jpg` | **Section 5: Gallery Foto 3** | Foto kamera vintage, buku catatan, atau barang kenangan | 1:1 (Kotak) |
| `gallery-04.jpg` | **Section 5: Gallery Foto 4** | Nongkrong santai di cafe atau sudut favorit | 4:5 (Potret) |
| `gallery-05.jpg` | **Section 5: Gallery Foto 5** | Perjalanan / liburan / pemandangan alam indah | 16:9 / 4:3 (Lanskap) |
| `gallery-06.jpg` | **Section 5: Gallery Foto 6** | Suasana cozy / baca buku bareng / suasana tenang | 4:5 (Potret) |
| `gallery-07.jpg` | **Section 5: Gallery Foto 7** | Langit senja berbintang atau jalan malam berdua | 5:4 (Lanskap) |
| `gallery-08.jpg` | **Section 5: Gallery Foto 8** | Momen manis spontan / bunga liar / senyum manis dia | 1:1 (Kotak) |

---

Semua foto diatur secara otomatis dalam bingkai polaroid vintage dengan washi tape, rotasi organik, dan efek bayangan buku harian!
