import { useState } from 'react'
import { Icon } from './Icon.jsx'

export function CreateTaskModal({ open, onClose, onSubmit }) {
  const [title, setTitle] = useState('')
  const [mapel, setMapel] = useState('IPA Tematik')

  if (!open) return null

  function handleSubmit(e) {
    e.preventDefault()
    if (!title.trim()) return
    onSubmit({ title: title.trim(), mapel })
    setTitle('')
    setMapel('IPA Tematik')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-on-surface/40" onClick={onClose}></div>
      <div className="relative w-full max-w-md bg-surface-container-lowest rounded-2xl border border-outline-variant/50 p-6 shadow-xl space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-title-md font-bold text-on-surface flex items-center gap-2">
            <Icon name="add_circle" className="text-secondary" fill />
            Buat Tugas Baru
          </h2>
          <button onClick={onClose} className="p-2 rounded-xl hover:bg-surface-container transition-colors">
            <Icon name="close" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="text-label-md font-bold text-on-surface block mb-1">Judul Tugas</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="cth: LKS Daur Hidup Kupu-kupu"
              className="w-full h-12 px-4 rounded-xl border-2 border-outline-variant/50 bg-white text-on-surface focus:border-primary-container focus:outline-none"
            />
          </div>
          <div>
            <label className="text-label-md font-bold text-on-surface block mb-1">Mata Pelajaran</label>
            <select
              value={mapel}
              onChange={(e) => setMapel(e.target.value)}
              className="w-full h-12 px-4 rounded-xl border-2 border-outline-variant/50 bg-white text-on-surface focus:border-primary-container focus:outline-none"
            >
              <option>IPA Tematik</option>
              <option>Matematika</option>
              <option>B. Indonesia</option>
              <option>SBdP</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-tertiary-container hover:bg-secondary-fixed text-on-tertiary-container rounded-xl font-bold stamp-green transition-transform text-label-lg"
          >
            Simpan &amp; Bagikan ke Kelas 4B
          </button>
        </form>
      </div>
    </div>
  )
}
