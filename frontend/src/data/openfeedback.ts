import type { Edition, Talk } from './types'

/**
 * Build the "leave a comment/note" link for a talk.
 *
 * OpenFeedback deep links follow `https://openfeedback.io/{project}/{YYYY-MM-DD}/{sessionId}`.
 * We use the Jekyll talk id (e.g. `d1t1s1`) as the session id. If OpenFeedback's
 * session ids diverge from those, this is the single spot to adjust — and it
 * already degrades gracefully to the project-level page.
 */
export function feedbackUrl(edition: Edition, talk: Talk): string {
  const base = edition.openFeedbackUrl
  if (!base) return ''
  if (talk.day && talk.id) return `${base}/${talk.day}/${talk.id}`
  return base
}
