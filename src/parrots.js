import arakanga from "./images/ara-arakanga.jpg";
import ararauna from "./images/ara-ararauna.jpg";
import oratrix from "./images/amazoňan-oratrix.jpg";
import autumnalis from "./images/amazoňan-autumnalis.jpg";
import lilacina from "./images/amazoňan lilacina.jpg";
import modročelý from "./images/amazoňan-modročelý.jpg";
import zelenolíci from "./images/amazoňan-zelenolíci.jpg";
import vejárový from "./images/amazoňan-vejárový.jpg";
import veľký from "./images/alexander-veľký.jpg";
import veľkýŽltý from "./images/mutations/alexander-veľký-žltý.jpg";
import veľkýModrý from "./images/mutations/alexander-veľký-modrý.jpeg";
import malý from "./images/alexander-malý.jpeg";
import malýBiely from "./images/mutations/alexander-malý-biely.jpeg";
import malýŽltý from "./images/mutations/alexander-malý-žltý.jpg";
import malýVioleta from "./images/mutations/alexander-malý-violeta.jpeg";
import malýModrý from "./images/mutations/alexander-malý-modrý.jpeg";
import malýŠedý from "./images/mutations/alexander-malý-šedý.jpg";
import čínsky from "./images/alexander-čínsky.jpg";
import šedý from "./images/alexander-šedý.jpg";
import ružový from "./images/kakadu-ružový.jpg";
import ružovýLutino from "./images//mutations/kakadu-ružový-lutino.jpeg";
import inka from "./images/kakadu-inka.jpg";
import žako from "./images/papagáj-žako.jpeg";
import roratus from "./images/eclectus-roratus.jpg";

