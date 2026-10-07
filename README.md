# Undangan Ngunduh Mantu — Depon & Osyah

Undangan digital satu halaman bertema Betawi modern, dibuat ringan dan responsif untuk desktop maupun perangkat seluler.

## Struktur file

```text
.
├── index.html
├── assets
│   ├── audio
│   │   └── musik-betawi.mp3
│   ├── css
│   │   └── style.css
│   ├── images
│   │   ├── cover-betawi.webp
│   │   ├── gallery-01.webp
│   │   ├── gallery-02.webp
│   │   ├── gallery-03.webp
│   │   ├── person-depon.webp
│   │   └── person-osyah.webp
│   └── js
│       ├── data.js
│       └── script.js
└── README.md
```

## Mengubah isi undangan

- Data nama, orang tua, tanggal, waktu, lokasi, dan Google Maps berada di `assets/js/data.js`.
- Foto mempelai dan galeri berada di `assets/images/`.
- Musik latar berada di `assets/audio/musik-betawi.mp3`.
- Tampilan utama berada di `assets/css/style.css`.

## Optimasi

- Seluruh gambar memakai format WebP dan dimuat secara lazy, kecuali gambar cover.
- Gambar memiliki ukuran intrinsik untuk mengurangi pergeseran tata letak.
- Musik tidak diunduh sebelum pengunjung menekan tombol **Buka Undangan**.
- Bagian di luar layar ditunda proses render-nya menggunakan `content-visibility`.
- JavaScript dimuat dengan `defer` dan animasi memiliki fallback untuk browser lama.

## GitHub Pages

Buka **Settings → Pages**, pilih **Deploy from a branch**, lalu gunakan branch `main` dan folder `/ (root)`.

Alamat publik:

`https://salamundangan-qu.github.io/depon-osyah/`
