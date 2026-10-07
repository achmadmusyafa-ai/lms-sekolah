import { Icon } from '../Icon.jsx'

const tabs = [
  { icon: 'explore', label: 'Misi Harian', active: false },
  { icon: 'forum', label: 'Diskusi 4B', active: true },
  { icon: 'auto_stories', label: 'Pelajaran', active: false },
  { icon: 'military_tech', label: 'Prestasi', active: false },
]

export function InteraksiFooter() {
  return (
    <>
      <footer className="bg-surface-container-lowest border-t border-outline-variant/30 mt-12 py-8 text-on-surface-variant">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-primary-container flex items-center justify-center text-on-primary-container font-extrabold text-lg shadow-sm">SP</div>
            <div>
              <p className="text-title-md font-bold text-on-surface">Sekolah Pintar SD Juara Bangsa</p>
              <p className="text-body-sm text-on-surface-variant">Ekosistem Belajar Menyenangkan, Berkarakter &amp; Ramah Anak</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-label-md">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary">Panduan Siswa</a>
            <span className="text-outline-variant">•</span>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary">Portal Orang Tua</a>
            <span className="text-outline-variant">•</span>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary">Etika Ruang Maya</a>
            <span className="text-outline-variant">•</span>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary">Pusat Bantuan</a>
          </div>
          <div className="text-body-sm text-on-surface-variant/80">© 2024 Sekolah Pintar. Kelas 4B Juara.</div>
        </div>
      </footer>
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 bg-surface-container-lowest border-t border-outline-variant/30 shadow-lg md:hidden">
        {tabs.map((t) => (
          <a key={t.label} href="#" onClick={(e) => e.preventDefault()}
            className={t.active ? 'flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-4 py-1.5 shadow-sm' : 'flex flex-col items-center justify-center text-on-surface-variant px-3 py-1.5'}>
            <Icon name={t.icon} className="text-xl" fill={t.active} />
            <span className="text-label-sm mt-0.5">{t.label}</span>
          </a>
        ))}
      </nav>
    </>
  )
}
