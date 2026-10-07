import { useState } from 'react'
import { adminUsers } from '../../data/adminUsers.js'
import { AdminUserControls } from './AdminUserControls.jsx'
import { AdminUserRow } from './AdminUserRow.jsx'

export function AdminUserTable({ onToast }) {
  const [q, setQ] = useState('')
  const [role, setRole] = useState('all')
  const [page, setPage] = useState(1)
  const filtered = adminUsers.filter((u) => {
    const mq = !q || u.name.toLowerCase().includes(q.toLowerCase())
    return mq && (role === 'all' || u.type === role)
  })
  return (
    <section className="bg-surface-container-lowest rounded-3xl border border-outline-variant p-6 shadow-sm space-y-5">
      <AdminUserControls q={q} setQ={setQ} role={role} setRole={setRole} onToast={onToast} />
      <div className="overflow-x-auto rounded-2xl border border-outline-variant/80">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low text-label-sm uppercase tracking-wider border-b border-outline-variant/80">
              <th className="py-3 px-4">Nama Lengkap &amp; Peran</th>
              <th className="py-3 px-4">Identitas</th>
              <th className="py-3 px-4">Unit / Kelas</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Tindakan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/40 text-body-md">
            {filtered.map((u) => (<AdminUserRow key={u.name} u={u} onToast={onToast} />))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-between text-body-sm text-on-surface-variant">
        <span>Menampilkan 1 - 5 dari 838 pengguna</span>
        <div className="flex items-center gap-1.5">
          <button disabled={page === 1} onClick={() => setPage(1)} className="px-3 py-1.5 rounded-lg border disabled:opacity-50">Sebelumnya</button>
          <button onClick={() => setPage(2)} className="px-3 py-1.5 rounded-lg border hover:bg-surface-container">Selanjutnya</button>
        </div>
      </div>
    </section>
  )
}
