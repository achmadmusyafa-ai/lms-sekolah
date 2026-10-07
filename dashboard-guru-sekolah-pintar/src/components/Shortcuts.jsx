import { ShortcutsTop } from './ShortcutsTop.jsx'
import { ShortcutsBottom } from './ShortcutsBottom.jsx'
import { Icon } from './Icon.jsx'

export function Shortcuts() {
  return (
    <section aria-labelledby="action-shortcuts-heading">
      <h2
        className="text-title-md font-bold text-on-surface mb-4 flex items-center gap-2"
        id="action-shortcuts-heading"
      >
        <Icon name="grid_view" className="text-primary" />
        Fitur Utama &amp; Modul Guru
      </h2>
      <div className="space-y-5">
        <ShortcutsTop />
        <ShortcutsBottom />
      </div>
    </section>
  )
}
