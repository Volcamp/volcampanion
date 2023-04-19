export function contanecationMot(mots: string[]): string {
  if (mots.length === 0) {
    return "";
  } else if (mots.length === 1) {
    return mots[0];
  } else if (mots.length === 2) {
    return `${mots[0]} et ${mots[1]}`;
  } else {
    const dernierNom = mots.pop();
    const autresNoms = mots.join(", ");
    return `${autresNoms} et ${dernierNom}`;
  }

}
