/** Shapes mirror the JSON produced by scripts/generate-data.js. */

export interface Edition {
  name: string
  year: number
  openFeedbackUrl: string
  website: string
  cfpUrl: string
  ticketUrl: string
  /** ISO dates (YYYY-MM-DD), chronological. */
  days: string[]
}

export interface Speaker {
  id: string
  name: string
  photoUrl: string
  bioHtml: string
  twitter?: string
  github?: string
  linkedin?: string
}

export interface Talk {
  id: string
  title: string
  format: string
  category: string
  room: string
  /** ISO date (YYYY-MM-DD). */
  day: string
  timeStart: string
  timeEnd: string
  startMinutes: number
  endMinutes: number
  abstractHtml: string
  speakerIds: string[]
}

export type BreakKind = 'welcome' | 'pause' | 'lunch' | 'party'

export interface Break {
  id: string
  day: string
  title: string
  kind: BreakKind
  timeStart: string
  timeEnd: string
  startMinutes: number
  endMinutes: number
}

export interface ConferenceData {
  edition: Edition
  speakers: Speaker[]
  talks: Talk[]
  breaks: Break[]
}
