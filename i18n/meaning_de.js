/*
  Motivational-Numerology
  (c) 2024 Sally Faubion & Olivier Giulieri
  http://www.sallysnumbers.com
*/

const meaning = {
  master: "Meisternummer",
  destiny: {
    title: "Bestimmung",
    description:
      "Dies ist die einflussreichste Zahl in Bezug auf Ihre persönlichen Motivationen, das, was und wen Sie in Ihrer Umgebung mögen und die Karriere(n), die Sie am wahrscheinlichsten anstreben würden.",
    func: "Monat + Tag + Geburtsjahr",
    1: "Dies ist der Weg des Risikoträgers, des Unternehmers, des völlig unabhängigen Pioniers.",
    2: "Dies ist der Weg der Hausfrau, des Teamspielers, des Betreuers und des Sammlers.",
    3: "Dies ist der Weg des Abenteuerlustigen, Kreativen, des sprichwörtlichen „Peter Pan“ und/oder des disziplinierten wissenschaftlichen „Dapper Dan/Danielle“.",
    4: "Dies ist der Weg des fleißigen, engagierten, aufrichtigen Mitarbeiters/Unternehmers und des gutherzigen, loyalen Freundes.",
    5: "Dies ist der Weg des energiegeladenen Freiheitskämpfers, des Promoters und des stilvollen, sozial versierten Weltenbummlers.",
    6: "Dies ist der Weg des guten Bürgers, des geduldigen Lehrers, des Verfechters von Fairness und Gerechtigkeit und des kosmischen Elternteils für alle.",
    7: "Dies ist der Weg des Gelehrten, des Perfektionisten, des Genies und des Hüters von Geheimnissen.",
    8: "Dies ist der Weg der Matriarchin/des Patriarchen, des Richters, des Produzenten/Regisseurs, des Orchesters und des Klasseakteurs.",
    9: "Dies ist der Weg der aristokratischen und vornehmen „alten Seele“ und des universellen Humanitaristen.",
    11: "Dies ist der Weg des intuitiven Beraters/Beraters, des Friedensstifters und der erleuchteten öffentlichen Figur.",
    22: "Dies ist der Weg des erleuchteten, klugen, organisierten, entschlossenen und inspirierenden Visionärs.",
  },
  personality: {
    title: "Persönlichkeit",
    description:
      "Diese Zahl beschreibt das hinter den Kulissen oder private Sie.",
    func: "Tag der Geburt",
    1: "Sie sind dynamisch, willensstark und ein natürlicher Anführer, und Ihre zielstrebige Ausrichtung bereitet den Boden für Ihren Erfolg.",
    2: "Sie sind ein Friedensstifter, fürsorglich und freundlich, und ein unverzichtbarer Freund, Partner, Mitarbeiter oder Chef.",
    3: "Sie sind unglaublich kreativ, fantasievoll und unterhaltsam und ein herausragender Gastgeber oder eine herausragende Gastgeberin.",
    4: "Sie sind engagiert, detailorientiert und ein unermüdlicher Arbeiter, und Ihr Wort ist so gut wie Gold.",
    5: "Ihre intelligente, enthusiastische und liebenswürdige Natur inspiriert und motiviert alle, die Sie kennen.",
    6: "Sie sind verantwortungsbewusst, menschenorientiert und lieben Schönheit, Natur und das Zuhause.",
    7: "Sie sind analytisch, forschungsorientiert und Ihr Streben nach Wissen ist weitreichend und unstillbar.",
    8: "Sie sind ehrgeizig, organisiert, ein qualitätsbewusster Handelnder und geboren, um ein Anführer mit einem Faible für Protokoll und Gerechtigkeit zu sein.",
    9: "Sie sind vielseitig talentiert, kreativ und kompetent und Ihre wahre Natur kommt zum Ausdruck, wenn Sie anderen dienen.",
    10: "Sie sind unabhängig, rücksichtsvoll und verantwortungsbewusst mit einer durchsetzungsstarken Natur; und eine optimistische Einstellung, die in jeder Situation das Positive findet.",
    11: "Sie sind sensibel, intelligent, originell, inspirierend, ein guter Zuhörer und übernehmen natürlicherweise die Rolle der „großen Schultern“ für viele.",
    12: "Sie sind charmant, sympathisch und kreativ, und Ihre starke Entschlossenheit und Weitsicht helfen Ihnen, Ihre Ziele zu verwirklichen.",
    13: "Sie sind scharfsinnig, unabhängig, bodenständig und aufrichtig, und Ihre Hingabe, Zähigkeit und Ausdauer bei jedem Konzept, Umstand oder Vorhaben ist außergewöhnlich.",
    14: "Sie sind ein Energiebündel mit einem Stahltrap-Verstand, der ständig neue Ideen und kreative, praktische Konzepte und Lösungen hervorbringt.",
    15: "Ihr unabhängiger, kreativer, künstlerisch/wissenschaftlicher Geist verlangt danach, riesige Mengen an Themen zu erforschen und zu analysieren und Fairness und Gerechtigkeit zu verteidigen.",
    16: "Ihr einzigartig intellektueller, analytischer Geist benötigt Zeiten der Einsamkeit, um Ihren unersättlichen Wissensdurst zu stillen und über anerkannte Grenzen hinauszugehen.",
    17: "Sie sind intelligent, ehrgeizig, mutig, besitzen genug Energie und Vitalität, um ein Land zu führen, und Sie sind der Inbegriff einer Klasse für sich!",
    18: "Sie sind ein Multi-Talent von Weisheit, Stärke, Mut und weitreichendem Mitgefühl, der sein Bestes zeigt, wenn er denen hilft, die Hilfe brauchen.",
    19: "Ihre abenteuerlustige Natur lässt Sie nach Abwechslung und Veränderung verlangen, aber wenn Sie inspiriert sind, können Sie auch ein hartnäckiger, engagierter und ehrenhafter Mitarbeiter, Chef, Partner und Freund sein.",
    20: "Ihre warmherzige, hilfsbereite und umsichtige Natur wird in jeder Arbeitsumgebung geschätzt, und Sie werden während Ihres Lebens viele Freunde sammeln und behalten.",
    21: "Sie sind gutmütig, optimistisch, inspirierend und großzügig. Sie fühlen sich zu allem Schönen, Qualitativen und Unterhaltsamen hingezogen, und Ihre eigene Kreativität kann Sie ins Rampenlicht rücken.",
    22: "Sie zeigen außergewöhnliche Disziplin, Energie, Logik und Sensibilität, und Sie haben den Geist eines meisterhaften, erleuchteten und unternehmerischen Visionärs.",
    23: "Sie besitzen einen fürsorglichen, lebenslustigen, freiheitsliebenden Geist, und Ihr schneller Verstand, Ihre Originalität und Ihr Intellekt bringen ständig clevere und einzigartige Ideen und Pläne hervor.",
    24: "Sie sind charmant, gesellig, geistreich und eher ein Liebender als ein Kämpfer. Ihre gewissenhafte und großzügige Natur tendiert immer dazu, „eine Extra-Meile“ zu gehen, und Sie sind ein ehrenhafter Freund und Partner.",
    25: "Sie sind geistreich und weise und fragen sich über alles. Ihr Reservoir an angeborener Weisheit und Ihre hohe mitfühlende, großzügige Natur geben Ihnen ein Gefühl von Verantwortung für die Menschheit im Allgemeinen.",
    26: "Ihre Persönlichkeit ist die eines Fünf-Sterne-Generals – standhaft und befehlend, mit einer Vorliebe für Protokoll. Ihr „sechster Sinn“ ermöglicht es Ihnen, leicht zwischen richtig und falsch zu unterscheiden und anderen ein vorbildliches Beispiel zu geben.",
    27: "Wie Old King Cole sind Sie eine „alte Seele“, und Sie besitzen ein umfangreiches angeborenes Wissen und außergewöhnliche Wahrnehmungsfähigkeiten. Reisen und Veränderung sind für Ihr Wohlbefinden unerlässlich.",
    28: "Sie sind charmant, unabhängig, ein geborener Diplomat, und Ihre Charaktereigenschaften entsprechen denen eines Leistungsträgers und Anführers. Ihre hohen Ideale und Prinzipien ermöglichen es Ihnen, Ihre Ziele zu erreichen.",
    29: "Ihre sanfte, sensible Natur wird durch eine Kombination aus Energie und Ausstrahlung ergänzt, die Menschen wie ein Magnet zu Ihnen zieht. Sie besitzen einen „sechsten Sinn“, der es Ihnen ermöglicht, vielen zu helfen, die Ihre „großen Schultern“ suchen.",
    30: "Sie sind intelligent, kreativ, lebenslustig und mit einem großartigen Sinn für Humor gesegnet, und Sie sind außerordentlich talentiert, wenn Sie sich an jedem kreativen Bestreben beteiligen. Ihre sozial geschickte Natur ermöglicht es Ihnen, sich unter vielen auszuzeichnen.",
    31: "Sie sind kreativ, innovativ und besitzen eine große Menge an Wissen. Gewissenhaft, zuverlässig und pünktlich, sind Sie auch ein Gewohnheitstier und können ein hingebungsvoller Partner und Freund sein.",
  },
  attitude: {
    title: "Einstellung",
    description:
      "Diese Zahl ist in den ersten 30-35 Lebensjahren am stärksten und repräsentiert das Wie und Warum Ihrer Reaktionen auf Umstände in Ihrer Jugend.",
    func: "Monat + Tag der Geburt",
    1: "Sie werden mit einem starken Willen und einer unabhängigen Natur geboren. Sie ziehen es vor, Ihre eigenen Entscheidungen zu treffen, und sind stur, wenn Sie in eine andere Richtung gedrängt werden.",
    2: "Sie sind dazu geboren, ein süßes, sanftes, freundliches und fürsorgliches Kind und junger Erwachsener zu sein. Sie lieben es zu pflegen und gepflegt zu werden und sind einfühlsam und sensibel.",
    3: "Sie werden etwas schüchtern geboren, aber sobald Sie sprechen lernen, können Sie zu einem natürlichen Unterhalter, abenteuerlustig und fesselnd werden.",
    4: "Sie werden mit einem sensiblen, sturen Temperament geboren, können aber sehr süß und pflichtbewusst sein, wenn Sie Lob und Ermutigung erhalten.",
    5: "Sie werden mit überschäumender Energie geboren! Sie benötigen ständige geistige und körperliche Stimulation, und Ihr Temperament flackert auf, wenn Sie ungeduldig sind.",
    6: "Sie werden dazu geboren, verantwortungsbewusst, gewissenhaft, rücksichtsvoll und freundlich zu sein, besonders gegenüber Ihren Eltern, Geschwistern, Freunden und allem, was zur Natur gehört.",
    7: "Sie werden mit einem brillanten Verstand geboren, der alleinige Zeit benötigt, um Ihrem Streben nach Wissen und vielfältigen Interessen und Intrigen nachzugehen.",
    8: "Sie werden dazu geboren, in allem, was Sie tun, vorbildlich zu sein, was aus Ihrem Bedürfnis resultiert, Kontrolle zu haben. Sie sind der „Einser-Schüler“, wenn Sie ermutigt werden.",
    9: "Sie werden mit einer erwachseneren Sensibilität geboren, die bereits in sehr jungen Jahren spürbar ist. Lob und Ermutigung von denen, die Ihnen am nächsten stehen, beflügeln Ihre Leistungen.",
    11: "Sie werden super sensibel geboren; hochintuitiv, hochmütig und ein Musikliebhaber; süß, sanft und geistig, wenn Sie inspiriert sind, sind Sie ein Star-Material.",
    22: "Sie werden mit einem sturen Wesenszug, aber mit Ermutigung können Sie sehr zielstrebig, unternehmungslustig, inspiriert und erfinderisch sein.",
  },
  character: {
    title: "Charakter",
    description:
      "Diese Zahl repräsentiert hauptsächlich Ihre öffentlichen und sozialen Qualitäten, aber Sie würden auch in Ihren persönlichen Beziehungen weitgehend dasselbe zeigen.",
    func: "Buchstaben im Namen",
    1: "Mit einem originellen und innovativen Verstand und einer unerschütterlichen Ausrichtung auf Ihre Ziele qualifizieren Sie sich als Führer.",
    2: "Da Sie von Natur aus diplomatisch, gutmütig und ein Friedensstifter sind, ist Ihre öffentliche Persönlichkeit wie die eines Botschafters für das Volk.",
    3: "Ihre optimistischen, begeisterten und kreativen Fähigkeiten geben Ihnen die Fähigkeit, andere in jeder von Ihnen gewählten Berufsrichtung zu engagieren, zu inspirierenund zu unterhalten.",
    4: "Ihre gewissenhafte, organisierte, systematische und zuverlässige öffentliche Persönlichkeit macht Sie zu einer begehrten Arbeitsbiene oder zum Vorstandsvorsitzenden.",
    5: "Ihre charmante, wortgewandte, flexible und stilsichere Natur macht Sie zu einem Trendsetter, der viele Menschen engagieren und inspirieren kann, wenn Sie sich auf eine Mission konzentrieren.",
    6: "Als geborener Humanitarist mit einem Fokus auf Hilfe und Fürsorge für alles, was auf der Erde existiert - Menschen, Tiere und die wunderschöne Erde selbst - sind Sie ein herausragender Leiter von Ausschüssen oder Anliegen.",
    7: "Als philosophisch avantgardistischer, wissbegieriger Genius suchen Sie nicht das Rampenlicht, sind aber hervorragende Lehrer, Professoren und Fachexperten.",
    8: "Ihre bestimmende, vorbildliche Lehrerpersönlichkeit, Richter/Jury, Produzent/Regisseur, verfügt über einen sechsten Sinn, der es Ihnen ermöglicht, in allem leicht zwischen richtig und falsch zu unterscheiden.",
    9: "Als geborener Weiser, aristokratisch, sozial angenehmer Humanitarist ziehen Sie die Gemeinschaft an, die am meisten von Ihrer „selbstlosen Diener“-Mission profitieren kann.",
    11: "Als einfühlsamer, erleuchteter und verständnisvoller Berater oder Gemeinschaftsleiter gehören Sie ins Rampenlicht; die 11 ist mit Ruhm und Erleuchtung verbunden.",
    22: "Als hochmütiger Erbauer von Reichen und spirituell orientiertem Organisator sind Sie am besten geeignet, öffentliche Anliegen und Unternehmen zu unterstützen, die Ihren engagierten, unkomplizierten Stil schätzen.",
  },
  soul: {
    title: "Seelenverlangen",
    description: "Dieser Einfluss zeigt Ihre intuitive, seelenvolle Seite.",
    func: "Vokale im Namen",
    1: "Das Seelenverlangen ist es, innovativ, kreativ zu sein und die Massen in eine höhere Ebene des Bewusstseins und Verständnisses zu führen, die Mitgefühl für alle erzeugt.",
    2: "Das Seelenverlangen ist es, Frieden, Harmonie und Feingefühl zu bewirken, um in denen, die Sie kennen und trösten, größere Pflege- und Liebesqualitäten zu erzeugen.",
    3: "Das Seelenverlangen ist es, Freude, Enthusiasmus, Leidenschaft zu bringen und die Vorstellungskraft anderer mit Kreativität und herzerwärmenden Konzepten und Interessen zu erwecken.",
    4: "Das Seelenverlangen ist es, Ehrlichkeit, Verlässlichkeit, Praktikabilität und Entschlossenheit zu vermitteln, um anderen und sich selbst inspirierende und erleuchtende Ergebnisse zu ermöglichen.",
    5: "Das Seelenverlangen ist es, Ihre überbordende Energie, Ihren weitsichtigen Geist und Ihre fortschrittlichen mentalen Eigenschaften zu nutzen, um hochrangige Beiträge für die Menschheit hervorzubringen.",
    6: "Das Seelenverlangen ist es, verantwortungsbewusst, gewissenhaft, fürsorglich und freundlich zu sein und zu lehren, zu beraten und zu trösten, um diese Eigenschaften selbst zu bewahren.",
    7: "Das Seelenverlangen ist es, Ihre analytische, forschungsorientierte und hinterfragende Natur zu nutzen, um etwas Bedeutungsvolles zu entdecken oder aufzudecken, das vielen, nicht nur wenigen, helfen wird.",
    8: "Das Seelenverlangen ist es, Qualität, Beständigkeit und Inspiration in andere zu bringen und Ihre natürliche Finesse und Qualität in allem zu berühren.",
    9: "Das Seelenverlangen ist es, Ihre aristokratischen, sanften und menschlichen Eigenschaften konsequent einzusetzen, um die Bühne für andere zu bereiten, die sie nachahmen sollen.",
    11: "Das Seelenverlangen ist es, Frieden, Harmonie, Schönheit und Ehrenhaftigkeit als Beispiele Ihrer höchsten spirituellen Qualitäten zu bringen, die alle schätzen und hoffentlich nachahmen.",
    22: "Das Seelenverlangen ist das eines „Master Builders“, dessen seelenvolles Verlangen darin besteht, der Menschheit und der Erde mit Hochgeistigkeit und Humanitarismus zu dienen.",
  },
  agenda: {
    title: "Verborgenes Ziel",
    description:
      "Diese Schwingung bietet Ihre angeborenen (verborgenen) Wünsche.",
    func: "Konsonanten im Namen",
    1: "Dieses Ziel weckt ein angeborenes Verlangen, unabhängig zu sein, zu führen, innovativ zu sein und originelle und einzigartige Konzepte und Dinge zu schaffen.",
    2: "Dieses Ziel bringt das angeborene Verlangen hervor, das Leben in Frieden und Harmonie zu leben und eine nicht-aggressive, kooperative und liebenswürdige Natur für alle zu bewirken.",
    3: "Dieses Ziel inspiriert ein angeborenes Verlangen, kreativer, unterhaltsamer zu sein und die Welt zu bereisen, um vielen Menschen mit Ihrer aufbauenden Persönlichkeit größeres Vergnügen und Freude zu bringen.",
    4: "Dieses Ziel beinhaltet Logik, Organisation und Ausdauer, um die angeborenen Bedürfnisse, Wünsche und Seelenruhe, die Sie hegen und festhalten, zu manifestieren.",
    5: "Dieses Ziel inspiriertein angeborenes Verlangen nach Reisen, Vielseitigkeit und nach neuen Wegen und Mitteln für Fortschritt und positive Veränderungen für viele.",
    6: "Dieses Ziel umfasst das angeborene Verlangen, Wahrheit, Gerechtigkeit und Ordnung in der Welt zu fördern und zu lehren, wie man Verantwortung für alles Schöne in der Natur übernimmt.",
    7: "Dieses Ziel weckt ein angeborenes Verlangen nach Erforschung, Entdeckung und nach Wissen, das von allen genutzt werden kann, um eine bessere Welt zu schaffen.",
    8: "Dieses Ziel inspiriert ein angeborenes Verlangen nach hohen Standards und nach der Schaffung von Ordnung und Prinzipien in der Welt.",
    9: "Dieses Ziel beinhaltet ein angeborenes Verlangen nach humanitären Bemühungen, damit Ihre Werte und Ziele von den meisten Menschen erreicht und geschätzt werden.",
    11: "Dieses Ziel weckt ein angeborenes Verlangen nach Verständnis, nach Frieden, Harmonie und nach der Verbesserung der spirituellen Werte und Zustände der Menschen.",
    22: "Dieses Ziel inspiriert ein angeborenes Verlangen, Großes zu erreichen, und den Menschen mit praktischen Lösungen und Methoden zu dienen, die von Dauer und nachhaltig sind.",
  },
  purpose: {
    title: "Göttlicher Zweck",
    description:
      "Dies ist deine Abschiedsvorstellung der Schwingungszahl. Es ist das, was dein Seelisches Selbst sich für deine späteren Lebensjahre ausgesucht hat.",
    func: "Bestimmung + Charakter",
    1: "Dein göttlicher Zweck besteht darin, ein Erbe von etwas zu hinterlassen, das du pioniert hast - ein Konzept, ein Produkt, eine Stiftung.",
    2: "Dein göttlicher Zweck besteht darin, Frieden, Trost und Harmonie für deine Mitmenschen zu bringen.",
    3: "Dein göttlicher Zweck besteht darin, deine kreativen und einfallsreichen Talente zu nutzen, um ein Produkt, eine Idee, ein Buch, einen Film oder eine andere Form künstlerischen Ausdrucks zu erschaffen.",
    4: "Dein göttlicher Zweck besteht darin, eine stabile Grundlage zu schaffen, die den Menschen hilft und einen humanitären Fokus hat.",
    5: "Dein göttlicher Zweck besteht darin, progressive Veränderungen zu bewirken, die das Leben für zukünftige Generationen verbessern.",
    6: "Dein göttlicher Zweck besteht darin, zu lehren, anzustoßen und humanitäre Anliegen zu unterstützen, sich um Zuhause und Familie zu kümmern und soziale Verantwortung zu übernehmen.",
    7: "Dein göttlicher Zweck besteht darin, das umfangreiche Wissen, das du in einer Wissenschaft, einer Kunst, einer Philosophie oder einer Religion erworben hast, durch ein kreatives Unterfangen weiterzugeben.",
    8: "Dein göttlicher Zweck besteht darin, als Führungskraft oder Exekutive zu leiten, zu lenken, zu initiieren und anzustoßen sowie den weniger Glücklichen durch Philanthropie zu helfen.",
    9: "Dein göttlicher Zweck besteht darin, ein universeller Humanist zu sein - ein guter Elternteil, ein guter Partner und ein guter Bürger; ein Philanthrop, ein Geistlicher, ein Politiker - der für das Wohl der Menschheit arbeitet.",
    11: "Dein göttlicher Zweck besteht darin, Menschen auf spiritueller, psychologischer und geistiger Ebene zu helfen. Andere mit Weisheitsworten zu erheben; zuzuhören, zu beraten und anderen zu helfen, auf ihrer Lebensreise voranzukommen.",
    22: "Dein göttlicher Zweck besteht darin, zu organisieren und aufzubauen; ein Geschäft zu führen, das anderen Arbeit bietet und den Menschen durch Dienstleistungen für die Gemeinschaft und vielleicht auch weltweit hilft.",
  },
};
