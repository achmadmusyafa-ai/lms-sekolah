import { Icon } from '../Icon.jsx'

const rows = [
  { kelas: 'Kelas 1A & 1B', val: '97.8%', bar: 'w-[97.8%]', color: 'text-secondary', bg: 'bg-brand-green' },
  { kelas: 'Kelas 2A & 2B', val: '96.5%', bar: 'w-[96.5%]', color: 'text-secondary', bg: 'bg-brand-green' },
  { kelas: 'Kelas 3A & 3B', val: '95.4%', bar: 'w-[95.4%]', color: 'text-primary', bg: 'bg-brand-yellow' },
  { kelas: 'Kelas 4A', val: '97.1%', bar: 'w-[97.1%]', color: 'text-secondary', bg: 'bg-brand-green' },
  { kelas: 'Kelas 5A & 5B', val: '96.2%', bar: 'w-[96.2%]', color: 'text-secondary', bg: 'bg-brand-green' },
  { kelas: 'Kelas 6A & 6B', val: '98.0%', bar: 'w-[98%]', color: 'text-secondary', bg: 'bg-brand-green' },
]

const hours = [
  { jam: '07:00', val: '78%', bar: 'w-[78%]', bg: 'bg-brand-green', bold: false },
  { jam: '09:00', val: '98%', bar: 'w-[98%]', bg: 'bg-brand-yellow', bold: true },
  { jam: '11:00', val: '95%', bar: 'w-[95%]', bg: 'bg-brand-yellow', bold: true },
  { jam: '13:00', val: '84%', bar: 'w-[84%]', bg: 'bg-brand-green', bold: false },
  { jam: '15:00', val: '42%', bar: 'w-[42%]', bg: 'bg-surface-variant', bold: false },
]

export function AdminStatsWidgets() {
  return (
    <>
      <div className="bg-surface-container-lowest rounded-3xl border border-outline-variant p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center">
              <Icon name="bar_chart" className="text-xl" />
            </div>
            <div>
              <h3 className="text-headline-sm text-on-surface font-bold leading-tight">Statistik Kehadiran per Kelas</h3>
              <p className="text-xs text-on-surface-variant">Semester Ganjil • Rata-rata 96.8%</p>
            </div>
          </div>
        </div>
        <div className="space-y-2.5 pt-1">
          {rows.map((r) => (
            <div key={r.kelas} className="space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-on-surface">{r.kelas}</span>
                <span className={`font-bold ${r.color}`}>{r.val}</span>
              </div>
              <div className="w-full bg-surface-container-high rounded-full h-2.5 overflow-hidden">
                <div className={`h-full rounded-full ${r.bar} ${r.bg}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-3xl border border-outline-variant p-6 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-headline-sm text-on-surface font-bold flex items-center gap-2">
            <Icon name="monitoring" className="text-primary" />
            Keaktifan Harian
          </h3>
          <span className="text-label-sm text-secondary font-bold">Hari Ini</span>
        </div>
        <div className="space-y-2 pt-2">
          {hours.map((h) => (
            <div key={h.jam} className="flex items-center gap-2 text-xs">
              <span className="w-14 text-on-surface-variant font-mono">{h.jam}</span>
              <div className="flex-grow bg-surface-container-low rounded-full h-3 overflow-hidden">
                <div className={`h-full rounded-full ${h.bar} ${h.bg}`}></div>
              </div>
              <span className="w-10 text-right font-bold">{h.val}</span>
            </div>
          ))}
        </div>
        <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between text-body-sm">
          <span className="text-on-surface-variant">Siswa Aktif Saat Ini:</span>
          <span className="font-bold text-secondary text-label-lg">386 Siswa</span>
        </div>
      </div>
    </>
  )
}
