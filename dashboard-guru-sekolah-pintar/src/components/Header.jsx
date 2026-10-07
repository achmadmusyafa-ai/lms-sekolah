import { teacher } from '../data/teacher.js'
import { Icon } from './Icon.jsx'

export function Header({ onCreateTask }) {
  return (
    <header className="sticky top-0 z-30 bg-surface-container-lowest/95 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
      <div className="flex justify-between items-center w-full px-6 py-3 max-w-7xl mx-auto h-20 gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <div className="flex flex-col">
            <span className="text-label-sm text-outline uppercase tracking-wider font-bold">
              Aktif Mengajar
            </span>
            <button
              type="button"
              className="inline-flex items-center gap-2 text-headline-sm text-on-surface font-bold hover:text-primary transition-colors focus:outline-none text-left"
            >
              <span className="truncate">{teacher.activeClass}</span>
              <Icon name="expand_more" className="text-xl text-primary" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 bg-surface-container px-3 py-1.5 rounded-xl border border-outline-variant/40">
            <span className="w-2.5 h-2.5 rounded-full bg-error animate-pulse"></span>
            <span className="text-label-sm text-on-surface font-semibold">
              Tugas masuk: <strong className="font-bold">{teacher.pendingCount}</strong>
            </span>
          </div>
          <button
            className="relative p-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container transition-colors"
            title="Notifikasi Sekolah"
          >
            <Icon name="notifications" />
            <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-error"></span>
          </button>
          <button
            className="p-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container transition-colors"
            title="Poin & Apresiasi Mengajar"
          >
            <Icon name="stars" className="text-primary-container" fill />
          </button>
          <button
            onClick={onCreateTask}
            className="flex items-center gap-2 px-4 py-2.5 bg-tertiary-container hover:bg-secondary-fixed text-on-tertiary-container rounded-xl font-bold stamp-green transition-transform ml-1 text-label-lg"
          >
            <Icon name="add" className="text-lg" fill />
            <span className="hidden sm:inline">+ Buat Tugas / Materi Baru</span>
          </button>
        </div>
      </div>
    </header>
  )
}
