export function Loader({ label = 'Chargement…' }: { label?: string }) {
  return (
    <div className="center-state">
      <span className="spinner" aria-hidden="true" />
      <span>{label}</span>
    </div>
  )
}

export function ErrorState({ message, onRetry }: { message: string; onRetry?: () => void }) {
  return (
    <div className="center-state">
      <img src={`${import.meta.env.BASE_URL}img/cryingVolcano.png`} alt="" width={120} height={120} />
      <p>Impossible de charger les données.</p>
      <p style={{ fontSize: '0.85rem' }}>{message}</p>
      {onRetry && (
        <button type="button" className="btn btn--primary" onClick={onRetry}>
          Réessayer
        </button>
      )}
    </div>
  )
}

export function OfflineBanner() {
  return (
    <div className="offline-banner" role="status">
      Mode hors ligne — données mises en cache
    </div>
  )
}

export function EmptyState({ children }: { children: React.ReactNode }) {
  return <p className="empty">{children}</p>
}
