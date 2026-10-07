import { principal } from '../../data/admin.js'
import { Icon } from '../Icon.jsx'

export function AdminHeader({ onAddUser }) {
  return (
    <header className="w-full bg-surface-container-lowest sticky top-0 z-50 shadow-sm border-b border-outline-variant">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-primary-container flex items-center justify-center text-on-primary-container shadow-inner border border-primary-fixed">
            <Icon name="school" className="text-3xl" fill />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-headline-md font-extrabold text-primary tracking-tight">
                Sekolah Pintar
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-label-sm bg-primary-container text-on-primary-container border border-primary-fixed">
                <Icon name="verified" className="text-sm" fill />
                {principal.school}
              </span>
            </div>
            <p className="text-body-sm text-on-surface-variant flex items-center gap-1.5 mt-0.5">
              <span className="inline-block w-2 h-2 rounded-full bg-secondary"></span>
              Portal Admin &amp; Eksekutif (Kepala Sekolah)
            </p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-surface-container-low border border-outline-variant">
          <Icon name="calendar_month" className="text-secondary" fill />
          <div className="text-left">
            <div className="text-label-sm text-primary font-bold">{principal.year}</div>
            <div className="text-body-sm text-on-surface-variant">{principal.semester}</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl border-2 border-outline-variant text-on-surface hover:bg-surface-container text-label-lg transition-colors">
            <Icon name="download" className="text-lg" />
            <span>Rekap Bulanan</span>
          </button>
          <button
            onClick={onAddUser}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary-container text-on-primary-container text-label-lg font-bold tactile-btn-primary border border-primary-fixed"
          >
            <Icon name="person_add" className="text-lg" fill />
            <span className="hidden sm:inline">+ Tambah Pengguna</span>
          </button>
          <div className="relative">
            <button
              className="w-10 h-10 rounded-xl bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors"
              title="Notifikasi Sistem"
            >
              <Icon name="notifications" className="text-xl" />
            </button>
            <span className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-error border-2 border-surface-container-lowest"></span>
          </div>
          <div className="flex items-center gap-3 pl-2 border-l border-outline-variant">
            <div className="relative">
              <img
                alt="Foto Kepala Sekolah"
                className="w-11 h-11 rounded-2xl object-cover border-2 border-primary-fixed shadow-sm"
                src={principal.photo}
              />
              <span
                className="absolute -bottom-1 -right-1 bg-secondary text-on-secondary rounded-full p-0.5 shadow-sm"
                title="Terverifikasi Kemendikbudristek"
              >
                <Icon name="check_circle" className="text-xs" fill />
              </span>
            </div>
            <div className="hidden xl:block text-left">
              <div className="text-label-lg text-on-surface font-bold leading-tight">
                {principal.name}
              </div>
              <div className="text-body-sm text-on-surface-variant flex items-center gap-1">
                <span>{principal.role}</span>
                <span className="text-xs text-secondary font-bold">• {principal.org}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
