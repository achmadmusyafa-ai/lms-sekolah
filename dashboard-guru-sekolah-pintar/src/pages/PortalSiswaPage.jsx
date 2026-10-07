import { SiswaHeader } from '../components/siswa/SiswaHeader.jsx'
import { SiswaHero } from '../components/siswa/SiswaHero.jsx'
import { SiswaTasks } from '../components/siswa/SiswaTasks.jsx'
import { SiswaSubjects } from '../components/siswa/SiswaSubjects.jsx'
import { SiswaArena } from '../components/siswa/SiswaArena.jsx'
import { SiswaBadges } from '../components/siswa/SiswaBadges.jsx'
import { SiswaFooter } from '../components/siswa/SiswaFooter.jsx'

export function PortalSiswaPage({ onToast }) {
  return (
    <div className="bg-background text-on-surface antialiased min-h-screen flex flex-col">
      <SiswaHeader />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 py-6 space-y-8">
        <SiswaHero />
        <SiswaTasks onToast={onToast} />
        <SiswaSubjects onToast={onToast} />
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <SiswaArena onToast={onToast} />
          <SiswaBadges onToast={onToast} />
        </section>
      </main>
      <SiswaFooter />
    </div>
  )
}
