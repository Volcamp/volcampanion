# Prompts ChatGPT — icônes des 4 onglets (mascotte Volcampanion)

Objectif : 4 icônes de barre d'onglets **cohérentes**, dérivées de la mascotte
(`frontend/public/img/volcampanion.png`) : petit volcan kawaii, corps conique
brun brillant, lave orange→jaune coulant d'un cratère, 2 gouttes de lave qui
flottent, grands yeux brillants, sourire, joues roses, petits bras/pieds,
contour épais, rendu « sticker » 3D doux.

## Méthode recommandée (la plus fidèle)
Dans ChatGPT (GPT‑4o / DALL·E), **joins l'image `volcampanion.png`** puis colle
le *bloc de style commun* + **un** prompt d'onglet à la fois. Génère les 4 dans
la **même conversation** pour garder un style identique.

## Spécifications techniques (à rappeler à chaque génération)
- Format **carré 1024×1024**, **fond transparent** (PNG).
- Sujet **centré**, marge intérieure généreuse, **silhouette forte** et détails
  minimalistes : l'icône doit rester lisible à **24–28 px**.
- **Éclairage, épaisseur de contour et palette identiques** sur les 4.
- Palette : corps brun `#5A3320`, lave `#FF7A18`→`#FFB400`, joues `#F4978E`.
- Une seule version couleur par onglet suffit : l'app grise/atténue l'onglet
  inactif en CSS.

---

## Bloc de style commun (à coller avant chaque prompt)
> Icône d'application mobile, style sticker vectoriel doux, mascotte volcan
> kawaii identique à l'image de référence (corps conique brun brillant, lave
> orange et jaune coulant du sommet, grands yeux brillants, joues roses,
> sourire, petits bras et pieds, contour épais et net, ombrage 3D léger).
> Composition centrée, fond transparent, marge généreuse, formes simplifiées et
> lisibles à très petite taille. Palette chaude cohérente. Carré 1024×1024.

---

## 1. Onglet « Programme » (agenda)
> …[bloc de style commun]… La mascotte tient un **petit calendrier / planning**
> devant elle (grille avec une case surlignée en **vert `#6FC660`**). Expression
> enthousiaste. Accent de couleur vert. Rien d'autre dans l'image.

## 2. Onglet « Speakers » (conférenciers)
> …[bloc de style commun]… La mascotte tient un **micro de scène** d'une petite
> main, comme si elle présentait un talk. Léger reflet sur le micro. Accent de
> couleur **violet/indigo** discret. Rien d'autre dans l'image.

## 3. Onglet « Favoris »
> …[bloc de style commun]… La mascotte **serre une grande étoile dorée**
> (`#F4B400`) contre elle, yeux en cœur / très joyeux. Petites étincelles autour
> de l'étoile. Accent doré. Rien d'autre dans l'image.

## 4. Onglet « Infos »
> …[bloc de style commun]… La mascotte lève une petite main à côté d'une
> **bulle d'information ronde avec un « i »** (bulle **bleue `#5B8DEF`**, « i »
> blanc). Expression avenante. Accent bleu. Rien d'autre dans l'image.

---

## Variante « pictogramme » (si le rendu détaillé passe mal à 24 px)
Ajoute à la fin du prompt :
> Version très épurée : silhouette plate quasi monochrome de la mascotte + le
> pictogramme de l'onglet, style icône d'interface, 2 couleurs maximum.

## Intégration dans l'app (une fois les PNG prêts)
Dépose les fichiers dans `frontend/public/icons/tabs/` :
`programme.png`, `speakers.png`, `favoris.png`, `infos.png`.
Préviens‑moi : je remplace les emojis de `src/components/BottomNav.tsx` par des
`<img>` et j'atténue l'onglet inactif en CSS (grayscale + opacité).
