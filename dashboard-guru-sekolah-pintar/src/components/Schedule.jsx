import { Icon } from './Icon.jsx'

export function Schedule() {
  return (
    <section
      aria-labelledby="schedule-heading"
      className="bg-surface-container-lowest rounded-2xl border border-outline-variant/50 p-6 shadow-sm space-y-4"
    >
      <div className="flex items-center justify-between pb-3 border-b border-surface-container">
        <h2 className="text-title-md font-bold text-on-surface flex items-center gap-2" id="schedule-heading">
          <Icon name="calendar_month" className="text-primary" />
          Jadwal Kelas Hari Ini
        </h2>
        <span className="text-label-sm bg-primary-container text-on-primary-container px-2.5 py-0.5 rounded-full font-bold">
          2 Sesi
        </span>
      </div>
      <div className="space-y-3">
        <div className="p-3.5 rounded-xl border-l-4 border-l-secondary bg-surface-container-low flex items-start gap-3">
          <div className="p-2 rounded-lg bg-secondary-container text-on-secondary-container">
            <Icon name="biotech" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-label-md font-bold text-on-surface">07.30 - 09.00 WIB</span>
              <span className="text-label-sm font-bold text-secondary bg-surface-container-lowest px-2 py-0.5 rounded">
                Selesai
              </span>
            </div>
            <h3 className="text-label-lg font-bold text-on-surface mt-0.5">Tematik IPA (Ruang 4B)</h3>
            <p className="text-body-sm text-on-surface-variant">Materi Siklus Ekosistem &amp; LKS Observasi Mini</p>
          </div>
        </div>
        <div className="p-3.5 rounded-xl border-l-4 border-l-primary bg-primary-container/10 flex items-start gap-3">
          <div className="p-2 rounded-lg bg-primary-container text-on-primary-container">
            <Icon name="calculate" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-label-md font-bold text-on-surface">09.30 - 11.00 WIB</span>
              <span className="text-label-sm font-bold text-primary bg-primary-container px-2 py-0.5 rounded">
                Siap Mulai
              </span>
            </div>
            <h3 className="text-label-lg font-bold text-on-surface mt-0.5">Kuis Matematika Interaktif</h3>
            <p className="text-body-sm text-on-surface-variant">Bab Operasi Hitung Pecahan Bersama Tablet Kelas</p>
          </div>
        </div>
      </div>
    </section>
  )
}
