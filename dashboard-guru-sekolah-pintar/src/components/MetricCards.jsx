import { KehadiranCard, TugasCard } from './cardsA.jsx'
import { NilaiCard, MateriCard } from './cardsB.jsx'
import { Icon } from './Icon.jsx'

export function MetricCards() {
  return (
    <section aria-labelledby="metric-summary-heading">
      <div className="flex items-center justify-between mb-4">
        <h2
          className="text-title-md font-bold text-on-surface flex items-center gap-2"
          id="metric-summary-heading"
        >
          <Icon name="analytics" className="text-secondary" />
          Statistik Cepat Kelas 4B
        </h2>
        <span className="text-label-sm text-outline">Pembaruan: 5 Menit yang lalu</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        <KehadiranCard />
        <TugasCard />
        <NilaiCard />
        <MateriCard />
      </div>
    </section>
  )
}
