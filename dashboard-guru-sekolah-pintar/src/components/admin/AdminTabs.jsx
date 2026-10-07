import { useState } from 'react'
import { adminTabs } from '../../data/admin.js'
import { Icon } from '../Icon.jsx'

export function AdminTabs() {
  const [active, setActive] = useState(0)
  return (
    <div className="bg-surface-container-lowest rounded-2xl p-2 border border-outline-variant shadow-sm flex items-center gap-2 overflow-x-auto">
      {adminTabs.map((tab, i) => (
        <button
          key={tab.label}
          onClick={() => setActive(i)}
          className={
            i === active
              ? 'flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary-container text-on-primary-container text-label-lg font-bold shadow-sm whitespace-nowrap'
              : 'flex items-center gap-2 px-5 py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container hover:text-on-surface text-label-lg transition-colors whitespace-nowrap'
          }
        >
          <Icon name={tab.icon} className="text-lg" fill={i === active} />
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  )
}
