const labels = {
  available: 'Available',
  development: 'In development',
  planned: 'Planned'
} as const

export function Status({ kind, note }: { kind: keyof typeof labels; note?: string }) {
  return (
    <p className="ovra-status-line">
      <span className={`ovra-status ovra-status-${kind}`}>{labels[kind]}</span>
      {note ? <span className="ovra-status-note">{note}</span> : null}
    </p>
  )
}
