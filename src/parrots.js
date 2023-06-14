import arakanga from "./images/ara-arakanga.jpg";
import ararauna from "./images/ara-ararauna.jpg";
import oratrix from "./images/amazoňan-oratrix.jpg";
import autumnalis from "./images/amazoňan-autumnalis.jpg";
import lilacina from "./images/amazoňan lilacina.jpg";
import modročelý from "./images/amazoňan-modročelý.jpg";
import zelenolíci from "./images/amazoňan-zelenolíci.jpg";
import vejárový from "./images/amazoňan-vejárový.jpg";
import žako from "./images/papagáj-žako.jpeg";
import roratus from "./images/eclectus-roratus.jpg";
import veľký from "./images/alexander-veľký.jpg";
import veľkýŽltý from "./images/mutations/alexander-veľký-žltý.jpg";
import veľkýModrý from "./images/mutations/alexander-veľký-modrý.jpeg";
import malý from "./images/alexander-malý.jpeg";
import malýBiely from "./images/mutations/alexander-malý-biely.jpeg";
import malýŽltý from "./images/mutations/alexander-malý-žltý.jpg";
import malýModrý from "./images/mutations/alexander-malý-modrý.jpeg";
import malýŠedý from "./images/mutations/alexander-malý-šedý.jpg";
import čínsky from "./images/alexander-čínsky.jpg";
import šedý from "./images/alexander-šedý.jpg";
import ružový from "./images/kakadu-ružový.jpg";
import inka from "./images/kakadu-inka.jpg";

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
];

export const kinds = [
    "ara",
    "amazoňan",
    "alexander",
    "kakadu",
    "ostatné",
];

export default parrots;
