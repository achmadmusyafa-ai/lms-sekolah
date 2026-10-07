import { InteraksiHeader } from '../components/interaksi/InteraksiHeader.jsx'
import { InteraksiHero } from '../components/interaksi/InteraksiHero.jsx'
import { InteraksiSidebar } from '../components/interaksi/InteraksiSidebar.jsx'
import { ThreadSection } from '../components/interaksi/ThreadSection.jsx'
import { InteraksiWidgets } from '../components/interaksi/InteraksiWidgets.jsx'
import { InteraksiFooter } from '../components/interaksi/InteraksiFooter.jsx'

export function RuangInteraksiPage({ onToast }) {
  return (
    <div className="bg-background text-on-surface antialiased min-h-screen flex flex-col">
      <InteraksiHeader />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 md:px-8 py-6 space-y-6">
        <InteraksiHero onToast={onToast} />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <InteraksiSidebar onToast={onToast} />
          <ThreadSection onToast={onToast} />
          <InteraksiWidgets onToast={onToast} />
        </div>
      </main>
      <InteraksiFooter />
    </div>
  )
}
