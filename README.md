# Undangan Ngunduh Mantu

Undangan Ngunduh Mantu satu halaman bertema Betawi modern untuk Depon & Osyah.

Seluruh bagian menggunakan palet hijau, marun, krem, dan emas dengan ornamen gigi balang, kembang kelapa, serta siluet Rumah Kebaya yang konsisten dari cover hingga penutup.

## Struktur proyek

```text
depon-osyah/
├── assets/
│   ├── audio/       # Musik latar
│   ├── css/         # Stylesheet
│   ├── images/      # Cover, foto mempelai, dan galeri
│   └── js/          # Data undangan dan interaksi halaman
├── .nojekyll        # Mencegah pemrosesan Jekyll
├── index.html       # Halaman utama
└── README.md        # Dokumentasi proyek
```

## Menjalankan secara lokal

Karena proyek ini berupa situs statis, jalankan server lokal dari direktori repository:

```bash
python -m http.server 8000
```

Kemudian buka `http://localhost:8000` di browser.

## Mengganti data

- Nama, orang tua, tanggal, lokasi, dan tautan Google Maps: ubah di `assets/js/data.js`.
- Galeri berada di `assets/images/gallery-01.webp` sampai `assets/images/gallery-03.webp`.
- Foto mempelai berada di `assets/images/person-depon.webp` dan `assets/images/person-osyah.webp`.
- Musik latar berada di `assets/audio/musik-betawi.mp3`; musik mulai setelah tombol **Buka Undangan** ditekan dan dapat dinyalakan/dimatikan melalui tombol musik.
- Saat cover dibuka, halaman akan meminta mode fullscreen apabila didukung oleh browser.

## Publikasi GitHub Pages

1. Buka **Settings > Pages** pada repository.
2. Pada **Build and deployment**, pilih **Deploy from a branch**.
3. Pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
4. Tunggu proses deployment selesai. Situs akan tersedia di:

   `https://salamundangan-qu.github.io/depon-osyah/`

Gunakan foto WebP terkompresi agar halaman tetap ringan.