const parrots = [
    {
        kind: "ara",
        name: "Ara arakanga",
        image: arakanga,
        description:
            "Ara arakanga alebo ara kanga je pestrofarebne sfarbený vták, patriaci do rodu Ara a k skupine papagájov Ara, ktoré majú svoj pôvod v tropickej oblasti od východného cípu Mexika cez Strednú Ameriku a od severu Južnej Ameriky po Brazíliu",
    },
    {
        kind: "ara",
        name: "Ara ararauna",
        image: ararauna,
        description:
            "Ara ararauna je druh papagája z rodu Ara. Žije v severnej časti Južnej Ameriky. V Trinidade patrí medzi ohrozené druhy.",
    },
    {
        kind: "amazoňan",
        name: "amazoňan oratrix",
        image: oratrix,
        description:
            "Amazoňan oratrix, známy aj ako papagáj žltohlavý alebo dvojitý amazoňan žltohlavý, je ohrozený amazonský papagáj z Mexika a severnej časti Strednej Ameriky.",
    },
    {
        kind: "amazoňan",
        name: "amazoňan autumnalis",
        image: autumnalis,
        description:
            "Amazoňan autumnalis je druh papagája amazonského, ktorý pochádza z tropických oblastí Ameriky od východného Mexika na juh po Ekvádor, kde sa vyskytuje vo vlhkých vždyzelených až poloopadavých lesoch do výšky 1 100 m.",
    },
    {
        kind: "amazoňan",
        name: "amazoňan lilacina",
        image: lilacina,
        description:
            "Amazoňan lilacina alebo ekvádorská amazonka červenolíca je amazonský papagáj pochádzajúci z Ekvádoru v Južnej Amerike.",
    },
    {
        kind: "amazoňan",
        name: "amazoňan modročelý",
        image: modročelý,
        description:
            "Amazoňan modročelý je známy juhoamerický papagáj. Obýva lesy, savany a palmové háje východnej a severnej Bolívie, východnej Brazílie, Paraguaja a severnej Argentíny.",
    },
    {
        kind: "amazoňan",
        name: "amazoňan zelenolíci",
        image: zelenolíci,
        description:
            "Amazoňan zelenlíci, známy aj ako amazoňan červenokrký, amazoňan zelený alebo mexický papagáj červenohlavý, je ohrozený papagáj amazoňan pochádzajúci zo severovýchodného Mexika a pravdepodobne z južného Texasu v Spojených štátoch.",
    },
    {
        kind: "amazoňan",
        name: "amazoňan vejárový",
        image: vejárový,
        description:
            "V prírode ho môžeme nájsť pozdĺž toku rieky Amazonky a na juhu štátu Venezuela. Jeho ostatné poddruhy nájdeme predovšetkým v Brazílii. Ako väčšina amazoňan obýva aj on tropické pralesy, kde sa drží veľká vlhkosť, k tomu by sme tiež pri chove mali prihliadať.",
    },
    {
        kind: "alexander",
        name: "alexander veľký nepálsky",
        image: veľký,
        description:
            "Je to najväčší z alexandrov a zároveň jeden z najčastejšie chovaných papagájov tohto rodu. Vo voľnej prírode sa vyskytuje od Cejlónu cez Indiu a Nepál až po východný Afganistan a západný Pakistan.",
        mutations: [
            { image: veľkýŽltý, name: "žltý" },
            { image: veľkýModrý, name: "modrý" },
        ],
    },
    {
        kind: "alexander",
        name: "alexander malý",
        image: malý,
        description:
            "Alexander malý, je pestrý vták z čeľade psicovité. Hniezdi v savanách Afriky a južnej Ázie. Vyskytuje sa aj v Indii, na Srí Lanke a bol introdukovaný na Maurícius, Blízky východ, do Singapuru, Japonska, na Seychely, do Spojených štátov a na Nový Zéland [3] Jeho prirodzeným biotopom sú listnaté oblasti a kultivovaná krajina.",
        mutations: [
            { image: malýBiely, name: "biely" },
            { image: malýŽltý, name: "žltý" },
            { image: malýVioleta, name: "violeta" },
            { image: malýModrý, name: "modrý" },
            { image: malýŠedý, name: "šedý" },
        ],
    },
    {
        kind: "alexander",
        name: "alexander čínsky",
        image: čínsky,
        description:
            "V prírode je alexander čínsky rozšírený v oblastiach, ktoré sú ornitológmi málo navštevované, preto máme o ich zvykoch nedostatok informácií. Ide o horský druh, ktorý žije až 3 300 m vysoko. Zdržuje sa v ihličnatých, dubových a borovicových lesoch. V niektorých oblastiach bol spozorovaný až vo výške 4 000 m.",
    },
    {
        kind: "alexander",
        name: "alexander šedý",
        image: šedý,
        description:
            "Stredne veľký druh alexandra, ktorý sa od väčšiny ostatných zástupcov tohto rodu papagájov líši tým, že nie je prevažne zelený. Žije v horských oblastiach v nadmorskej výške od 450 do 1 000 m n. m. vo vlhkých lesoch.",
    },
    {
        kind: "kakadu",
        name: "kakadu ružový",
        image: ružový,
        description:
            "Kakadu ružový patrí medzi najrozšírenejšie austrálske papagáje. Kakadu ružový vo veľkých, až niekoľkotisícových kŕdľoch migruje po savanových lesoch, poliach a otvorenej krajine celom vnútrozemí štátov austrálskeho kontinentu až do nadmorských výšok 1 250 m.",
        mutations: [{ image: ružovýLutino, name: "lutino" }],
    },
    {
        kind: "kakadu",
        name: "kakadu inka",
        image: inka,
        description:
            "Patrí medzi stredne veľké druhy kakaduov. Zvrchu je čisto biely, ale spodná strana tela a tváre je svetloružová, s červeným a žltým sfarbením na chvoste. Obýva suché a polosuché biotopy vo vnútrozemí austrálskeho kontinentu.",
    },
    {
        kind: "ostatné",
        name: "papagáj žako",
        image: žako,
        description:
            "Papagáj žako je stredne veľký africký papagáj, ktorý pochádza z dažďových pralesov Východnej a Strednej Afriky. Tento papagáj patrí k najinteligentnejším vtákom sveta. Jeho hlavnou potravou sú orechy, ovocie a rastlinná potrava pochádzajúca z listnatých stromov.",
    },
    {
        kind: "ostatné",
        name: "eclectus roratus",
        image: roratus,
        description:
            "Eclectus roratus je druh papagája, ktorého areál sa rozprestiera od Sumby cez Novú Guineu a polostrov Yorkist až po Šalamúnove ostrovy. Je to jediný žijúci druh rodu Eclectus",
    },
];

export const kinds = [
    ...new Set(parrots.map((parrot) => parrot.kind)),
];

export default parrots;
