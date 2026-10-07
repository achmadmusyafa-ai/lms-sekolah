import { Icon } from '../Icon.jsx'

export function AdminUserRow({ u, onToast }) {
  return (
    <tr className="hover:bg-surface-container-low/50 transition-colors">
      <td className="py-3.5 px-4">
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-label-md ${u.avatarBg}`}>
            {u.initials}
          </div>
          <div>
            <div className="font-bold text-on-surface">{u.name}</div>
            <span className={`inline-block px-2 py-0.5 rounded-full text-label-sm ${u.badgeClass}`}>
              {u.badge}
            </span>
          </div>
        </div>
      </td>
      <td className="py-3.5 px-4 text-on-surface-variant font-mono text-body-sm">{u.identity}</td>
      <td className="py-3.5 px-4 text-on-surface-variant">
        <div className="text-body-sm text-on-surface font-semibold">{u.unit}</div>
        {u.unitSub && <div className="text-xs text-on-surface-variant">{u.unitSub}</div>}
      </td>
      <td className="py-3.5 px-4">
        <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-label-sm ${u.statusClass}`}>
          {u.status}
        </span>
        {u.presensi && <div className="text-xs text-secondary font-bold mt-0.5">{u.presensi}</div>}
      </td>
      <td className="py-3.5 px-4 text-right">
        {u.type === 'siswa' && (
          <div className="inline-flex items-center gap-1">
            <button
              onClick={() => onToast(`Membuka detail ${u.name}.`)}
              className="px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface text-label-sm"
            >
              Detail Siswa
            </button>
            <button
              onClick={() => onToast(`Membuka rapor ${u.name}.`)}
              className="p-1.5 rounded-lg hover:bg-surface-container text-secondary"
              title="Buka Rapor"
            >
              <Icon name="grade" className="text-lg" />
            </button>
          </div>
        )}
        {u.type === 'ortu' && (
          <button
            onClick={() => onToast(`Pesan terkirim ke ${u.name}.`)}
            className="px-2.5 py-1 rounded-lg border border-outline-variant hover:bg-surface-container text-on-surface text-label-sm"
          >
            Kirim Pesan
          </button>
        )}
        {u.type === 'guru' && (
          <div className="inline-flex items-center gap-1">
            <button
              onClick={() => onToast(`Kelola akun ${u.name}.`)}
              className="p-1.5 rounded-lg hover:bg-surface-container text-primary"
              title="Kelola Akun"
            >
              <Icon name="edit_square" className="text-lg" />
            </button>
            <button
              onClick={() => onToast(`Tautan reset password dikirim ke ${u.name}.`)}
              className="p-1.5 rounded-lg hover:bg-surface-container text-on-surface-variant"
              title="Reset Password"
            >
              <Icon name="lock_reset" className="text-lg" />
            </button>
          </div>
        )}
      </td>
    </tr>
  )
}
