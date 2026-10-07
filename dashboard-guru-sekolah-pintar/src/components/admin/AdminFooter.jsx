export function AdminFooter() {
  return (
    <footer className="w-full bg-surface-container-lowest border-t border-outline-variant mt-12 py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-body-sm text-on-surface-variant">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-primary-container flex items-center justify-center text-on-primary-container font-bold text-xs">
            SP
          </div>
          <div>
            <p className="font-bold text-on-surface">© 2024 SD Juara Bangsa • Sekolah Pintar Eksekutif</p>
            <p className="text-xs">Terdaftar &amp; Terintegrasi Resmi dengan Pusat Data Pendidikan Kemendikbudristek RI</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-6 text-xs">
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary transition-colors">Bantuan Teknis Dinas Pendidikan</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary transition-colors">Kebijakan Privasi Data Anak</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary transition-colors">Panduan Kurikulum Merdeka</a>
          <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-mono font-bold">
            Versi Sistem Administrasi v3.4
          </span>
        </div>
      </div>
    </footer>
  )
}
