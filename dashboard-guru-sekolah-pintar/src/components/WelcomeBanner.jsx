import { teacher } from '../data/teacher.js'
import { Icon } from './Icon.jsx'

export function WelcomeBanner({ activeClass, onSwitchClass }) {
  return (
    <section className="bg-gradient-to-r from-primary-container/30 via-tertiary-container/20 to-surface-container-lowest border-2 border-outline-variant/40 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
      <div className="space-y-1">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-lowest rounded-full border border-outline-variant/30 text-label-sm text-secondary font-bold">
          <Icon name="wb_sunny" className="text-sm" />
          <span>Rabu, 23 Oktober 2024 • Semester Ganjil</span>
        </div>
        <h1 className="text-headline-lg text-on-surface font-extrabold tracking-tight">
          Selamat Pagi, {teacher.fullName}! 🌻
        </h1>
        <p className="text-body-md text-on-surface-variant">
          Siswa {activeClass} telah siap untuk pembelajaran tematik hari ini. Ada{' '}
          {teacher.pendingCount} kiriman tugas menanti evaluasi.
        </p>
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-label-sm text-outline font-bold">Ganti Kelas Cepat:</span>
        {['Kelas 4A', 'Ekskul Sains'].map((kelas) => (
          <button
            key={kelas}
            onClick={() => onSwitchClass(kelas)}
            className="px-3 py-1.5 bg-surface-container-lowest hover:bg-surface-container border border-outline-variant/50 rounded-lg text-label-sm font-bold text-on-surface transition-colors"
          >
            {kelas}
          </button>
        ))}
      </div>
    </section>
  )
}
