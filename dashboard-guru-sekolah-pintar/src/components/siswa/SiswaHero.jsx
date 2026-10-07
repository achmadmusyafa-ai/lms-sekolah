import { student } from '../../data/siswa.js'
import { Icon } from '../Icon.jsx'

export function SiswaHero() {
  return (
    <section className="relative overflow-hidden rounded-[24px] bg-gradient-to-r from-primary-fixed via-primary-container to-secondary-fixed p-6 md:p-8 border-2 border-outline-variant/40 shadow-md">
      <div className="absolute -right-8 -bottom-8 w-64 h-64 bg-white/20 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute top-4 right-1/3 text-4xl opacity-30 select-none">✨</div>
      <div className="absolute bottom-4 left-1/4 text-3xl opacity-25 select-none">🚀</div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1 space-y-4 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-surface-container-lowest/90 px-4 py-1.5 rounded-full border border-primary-container/80">
            <Icon name="stars" className="text-amber-500 fill text-lg" />
            <span className="text-label-md text-on-surface">
              Halo, {student.name}! (Kelas {student.kelas}) 🌟 Level 8 Penjelajah Cilik
            </span>
          </div>
          <h1 className="text-headline-lg text-on-background tracking-tight">
            Selamat Pagi Budi! <br className="hidden sm:inline" />Siap Berpetualang Hari Ini?
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-xl">
            Selesaikan 2 misi hari ini untuk membuka lencana istimewa{' '}
            <strong className="text-on-surface underline decoration-secondary decoration-2">
              &quot;Ilmuwan Cilik Spektakuler&quot;
            </strong>
            !
          </p>
          <div className="bg-surface-container-lowest/80 p-3.5 rounded-2xl max-w-lg border border-outline-variant/40">
            <div className="flex justify-between items-center text-label-md mb-2">
              <span className="text-on-surface flex items-center gap-1.5">
                <Icon name="task_alt" className="text-secondary text-base" />
                Progress Belajar Hari Ini
              </span>
              <span className="text-secondary font-extrabold text-sm">60% Selesai (3/5 Misi)</span>
            </div>
            <div className="w-full h-3.5 bg-outline-variant/30 rounded-full overflow-hidden p-0.5 relative">
              <div className="h-full bg-gradient-to-r from-secondary-container via-secondary to-tertiary-fixed-dim rounded-full flex items-center justify-end pr-1" style={{ width: '60%' }}>
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          <div className="pt-2">
            <a href="#tugas-kuis" className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-secondary text-white text-label-lg rounded-[16px] btn-tactile-secondary shadow-md cursor-pointer">
              <span>Mulai Misi Hari Ini</span>
              <span className="text-lg">🚀</span>
            </a>
          </div>
        </div>
        <div className="w-56 h-56 md:w-64 md:h-64 flex-shrink-0 relative">
          <div className="absolute inset-0 bg-primary-fixed/50 rounded-full blur-xl transform scale-90"></div>
          <div className="w-full h-full relative z-10 flex items-center justify-center text-[120px] select-none">🦉</div>
        </div>
      </div>
    </section>
  )
}
