import { QueueTop } from './QueueTop.jsx'
import { QueueBottom } from './QueueBottom.jsx'
import { Icon } from './Icon.jsx'

export function SubmissionQueue() {
  return (
    <section
      aria-labelledby="queue-heading"
      className="lg:col-span-7 bg-surface-container-lowest rounded-2xl border border-outline-variant/50 p-6 shadow-sm space-y-5"
    >
      <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-surface-container">
        <div>
          <h2 className="text-headline-sm font-bold text-on-surface" id="queue-heading">
            Antrean Penilaian &amp; Tugas Masuk
          </h2>
          <p className="text-body-sm text-on-surface-variant">
            Periksa dan berikan feedback untuk tugas siswa yang baru dikumpulkan.
          </p>
        </div>
        <button className="px-3 py-1.5 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-xl text-label-sm font-bold flex items-center gap-1">
          <Icon name="filter_list" className="text-sm" /> Filter
        </button>
      </div>
      <QueueTop />
      <QueueBottom />
      <div className="pt-2 text-center">
        <button className="w-full py-3 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-xl text-label-lg font-bold flex items-center justify-center gap-2 transition-colors">
          <span>Lihat Semua Pengumpulan (28 Siswa)</span>
          <Icon name="arrow_forward" className="text-base" />
        </button>
      </div>
    </section>
  )
}
