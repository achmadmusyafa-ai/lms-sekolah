import { bottomNav } from '../../data/siswaArena.js'
import { Icon } from '../Icon.jsx'

export function SiswaFooter() {
  return (
    <>
      <footer className="mt-12 bg-surface-container-lowest border-t border-outline-variant/60 py-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-primary-container flex items-center justify-center text-on-primary-container">
              <Icon name="school" className="text-lg fill" />
            </div>
            <div>
              <p className="text-label-lg text-on-surface">Sekolah Pintar • SD Juara Bangsa</p>
              <p className="text-body-sm text-on-surface-variant">Mendampingi Belajar Anak Indonesia dengan Rasa Bahagia &amp; Penuh Keberanian</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-body-sm text-on-surface-variant">
            <span>Tahun Ajaran 2024/2025</span>
            <span>•</span>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary transition-colors">Bantuan Guru</a>
            <span>•</span>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-primary transition-colors">Portal Orang Tua</a>
          </div>
        </div>
      </footer>
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 py-2 md:hidden bg-surface-container-lowest border-t border-outline-variant shadow-lg">
        {bottomNav.map((t) => (
          <a
            key={t.label}
            href="#"
            onClick={(e) => e.preventDefault()}
            className={
              t.active
                ? 'flex flex-col items-center justify-center bg-primary-container text-on-primary-container rounded-xl px-4 py-1.5 shadow-sm'
                : 'flex flex-col items-center justify-center text-on-surface-variant px-4 py-1.5 hover:bg-surface-container transition-colors'
            }
          >
            <Icon name={t.icon} className="text-xl" />
            <span className="text-label-sm mt-0.5">{t.label}</span>
          </a>
        ))}
      </nav>
    </>
  )
}
