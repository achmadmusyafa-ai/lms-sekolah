import { Icon } from './Icon.jsx'

export function KehadiranCard() {
  return (
    <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/50 p-5 tactile-card flex flex-col justify-between">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-label-sm font-bold text-outline uppercase tracking-wider block">
            Kehadiran Hari Ini
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-headline-lg font-extrabold text-on-surface">
              27<span className="text-headline-sm text-outline font-semibold"> / 28</span>
            </span>
          </div>
        </div>
        <div className="w-11 h-11 rounded-xl bg-tertiary-container flex items-center justify-center text-on-tertiary-container">
          <Icon name="groups" fill />
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-surface-container">
        <div className="flex items-center justify-between text-body-sm mb-2">
          <span className="text-on-surface-variant font-medium">96.4% Hadir</span>
          <span className="text-error font-bold flex items-center gap-1 text-label-sm">
            <span className="w-2 h-2 rounded-full bg-error"></span> 1 Izin Sakit
          </span>
        </div>
        <button className="w-full py-2 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-xl text-label-sm font-bold flex items-center justify-center gap-1.5 transition-colors">
          <Icon name="checklist" className="text-base" />
          Rekam Absensi Hari Ini
        </button>
      </div>
    </div>
  )
}

export function TugasCard() {
  return (
    <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/50 p-5 tactile-card flex flex-col justify-between">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-label-sm font-bold text-outline uppercase tracking-wider block">
            Tugas Perlu Dinilai
          </span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-headline-lg font-extrabold text-primary">18</span>
            <span className="text-label-md font-bold text-on-surface-variant">Mengantre</span>
          </div>
        </div>
        <div className="w-11 h-11 rounded-xl bg-primary-container flex items-center justify-center text-on-primary-container">
          <Icon name="pending_actions" fill />
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-surface-container">
        <p className="text-body-sm text-on-surface-variant line-clamp-1 mb-2">
          LKS Matematika &amp; IPA Menunggu Penilaian
        </p>
        <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
          <div className="bg-primary h-full rounded-full" style={{ width: '64%' }}></div>
        </div>
        <span className="text-label-sm text-outline mt-1.5 block">
          10 tugas terselesaikan pagi ini
        </span>
      </div>
    </div>
  )
}
