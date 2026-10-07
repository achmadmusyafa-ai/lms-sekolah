import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { DashboardGuruPage } from './pages/DashboardGuruPage.jsx'
import { AdministrasiPage } from './pages/AdministrasiPage.jsx'
import { PortalSiswaPage } from './pages/PortalSiswaPage.jsx'
import { RuangInteraksiPage } from './pages/RuangInteraksiPage.jsx'
import { CreateTaskModal } from './components/CreateTaskModal.jsx'

export default function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [activeClass, setActiveClass] = useState('Kelas 4B - Juara')
  const [toast, setToast] = useState('')

  function showToast(msg) {
    setToast(msg)
    window.clearTimeout(showToast._t)
    showToast._t = window.setTimeout(() => setToast(''), 4000)
  }

  function handleCreateTask({ title, mapel }) {
    setModalOpen(false)
    showToast(`Tugas "${title}" (${mapel}) dibagikan ke ${activeClass}.`)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard-guru" replace />} />
        <Route
          path="/dashboard-guru"
          element={
            <DashboardGuruPage
              activeClass={activeClass}
              onSwitchClass={(k) => setActiveClass(k)}
              onCreateTask={() => setModalOpen(true)}
            />
          }
        />
        <Route
          path="/administrasi-manajemen-sekolah"
          element={<AdministrasiPage onToast={showToast} />}
        />
        <Route
          path="/portal-siswa"
          element={<PortalSiswaPage onToast={showToast} />}
        />
        <Route
          path="/ruang-interaksi"
          element={<RuangInteraksiPage onToast={showToast} />}
        />
        <Route path="*" element={<Navigate to="/dashboard-guru" replace />} />
      </Routes>

      <CreateTaskModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleCreateTask}
      />

      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-5 py-3 bg-on-surface text-surface-container-lowest rounded-2xl shadow-xl text-label-md font-bold">
          {toast}
        </div>
      )}
    </BrowserRouter>
  )
}

