import { useState } from 'react'
import { interaksiUser, interaksiNav } from '../../data/interaksi.js'
import { Icon } from '../Icon.jsx'

export function InteraksiHeader() {
  const [role, setRole] = useState('siswa')
  return (
    <header className="bg-surface-container-lowest sticky top-0 z-50 shadow-sm border-b border-outline-variant/30">
      <div className="flex justify-between items-center w-full px-4 md:px-8 max-w-7xl mx-auto h-16">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-primary-container flex items-center justify-center text-on-primary-container shadow-inner">
              <Icon name="school" className="text-headline-sm" fill />
            </div>
            <span className="text-headline-md font-extrabold text-primary tracking-tight">Sekolah Pintar</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/40 border border-secondary-container text-on-secondary-container">
            <Icon name="stars" className="text-sm" fill />
            <span className="text-label-sm uppercase tracking-wide">Kelas 4B - Juara</span>
          </div>
        </div>
        <nav className="hidden lg:flex items-center gap-6">
          {interaksiNav.map((n) => (
            <a key={n.label} href={n.href}
              className={n.active ? 'text-primary font-bold border-b-2 border-primary pb-1 flex items-center gap-1.5 text-label-lg' : 'text-on-surface-variant hover:text-on-surface pb-1 flex items-center gap-1.5 text-label-lg'}>
              <Icon name={n.icon} className="text-lg" fill={n.active} />
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-amber-50 border border-primary-container text-on-primary-container">
            <Icon name="local_fire_department" className="text-primary" fill />
            <span className="text-label-md font-bold">{interaksiUser.xp}</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400"></span>
            <span className="text-label-sm">{interaksiUser.level}</span>
          </div>
          <div className="flex items-center p-1 bg-surface-container rounded-2xl border border-outline-variant/40">
            <button onClick={() => setRole('siswa')}
              className={role === 'siswa' ? 'px-2.5 py-1 text-label-sm rounded-xl bg-surface-container-lowest text-primary font-bold shadow-sm flex items-center gap-1' : 'px-2.5 py-1 text-label-sm rounded-xl text-on-surface-variant flex items-center gap-1'}>
              <Icon name="face" className="text-sm" />
              <span className="hidden sm:inline">{interaksiUser.name}</span>
            </button>
            <button onClick={() => setRole('guru')}
              className={role === 'guru' ? 'px-2.5 py-1 text-label-sm rounded-xl bg-surface-container-lowest text-secondary font-bold shadow-sm flex items-center gap-1' : 'px-2.5 py-1 text-label-sm rounded-xl text-on-surface-variant flex items-center gap-1'}>
              <Icon name="school" className="text-sm" />
              <span className="hidden sm:inline">{interaksiUser.teacher}</span>
            </button>
          </div>
          <button aria-label="Notifikasi" className="relative w-10 h-10 rounded-2xl hover:bg-surface-container flex items-center justify-center text-on-surface-variant">
            <Icon name="notifications" className="text-xl" />
            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-error rounded-full ring-2 ring-surface-container-lowest"></span>
          </button>
          <div className="w-10 h-10 rounded-2xl overflow-hidden border-2 border-primary-container shadow-sm flex items-center justify-center bg-primary-container text-on-primary-container font-bold">
            {role === 'siswa' ? 'B' : 'N'}
          </div>
        </div>
      </div>
    </header>
  )
}
