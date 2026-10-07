import { student, siswaNav } from '../../data/siswa.js'
import { Icon } from '../Icon.jsx'

export function SiswaHeader() {
  return (
    <header className="bg-surface-container-lowest border-b border-outline-variant shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center w-full px-4 md:px-8 max-w-7xl mx-auto h-16">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-primary-container flex items-center justify-center text-on-primary-container shadow-sm border border-outline-variant/40">
            <Icon name="school" className="text-2xl fill" />
          </div>
          <div className="flex flex-col">
            <span className="text-headline-md font-extrabold text-primary leading-tight tracking-tight">
              Sekolah Pintar
            </span>
            <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">
              Portal Belajar Ceria
            </span>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {siswaNav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className={
                n.active
                  ? 'text-primary font-bold border-b-2 border-primary pb-1 text-label-lg transition-all'
                  : 'text-on-surface-variant hover:text-on-surface pb-1 text-label-lg transition-colors'
              }
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 bg-surface-container-low px-3 py-1.5 rounded-full border border-outline-variant/60">
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container-lowest" title="850 XP Bintang">
              <Icon name="stars" className="text-amber-500 fill text-lg" />
              <span className="text-label-md text-on-surface">{student.xp}</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container-lowest" title="Streak Belajar 5 Hari">
              <Icon name="local_fire_department" className="text-orange-500 fill text-lg" />
              <span className="text-label-md text-on-surface">{student.streak}</span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container-lowest" title="12 Lencana Juara">
              <Icon name="military_tech" className="text-emerald-600 fill text-lg" />
              <span className="text-label-md text-on-surface">{student.badges}</span>
            </div>
          </div>
          <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors relative" title="Notifikasi">
            <Icon name="notifications" />
            <span className="w-2.5 h-2.5 bg-error rounded-full absolute top-2 right-2 border-2 border-surface-container-lowest"></span>
          </button>
          <div className="flex items-center gap-2 pl-2 border-l border-outline-variant/60">
            <div className="relative">
              <img alt="Avatar Siswa" className="w-10 h-10 rounded-full object-cover border-2 border-primary-container shadow-sm" src={student.avatar} />
              <span className="absolute -bottom-1 -right-1 bg-secondary text-white text-[9px] font-extrabold px-1.5 rounded-full border border-white">
                {student.kelas}
              </span>
            </div>
            <div className="hidden xl:flex flex-col text-left">
              <span className="text-label-md text-on-surface leading-tight">{student.name}</span>
              <span className="text-label-sm text-secondary leading-tight">{student.level}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
