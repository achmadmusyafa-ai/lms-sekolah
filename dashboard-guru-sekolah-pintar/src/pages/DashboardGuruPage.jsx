import { Sidebar } from '../components/Sidebar.jsx'
import { Header } from '../components/Header.jsx'
import { WelcomeBanner } from '../components/WelcomeBanner.jsx'
import { MetricCards } from '../components/MetricCards.jsx'
import { Shortcuts } from '../components/Shortcuts.jsx'
import { SubmissionQueue } from '../components/SubmissionQueue.jsx'
import { Schedule } from '../components/Schedule.jsx'
import { ParentHub } from '../components/ParentHub.jsx'
import { Footer } from '../components/Footer.jsx'

export function DashboardGuruPage({ activeClass, onSwitchClass, onCreateTask }) {
  return (
    <div className="bg-background text-on-surface antialiased flex min-h-screen">
      <Sidebar onCreateTask={onCreateTask} />

      <div className="flex-1 lg:ml-64 flex flex-col min-w-0">
        <Header onCreateTask={onCreateTask} />

        <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto space-y-8">
          <WelcomeBanner activeClass={activeClass} onSwitchClass={onSwitchClass} />
          <MetricCards />
          <Shortcuts />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <SubmissionQueue />
            <div className="lg:col-span-5 space-y-6">
              <Schedule />
              <ParentHub />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  )
}
