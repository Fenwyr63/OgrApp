import { Hero } from './hero';

export const HEROES: Hero[] = [
  { id: 1, name: 'Dofus Pourpre', infos: ["t1: artefact à ramasser (1/perso), se mettre d'accord avant 🙂","tout le monde doit taper ogrest au moins une fois",
    "pas rester en face du boss, dommage dans zone de 3 en face de lui (comme boss srambad), gros dégâts (le tank pourrait pas tank)",
    "au changement de phase: se mettre à 4 po mini des alliés et cadavres d'alliés ou dépop",
    "finir son tour à min 3 cases des bords, car ils avancent d’une case vers l’intérieur tous les tours",
    "ne pas passer, finir ou commencer son tour à 1 case des bords, bobo",
    "joueurs à moins de 6 po = râle pm possible"] },
  { id: 2, name: 'Dofus Turquoise', infos: ["Inversion des maîtrises (mêlée<=>distance, mono<=>zone)",
  "résistance d'ogrest baissent si rochers tués",
  "être alignés aux rochers en fin de phase",
  "taper un rocher avec un sort donne un effet aux alliés qui permet de taper ogrest (attention, celui qui tape le rocher ne donne pas l'effet)",
  "cailloux à taper par le heal, pour qu'il donne l'effet à ses alliés qui permet de taper ogrest (celui qui tape le rocher n'a lui-même pas l'effet). Le rocher ne peut être tapé qu'une fois par tour"] },
  { id: 3, name: 'Dofus Ebène', infos: ["ogrest gagne 1 pm pour la phase",
  "5po en moins pour l'équipe",
  "finir son tour en face du boss pour la fin de phase",
  "ne pas aller au cac, le boss os (auragonie)",
  "Etendard iop strat ?"] },
  { id: 4, name: 'Dofus Emeraude ', infos: ["Pas finir aligner aux alliés en fin de phase",
  "Attention aux trous, mort instantané (comme serre d'acier ou crocos)",
  "Ogrest est vulnérable qu'en ligne précise (au centre des 3)",
  "Renvoi de dommages lorsque pas sur la ligne centrale (au milieu des 3 pour ogrest)",
  "ogrest attire les joueurs qui le frappent et poussent les joueurs alignés à l'assaillant",
  "pas finir tours collé aux trous, ils poussent de max 3",
  "5po ou moins pour éviter le râle pa",] },
  { id: 5, name: 'Dofus Ivoire ', infos: ["Regarder les effets passifs des influences sur ogrest (pour savoir comment le taper)",
  "Rochers tombent sur les glyphes (os)",
  "ogrest repousse les persos à son cac",
  "dernier et avant-dernier tour de la phase, retenir où tombent les pierres (placement début de chacun des persos) ",
  "Utiliser les marqueurs pour ça",
  "dommages sur les deux plus éloignés (en zone de koko de 2 pour les dommages, donc s'éloigner un peu pour les deux concernés)"] },
  { id: 6, name: 'Dofus Ocre', infos: ["pas finir son tour en ligne avec les rochers en fin de phase, explosent en ligne jusqu'à 8 po d'eux",
  "pas finir en diagonale directe avec les rochers en fin de phase",
  "tenter de commencer son tour aligné aux rochers, pour éviter de bloquer toute la map pour la fin de phase",
  "ogrest doit être proche des rochers (en mêlée) pour qu'il soit désinvu",
  "passif sur les persos qui 'stack' le soin pour le renvoyer en x10 en dommages en mêlée au début de son tour (ogrest et alliés touchés)"] },
  { id: 7, name: 'Artefacts', infos: ["La baguette rikiki permet d'invu 1 personne pendant un tour pour les attaques de lancement de rocher (2 tours de recharge)",
  "L'arc permet de repousser de 4 cases ogrest (utilisable en croix + 3 tours de recharges) + donne 4 po",
  "Le sid permet de tp ogrest",
  "Sceptre: -5po sur ogrest en actif (3 tours de recast)",
  "Marteau de moon s'enlève d'une phase à l'autre, débuff 100 résis ogrest en mêlée. Il revient chaque phase",
  "amulette ne fait pas disparaître les grosses larmes",] },
];