import { Hero } from './hero';

export const OGREST: Hero[] = [
  { id: 1, name: 'Dofus Pourpre', infos: ["t1: artefact à ramasser (1/perso), se mettre d'accord avant 🙂",
  "Chaque joueur qui tape ogrest a son tour = -10 resi all, +5% DMG sur ogrest",
    "pas rester en face du boss, dommage dans zone de 3 en face de lui (comme boss srambad), gros dégâts (le tank pourrait pas tank)",
    "au changement de phase: se mettre à 4 po mini des alliés et cadavres d'alliés ou dépop + baffe ",
    "finir son tour à min 3 cases des bords, car ils avancent d’une case vers l’intérieur tous les tours",
    "ne pas passer, finir ou commencer son tour à 1 case des bords, bobo",
    "joueurs à moins de 6 po case centrale = râle 6 pm (volonté utile)"] },
  { id: 2, name: 'Dofus Turquoise', infos: ["Inversion des maîtrises (mêlée<=>distance, mono<=>zone)",
  "-50 resi ogrest pour la phase par rochers tués",
  "être alignés aux rochers en fin de phase",
  "taper un rocher avec un sort donne un effet aux alliés qui permet de taper ogrest (attention, celui qui tape le rocher ne donne pas l'effet)",
  "cailloux à taper par le heal, pour qu'il donne l'effet à ses alliés qui permet de taper ogrest (celui qui tape le rocher n'a lui-même pas l'effet). Le rocher ne peut être tapé qu'une fois par tour"] },
  { id: 3, name: 'Dofus Ebène', infos: ["ogrest gagne 1 pm pour la phase",
  "5po en moins pour l'équipe (sauf arc)",
  "finir son tour en face du boss pour la fin de phase",
  "Ogrest n'utilise pas son bond",
  "ne pas aller au cac, le boss os (auragonie)",
  "Ne pas ret PM dernier tour ? (archétype)",
  "Ogrest gagne 1 PM premier tour, 2PM, puis 3PM. S'il est ret à 0 il aura quand meme ses PM bonus",] },
  { id: 4, name: 'Dofus Emeraude ', infos: ["AU 2eme et 3eme tour, Ogrest invoque 3 trous entre 1-4 PO autour de chaque joueur",
    "Ogrest rall 12 PA aux personnes à 7 po et plus",
    "Pas finir aligner aux alliés en fin de phase",
  "Attention aux trous, mort instantané (comme serre d'acier ou crocos)",
  "Ogrest est vulnérable qu'en ligne précise (au centre des 3) sinon Renvoi de dommages",
  "Ogrest perd 10 résistance par PA/PO/PM retiré pendant 1 tour",
  "ogrest attire les joueurs qui le frappent et poussent les joueurs alignés à l'assaillant.",
  "pas finir tours collé aux trous, ils poussent de max 3",] },
  { id: 5, name: 'Dofus Ivoire ', infos: ["T1 - FACE // T2 - COTE // T3 - DOS",
  "Rochers tombent sur les 2 persos plus éloignées. Ne peux pas taper à nouveau le meme perso. SI les deux meme sont + éloigné, le boss prendre 3 et 4 plus éloignés.",
  "Ogrest n'utilise pas son bond",
  "ogrest repousse les persos à son cac",
  "dernier et avant-dernier tour de la phase, retenir où tombent les pierres (placement début de chacun des persos) ",
  "Utiliser les marqueurs pour ça",
  "dommages sur les deux plus éloignés (en zone de koko de 2 pour les dommages, donc s'éloigner un peu pour les deux concernés)"] },
  { id: 6, name: 'Dofus Ocre', infos: ["pas finir son tour en ligne avec les rochers en fin de phase, explosent en ligne jusqu'à 8 po d'eux",
  "pas finir en diagonale directe avec les rochers en fin de phase (explo touche à 2po cercle)",
  "tenter de commencer son tour aligné aux rochers, pour éviter de bloquer toute la map pour la fin de phase",
  "ogrest doit être proche des rochers (en mêlée) pour qu'il soit désinvu. Le bloquer mais l'empecher de bond",
  "Casser un rocher = 10000 armure ogrest",
  "passif sur les persos qui 'stack' le soin pour le renvoyer en x10 en dommages en mêlée au début de son tour (ogrest et alliés touchés)"] },
  { id: 7, name: 'Artefacts', infos: ["BAGUETTE : Passif : 20% soins réalisés & 20% armures données. Immunité aux rochers lancés par Ogrest, y compris ceux de la phase Ivoire."
  + "Actif : Immunise l’allié ciblé aux rochers lancés par Ogrest. Portée de 1-5, cooldown de 2 tours.",
   "AWC : Passif : +4 PO. Immunité aux retraits PO (Ebène)."
  + "Actif : Pousse Ogrest de 4 cases. Se lance uniquement en ligne. Portée de 2-8, cooldown de 2 tours.",
  "S.I.D. : Passif : +4 PW."
  + "Actif : Téléporte Ogrest sur la case ciblée. Portée de 4-6, cooldown de 4 tours.",
  "SCEPTRE : Passif : +1 PA, +100 résistances. Immunisé aux rebonds d’Ogrest, et les interrompt (Pourpre)."
  + "Actif : -5 PO. Portée de 2-3, cooldown de 3 tours.",
  "AMULETTE : Passif : +1 PM, +100 résistances. Marcher sur une Petite Larme d’Ogrest la retire. Immunité aux zones Larmes d’Ogrest."
  + "Actif : Immunise l’allié ciblé aux zones Larmes d’Ogrest et lui permet de retirer les Larmes d’Ogrest en marchant dessus. 2-3 PO, cooldown de 2 tours.",
  "amulette ne fait pas disparaître les grosses larmes",
  "PAPATTES : Passif : 50% coup critique, 500 Maîtrise critique, 500 résistance critique."
  +"Actif : Donne 25% coup critique et 250 Maîtrise critique à un allié. Portée de 1-5, cooldown de 3 tours.",
  "SPIEDS : Passif : +3 PM, Immunité contre les retraits PM. -90% dégâts reçus de l’Auragonie (Ebène)."
  +"Actif : Immunise l'allié aux retraits PM d'Ogrest, et lui donne -90% dégâts reçus de l'Auragonie. Portée de 1-3, cooldown de 2 tours.",
  "SABLIER : Passif : +2 PA, Immunité contre les retraits PA et aux renvois d’Ogrest (Emeraude)."
  +"Actif : Immunise l’allié ciblé aux renvois et retraits PA d’Ogrest. Portée de 1-5, cooldown de 2 tours.",
  "OCARINA : Passif : +1 PA, +1 PM, +1 PO. Permet de marcher sur les trous (Emeraude)."
  +"Actif : Immunise l’allié ciblé aux trous. Portée de 1-5, cooldown de 2 tours.",] },
];
