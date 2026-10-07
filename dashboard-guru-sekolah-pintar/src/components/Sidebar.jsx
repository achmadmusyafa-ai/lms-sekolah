import { NavLink } from 'react-router-dom'
import { teacher, navItems } from '../data/teacher.js'
import { Icon } from './Icon.jsx'

export function Sidebar({ onCreateTask }) {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 z-40 bg-surface-container-low border-r border-outline-variant shadow-sm hidden lg:flex flex-col justify-between p-4">
      <div className="flex flex-col gap-6">
        <div className="flex items-center gap-3 px-2 pt-2">
          <div className="w-10 h-10 rounded-2xl bg-primary-container flex items-center justify-center text-on-primary-container font-extrabold stamp-yellow">
            <Icon name="school" fill />
          </div>
          <div>
            <span className="text-headline-sm font-bold text-primary block leading-tight">
              Sekolah Pintar
            </span>
            <span className="text-label-sm text-secondary font-bold tracking-wide">
              PORTAL GURU &amp; PENGAJAR
            </span>
          </div>
        </div>

        <div className="p-3 bg-surface-container-lowest rounded-2xl border border-outline-variant/40 flex items-center gap-3 shadow-sm">
          <img
            className="w-11 h-11 rounded-xl object-cover ring-2 ring-secondary-container"
            src={teacher.photo}
            alt="Foto Ibu Nurul"
          />
          <div className="overflow-hidden">
            <h2 className="text-label-lg text-on-surface truncate">{teacher.name}</h2>
            <p className="text-body-sm text-secondary font-semibold truncate">{teacher.role}</p>
          </div>
        </div>

        <button
          onClick={onCreateTask}
          className="w-full py-3 px-4 bg-tertiary-container hover:bg-secondary-fixed text-on-tertiary-container rounded-xl font-bold flex items-center justify-center gap-2 stamp-green transition-transform text-label-lg"
        >
          <Icon name="add_circle" className="text-lg" fill />
          <span>Buat Tugas Baru</span>
        </button>

        <nav aria-label="Menu Utama Guru" className="flex flex-col gap-1.5 mt-1">
          {navItems.map((item) => {
            const inner = (
              <>
                <Icon name={item.icon} fill={item.active} />
                <span className="text-label-md">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-primary-container text-on-primary-container text-label-sm px-2 py-0.5 rounded-full font-bold">
                    {item.badge}
                  </span>
                )}
              </>
            )
            const cls = item.active
              ? 'flex items-center gap-3 px-4 py-3 bg-secondary-container text-on-secondary-container rounded-xl font-bold transition-all'
              : 'flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container rounded-xl transition-colors'
            return item.path ? (
              <NavLink key={item.label} to={item.path} className={cls}>
                {inner}
              </NavLink>
            ) : (
              <a
                key={item.label}
                href="#"
                onClick={(e) => e.preventDefault()}
                className={cls}
              >
                {inner}
              </a>
            )
          })}
        </nav>
      </div>

      <div className="pt-4 border-t border-outline-variant/30 flex flex-col gap-1">
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="flex items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:bg-surface-container rounded-xl transition-colors"
        >
          <Icon name="settings" className="text-lg" />
          <span className="text-label-md">Pengaturan Kelas</span>
        </a>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="flex items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:bg-surface-container rounded-xl transition-colors"
        >
          <Icon name="help" className="text-lg" />
          <span className="text-label-md">Pusat Bantuan</span>
        </a>
      </div>
    </aside>
  )
}
