# Dashboard Guru — Sekolah Pintar (React + Vite + Tailwind)

Rebuild dari `dashboard_guru_pengajar_sekolah_pintar/code.html` menjadi proyek React-Vite
yang terstruktur per komponen.

## Struktur

```
dashboard-guru-sekolah-pintar/
├── index.html
├── vite.config.js
├── tailwind.config.js      # token warna Sekolah Pintar (primary-container, secondary, tertiary, ...)
├── postcss.config.js
├── src/
│   ├── main.jsx
│   ├── index.css           # stamp-yellow / stamp-green / tactile-card
│   ├── App.jsx
│   ├── data/teacher.js
│   └── components/
│       ├── Icon.jsx, Sidebar.jsx, Header.jsx, WelcomeBanner.jsx
│       ├── MetricCards.jsx, cardsA.jsx, cardsB.jsx
│       ├── Shortcuts.jsx, ShortcutsTop.jsx, ShortcutsBottom.jsx
│       ├── SubmissionQueue.jsx, QueueTop.jsx, QueueBottom.jsx
│       ├── Schedule.jsx, ParentHub.jsx, Footer.jsx
│       └── CreateTaskModal.jsx
```

## Cara jalan

```powershell
cd dashboard-guru-sekolah-pintar
npm install
npm run dev
```

Buka http://localhost:5173/dashboard-guru
(`/` otomatis redirect ke `/dashboard-guru`).

## Routing

| Route | Halaman |
|---|---|
| `/dashboard-guru` | Dashboard Guru & Pengajar (sesuai desain `code.html`) |
| `/administrasi-manajemen-sekolah` | Portal Admin & Eksekutif — Administrasi Manajemen Sekolah SD Juara Bangsa |
| `/portal-siswa` | Portal Siswa Ceria — Budi Pratama Kelas 4B (hero, tugas, mapel, arena, lencana) |
| `/ruang-interaksi` | Ruang Interaksi & Tatap Maya Kelas 4B (forum, live session, leaderboard) |
| `/` dan route lain | redirect ke `/dashboard-guru` |

## Fitur interaktif

- Tombol "Buat Tugas Baru" membuka modal dan menampilkan toast sukses.
- "Ganti Kelas Cepat" mengganti label kelas aktif di banner.
- Semua CTA memakai gaya tactile/stamp sesuai desain asli.
