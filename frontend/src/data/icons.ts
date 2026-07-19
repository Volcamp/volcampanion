const base = import.meta.env.BASE_URL

/** Mascot-based tab icons, used in the bottom nav and next to page titles. */
export const TAB_ICONS = {
  programme: `${base}icons/tabs/programme.png`,
  speakers: `${base}icons/tabs/speakers.png`,
  favoris: `${base}icons/tabs/favoris.png`,
  infos: `${base}icons/tabs/infos.png`,
} as const
