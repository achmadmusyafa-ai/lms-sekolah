export function Footer() {
  return (
    <footer className="mt-auto border-t border-outline-variant/30 bg-surface-container-lowest py-4 px-8 text-center text-body-sm text-outline">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>© 2024 Sekolah Pintar. Platform Manajemen Pembelajaran Sekolah Dasar Kurikulum Merdeka.</p>
        <div className="flex items-center gap-4 text-label-sm font-bold text-on-surface-variant">
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary">Panduan Guru</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary">Standar Rubrik</a>
          <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary">Status Server</a>
        </div>
      </div>
    </footer>
  )
}
