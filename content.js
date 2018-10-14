walk(document.body);
function walk(node) {

    var child, next;
    switch (node.nodeType) {
        case 1: 
        case 9:
        case 11:
            child = node.firstChild;
            while (child) {
                next = child.nextSibling;
                walk(child);
                child = next;
            }
            break;
        case 3:
            handleText(node);
            break;
    }
}


function handleText(textNode) {

    var dict = {"Abject": "of the most contemptible kind", "Aberration": "a state or condition markedly different from the norm", "Abjure": "formally reject or disavow a formerly held belief", "Abnegation": "the denial and rejection of a doctrine or belief", "Abrogate": "revoke formally", "Abscond": "run away, often taking something or somebody along", "Abstruse": "difficult to penetrate", "Accede": "yield to another's wish or opinion", "Accost": "approach and speak to someone aggressively or insistently", "Accretion": "an increase by natural growth or addition", "Acumen": "shrewdness shown by keen insight", "Adamant": "impervious to pleas, persuasion, requests, reason", "Admonish": "scold or reprimand; take to task", "Adumbrate": "describe roughly or give the main points or summary of", "Adverse": "in an opposing direction", "Advocate": "a person who pleads for a person, cause, or idea", "Affluent": "having an abundant supply of money or possessions of value", "Aggrandize": "embellish; increase the scope, power, or importance of", "Alacrity": "liveliness and eagerness", "Alias": "a name that has been assumed temporarily", "Ambivalent": "uncertain or unable to decide about what course to follow", "Amenable": "disposed or willing to comply", "Amorphous": "having no definite form or distinct shape", "Anachronistic": "chronologically misplaced", "Anathema": "a formal ecclesiastical curse accompanied by excommunication", "Annex": "attach to", "Antediluvian": "of or relating to the period before the biblical flood", "Antiseptic": "thoroughly clean and free of disease-causing organisms", "Apathetic": "showing little or no emotion or animation", "Antithesis": "exact opposite", "Apocryphal": "being of questionable authenticity", "Approbation": "official acceptance or agreement", "Arbitrary": "based on or subject to individual discretion or preference", "Arboreal": "of or relating to or formed by trees", "Arcane": "requiring secret or mysterious knowledge", "Archetypal": "of an original type after which other things are patterned", "Arrogate": "seize and take control without authority", "Ascetic": "someone who practices self denial as a spiritual discipline", "Aspersion": "a disparaging remark", "Assiduous": "marked by care and persistent effort", "Atrophy": "a decrease in size of an organ caused by disease or disuse", "Bane": "something causing misery or death", "Bashful": "self-consciously timid", "Beguile": "influence by slyness", "Bereft": "sorrowful through loss or deprivation", "Blandishment": "flattery intended to persuade", "Bilk": "cheat somebody out of what is due, especially money", "Bombastic": "ostentatiously lofty in style", "Cajole": "influence or urge by gentle urging, caressing, or flattering", "Callous": "emotionally hardened", "Calumny": "a false accusation of an offense", "Camaraderie": "the quality of affording easy familiarity and sociability", "Candor": "the quality of being honest and straightforward", "Capitulate": "surrender under agreed conditions", "Carouse": "engage in boisterous, drunken merrymaking", "Carp": "any of various freshwater fish of the family Cyprinidae", "Caucus": "meet to select a candidate or promote a policy", "Cavort": "play boisterously", "Circumlocution": "an indirect way of expressing something", "Circumscribe": "draw a geometric figure around another figure", "Circumvent": "surround so as to force to give up", "Clamor": "utter or proclaim insistently and noisily", "Cleave": "separate or cut with a tool, such as a sharp instrument", "Cobbler": "a person who makes or repairs shoes", "Cogent": "powerfully persuasive", "Cognizant": "having or showing knowledge or understanding or realization", "Commensurate": "corresponding in size or degree or extent", "Complement": "something added to embellish or make perfect", "Compunction": "a feeling of deep regret, usually for some misdeed", "Concomitant": "following or accompanying as a consequence", "Conduit": "a passage through which water or electric wires can pass", "Conflagration": "a very intense and uncontrolled fire", "Congruity": "the quality of agreeing; being suitable and appropriate", "Connive": "form intrigues (for) in an underhand manner", "Consign": "give over to another for care or safekeeping", "Constituent": "one of the individual parts making up a composite entity", "Construe": "make sense of; assign a meaning to", "Contusion": "an injury in which the skin is not broken", "Contrite": "feeling or expressing pain or sorrow for sins or offenses", "Contentious": "showing an inclination to disagree", "Contravene": "go against, as of rules and laws", "Convivial": "occupied with or fond of the pleasures of good company", "Corpulence": "the property of excessive fatness", "Covet": "wish, long, or crave for", "Cupidity": "extreme greed for material wealth", "Dearth": "an insufficient quantity or number", "Debacle": "a sudden and complete disaster", "Debauch": "a wild gathering involving excessive drinking", "Debunk": "expose while ridiculing", "Defunct": "no longer in force or use; inactive", "Demagogue": "a leader who seeks support by appealing to popular passions", "Denigrate": "charge falsely or with malicious intent", "Derivative": "a compound obtained from another compound", "Despot": "a cruel and oppressive dictator", "Diaphanous": "so thin as to transmit light", "Didactic": "instructive, especially excessively", "Dirge": "a song or hymn of mourning as a memorial to a dead person", "Disaffected": "discontented as toward authority", "Discomfit": "cause to lose one's composure", "Disparate": "fundamentally different or distinct in quality or kind", "Dispel": "to cause to separate and go in different directions", "Disrepute": "the state of being held in low esteem", "Divisive": "dissenting with the majority opinion", "Dogmatic": "pertaining to a code of beliefs accepted as authoritative", "Dour": "showing a brooding ill humor", "Duplicity": "the act of deceiving or acting in bad faith", "Duress": "compulsory force or threat", "Eclectic": "selecting what seems best of various styles or ideas", "Edict": "a formal or authoritative proclamation", "Ebullient": "joyously unrestrained", "Egregious": "conspicuously and outrageously bad or reprehensible", "Elegy": "a mournful poem; a lament for the dead", "Elicit": "call forth, as an emotion, feeling, or response", "Embezzlement": "the fraudulent appropriation of funds or property", "Emend": "make corrections to", "Emollient": "a substance with a soothing effect when applied to the skin", "Empirical": "derived from experiment and observation rather than theory", "Emulate": "strive to equal or match, especially by imitating", "Enervate": "weaken mentally or morally", "Enfranchise": "grant freedom to, as from slavery or servitude", "Engender": "call forth", "Ephemeral": "anything short-lived, as an insect that lives only for a day", "Epistolary": "written in the form of letters or correspondence", "Equanimity": "steadiness of mind under stress", "Equivocal": "open to two or more interpretations", "Espouse": "choose and follow a theory, idea, policy, etc.", "Evanescent": "tending to vanish like vapor", "Evince": "give expression to", "Exacerbate": "make worse", "Exhort": "spur on or encourage especially by cheers and shouts", "Execrable": "unequivocally detestable", "Exigent": "demanding immediate attention", "Expedient": "appropriate to a purpose", "Expiate": "make amends for", "Expunge": "remove by erasing or crossing out or as if by drawing a line", "Extraneous": "not belonging to that in which it is contained", "Extol": "praise, glorify, or honor", "Extant": "still in existence; not extinct or destroyed or lost", "Expurgate": "edit by omitting or modifying parts considered indelicate", "Fallacious": "containing or based on incorrect reasoning", "Fatuous": "devoid of intelligence", "Fetter": "a shackle for the ankles or feet", "Flagrant": "conspicuously and outrageously bad or reprehensible", "Foil": "hinder or prevent, as an effort, plan, or desire", "Forbearance": "good-natured tolerance of delay or incompetence", "Fortuitous": "occurring by happy chance", "Fractious": "easily irritated or annoyed", "Garrulous": "full of trivial conversation", "Gourmand": "a person who is devoted to eating and drinking to excess", "Grandiloquent": "lofty in style", "Gratuitous": "unnecessary and unwarranted", "Hapless": "unfortunate and deserving pity", "Hegemony": "the dominance or leadership of one social group over others", "Heterogenous": "consisting of elements that are not of the same kind", "Iconoclast": "someone who attacks cherished ideas or institutions", "Idiosyncratic": "peculiar to the individual", "Impecunious": "not having enough money to pay for necessities", "Impetuous": "characterized by undue haste and lack of thought", "Impinge": "infringe upon", "Impute": "attribute or credit to", "Inane": "devoid of intelligence", "Inchoate": "only partly in existence; imperfectly formed", "Incontrovertible": "impossible to deny or disprove", "Incumbent": "necessary as a duty or responsibility; morally binding", "Inexorable": "not to be placated or appeased or moved by entreaty", "Inimical": "not friendly", "Injunction": "a judicial remedy to prohibit a party from doing something", "Inoculate": "inject or treat with the germ of a disease to render immune", "Insidious": "working or spreading in a hidden and usually injurious way", "Instigate": "provoke or stir up", "Insurgent": "in opposition to a civil authority or government", "Interlocutor": "a person who takes part in a conversation", "Intimation": "a slight suggestion or vague understanding", "Inure": "cause to accept or become hardened to", "Invective": "abusive language used to express blame or censure", "Intransigent": "impervious to pleas, persuasion, requests, or reason", "Inveterate": "habitual", "Irreverence": "a mental attitude showing lack of due respect", "Knell": "the sound of a bell rung slowly to announce a death", "Laconic": "brief and to the point", "Largesse": "liberality in bestowing gifts", "Legerdemain": "an illusory feat", "Libertarian": "an advocate of freedom of thought and speech", "Licentious": "lacking moral discipline", "Linchpin": "a central cohesive source of support and stability", "Litigant": "a party to a lawsuit", "Maelstrom": "a powerful circular current of water", "Maudlin": "effusively or insincerely emotional", "Maverick": "someone who exhibits independence in thought and action", "Mawkish": "effusively or insincerely emotional", "Maxim": "a saying that is widely accepted on its own merits", "Mendacious": "given to lying", "Modicum": "a small or moderate or token amount", "Morass": "a soft wet area of low-lying land that sinks underfoot", "Mores": "the conventions embodying the fundamental values of a group", "Munificent": "very generous", "Multifarious": "having many aspects", "Nadir": "the lowest point of anything", "Negligent": "characterized by undue lack of attention or concern", "Neophyte": "any new participant in some activity", "Noisome": "offensively malodorous", "Noxious": "injurious to physical or mental health", "Obdurate": "stubbornly persistent in wrongdoing", "Obfuscate": "make obscure or unclear", "Obstreperous": "noisily and stubbornly defiant", "Officious": "intrusive in a meddling or offensive manner", "Onerous": "not easily borne; wearing", "Ostensible": "appearing as such but not necessarily so", "Ostracism": "the act of excluding someone from society by general consent", "Palliate": "lessen or to try to lessen the seriousness or extent of", "Panacea": "hypothetical remedy for all ills or diseases", "Paradigm": "a standard or typical example", "Pariah": "a person who is rejected from society or home", "Partisan": "a fervent and even militant proponent of something", "Paucity": "an insufficient quantity or number", "Pejorative": "expressing disapproval", "Pellucid": "transparently clear; easily understandable", "Penchant": "a strong liking", "Penurious": "excessively unwilling to spend", "Pert": "characterized by a lightly saucy or impudent quality", "Pernicious": "exceedingly harmful", "Pertinacious": "stubbornly unyielding", "Phlegmatic": "showing little emotion", "Philanthropic": "of or relating to charitable giving", "Pithy": "concise and full of meaning", "Platitude": "a trite or obvious remark", "Plaudit": "enthusiastic approval", "Plenitude": "a full supply", "Plethora": "extreme excess", "Portent": "a sign of something about to happen", "Potentate": "a ruler who is unconstrained by law", "Preclude": "make impossible, especially beforehand", "Predilection": "a predisposition in favor of something", "Preponderance": "exceeding in heaviness; having greater weight", "Presage": "a foreboding about what is about to happen", "Probity": "complete and confirmed integrity", "Proclivity": "a natural inclination", "Profligate": "unrestrained by convention or morality", "Promulgate": "state or announce", "Proscribe": "command against", "Protean": "taking on different forms", "Prurient": "characterized by lust", "Puerile": "displaying or suggesting a lack of maturity", "Pugnacious": "ready and able to resort to force or violence", "Pulchritude": "physical beauty, especially of a woman", "Punctilious": "marked by precise accordance with details", "Quaint": "attractively old-fashioned", "Quixotic": "not sensible about practical matters", "Quandary": "state of uncertainty in a choice between unfavorable options", "Recalcitrant": "stubbornly resistant to authority or control", "Redoubtable": "inspiring fear", "Relegate": "assign to a lower position", "Remiss": "failing in what duty requires", "Reprieve": "postpone the punishment of a convicted criminal", "Reprobate": "a person without moral scruples", "Rescind": "cancel officially", "Requisition": "an authoritative request or demand", "Rife": "excessively abundant", "Sanctimonious": "excessively or hypocritically pious", "Sanguine": "confidently optimistic and cheerful", "Scurrilous": "expressing offensive reproach", "Semaphore": "an apparatus for visual signaling", "Serendipity": "good luck in making unexpected and fortunate discoveries", "Sobriety": "the state of being sober and not intoxicated by alcohol", "Solicitous": "full of anxiety and concern", "Solipsism": "the philosophical theory that the self is all that exists", "Spurious": "plausible but false", "Staid": "characterized by dignity and propriety", "Stolid": "having or revealing little emotion or sensibility", "Subjugate": "make subservient; force to submit or subdue", "Surfeit": "indulge (one's appetite) to satiety", "Surreptitious": "marked by quiet and caution and secrecy", "Swarthy": "naturally having skin of a dark color", "Tangential": "of superficial relevance if any", "Tome": "a large and scholarly book", "Toady": "a person who tries to please someone to gain an advantage", "Torpid": "in a condition of biological rest or suspended animation", "Travesty": "a composition that imitates or misrepresents a style", "Trenchant": "having keenness and forcefulness and penetration in thought", "Trite": "repeated too often; overfamiliar through overuse", "Truculent": "defiantly aggressive", "Turpitude": "a corrupt or depraved or degenerate act or practice", "Ubiquitous": "being present everywhere at once", "Umbrage": "a feeling of anger caused by being offended", "Upbraid": "express criticism towards", "Utilitarian": "having a useful function", "Veracity": "unwillingness to tell lies", "Vestige": "an indication that something has been present", "Vicissitude": "a variation in circumstances or fortune", "Vilify": "spread negative information about", "Virtuoso": "someone who is dazzlingly skilled in any field", "Vitriolic": "harsh, bitter, or malicious in tone", "Vituperate": "spread negative information about", "Vociferous": "conspicuously and offensively loud", "Wanton": "a lewd or lascivious person", "Winsome": "charming in a childlike or naive way", "Yoke": "join with stable gear, as two draft animals", "Zephyr": "a slight wind", "Wily": "marked by skill in deception", "Tirade": "a speech of violent denunciation"};
    var v = textNode.nodeValue;

    for(var key in dict)
    {
        var replace = key;
        var re = new RegExp(replace,"g");
        v = v.replace(re, dict[key]);

        replace = key.toLowerCase();
        re = new RegExp(replace,"g");
        var replaceDef = replace +" ("+dict[key]+")";
        v = v.replace(re,replaceDef);
        //el.setColor("green");
    }
    textNode.nodeValue = v;
}
