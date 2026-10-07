import { Icon } from '../Icon.jsx'

export function AdminUserControls({ q, setQ, role, setRole, onToast }) {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-headline-sm text-on-surface font-bold flex items-center gap-2">
            <Icon name="supervisor_account" className="text-primary text-2xl" />
            Manajemen Pengguna Terpusat
          </h2>
          <p className="text-body-sm text-on-surface-variant mt-0.5">
            Kelola hak akses, status Dapodik, dan kredensial siswa, pendidik, dan wali murid.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => onToast('Impor Dapodik dimulai.')} className="px-3 py-2 rounded-xl border border-outline-variant text-body-sm text-on-surface hover:bg-surface-container">
            Impor Dapodik
          </button>
          <button onClick={() => onToast('Ekspor akun (CSV) diunduh.')} className="px-3 py-2 rounded-xl border border-outline-variant text-body-sm text-on-surface hover:bg-surface-container">
            Ekspor Akun
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 pt-2">
        <div className="md:col-span-6 relative">
          <Icon name="search" className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xl" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Cari nama, NISN, NIP, atau kelas..." type="text"
            className="w-full h-11 pl-10 pr-4 rounded-xl border-2 border-outline-variant/60 text-body-md text-on-surface" />
        </div>
        <div className="md:col-span-3">
          <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full h-11 px-3 rounded-xl border-2 border-outline-variant/60 text-body-sm bg-surface-container-lowest">
            <option value="all">Semua Peran (838)</option>
            <option value="guru">Guru &amp; Wali Kelas (28)</option>
            <option value="siswa">Siswa Kelas 1 - 6 (420)</option>
            <option value="ortu">Orang Tua / Wali (390)</option>
          </select>
        </div>
        <div className="md:col-span-3">
          <select className="w-full h-11 px-3 rounded-xl border-2 border-outline-variant/60 text-body-sm bg-surface-container-lowest">
            <option>Status: Semua</option>
            <option>Status: Aktif</option>
            <option>Perlu Verifikasi (6)</option>
          </select>
        </div>
      </div>
    </>
  )
}
