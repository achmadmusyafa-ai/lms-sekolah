import { Icon } from '../Icon.jsx'

export function InteraksiHero({ onToast }) {
  return (
    <section className="bg-gradient-to-r from-primary-container/20 via-surface-container-low to-secondary-container/30 border-2 border-primary-container/60 rounded-3xl p-5 md:p-6 shadow-sm relative overflow-hidden">
      <div className="absolute -right-8 -top-8 w-44 h-44 bg-primary-container/30 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute right-1/4 -bottom-10 w-36 h-36 bg-secondary-container/40 rounded-full blur-xl pointer-events-none"></div>
      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex items-start gap-4 max-w-2xl">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary-container flex items-center justify-center text-on-primary-container shadow-md flex-shrink-0 border-2 border-white">
            <Icon name="videocam" className="text-3xl" fill />
          </div>
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-error text-on-error text-label-sm animate-pulse">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                SEGERA DIMULAI (15 Menit)
              </span>
              <span className="text-label-sm text-secondary font-bold bg-secondary-container/60 px-2.5 py-0.5 rounded-full">
                Tematik IPA &amp; Sains
              </span>
              <span className="text-body-sm text-on-surface-variant flex items-center gap-1">
                <Icon name="schedule" className="text-sm" />
                10.00 - 11.00 WIB
              </span>
            </div>
            <h1 className="text-headline-md md:text-headline-lg text-on-surface tracking-tight">
              Eksplorasi Sains: Mengapa Langit Berwarna Biru? ☀️🌈
            </h1>
            <p className="text-body-md text-on-surface-variant flex items-center gap-2 flex-wrap">
              <span>Bersama <strong>Ibu Nurul, S.Pd.</strong> (Wali Kelas 4B)</span>
              <span className="text-outline-variant">•</span>
              <span className="inline-flex items-center gap-1 text-secondary font-semibold">
                <Icon name="group" className="text-sm" fill />
                14 siswa sudah siap di lobi
              </span>
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-3 w-full lg:w-auto">
          <button onClick={() => onToast('Bergabung ke sesi tatap maya...')} className="tactile-btn-primary bg-primary-container hover:bg-primary-fixed text-on-primary-container px-6 py-3.5 rounded-2xl font-bold text-label-lg flex items-center justify-center gap-2.5 shadow-md">
            <Icon name="meeting_room" className="text-xl" fill />
            Gabung Sesi Tatap Maya
          </button>
          <div className="flex items-center justify-center gap-3 px-3 py-1.5 bg-surface-container-lowest/80 rounded-xl border border-outline-variant/40 text-on-surface-variant text-label-sm">
            <span className="flex items-center gap-1 text-tertiary font-medium">
              <Icon name="mic" className="text-base" fill />
              Mic Siap
            </span>
            <span className="text-outline-variant">|</span>
            <span className="flex items-center gap-1 text-tertiary font-medium">
              <Icon name="videocam" className="text-base" fill />
              Kamera Siap
            </span>
            <span className="text-outline-variant">|</span>
            <button onClick={() => onToast('Tes perangkat dimulai.')} className="text-primary hover:underline font-bold">Uji Coba</button>
          </div>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-outline-variant/30 flex flex-wrap items-center justify-between gap-3 text-body-sm">
        <div className="flex items-center gap-2 text-on-surface-variant">
          <Icon name="history" className="text-primary text-base" />
          <span>Ketinggalan kelas kemarin?</span>
          <button onClick={() => onToast('Memutar rekaman Tematik Siklus Air.')} className="text-primary font-bold hover:underline inline-flex items-center gap-1">
            Tonton Ulang: Rekaman Tematik Siklus Air (45 Menit)
            <Icon name="play_circle" className="text-sm" />
          </button>
        </div>
        <div className="flex items-center gap-2 text-label-sm text-secondary font-semibold bg-white/70 px-3 py-1 rounded-full border border-secondary-container">
          <Icon name="verified_user" className="text-sm" />
          Ruang Tatap Maya Terkunci &amp; Aman untuk Anak SD
        </div>
      </div>
    </section>
  )
}
