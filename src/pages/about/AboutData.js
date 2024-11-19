// * ====================================================== * //
// * =================== NEW WORLD DATA =================== * //
// * ====================================================== * //

export const new_world_data = [
    {
        id: 1,
        identifier: "ALCARODIA A NEW WORLD",
        alcarodian_year: 500, // ! FIX, CHECK ANTHOLOGY
        release_year: 2022, // ! VERIFY, AMAZON TELLS YOU. FORMAT TO DD/MM/YYYYY?
        versions: {
            us: {
                id: 1001,
                title: "ALCARODIA",
                subtitle: "A NEW WORLD",
                summary: "THE IMMORTAL,\nCASSIUS BLOODGOOD,\nMINES SOMETHING THAT SHOULD HAVE NEVER BEEN MINED...",
                emblemColor: "",
                textColor: "#FFFFFF",
                cardColor: "#001F3F",
                url: "https://www.amazon.com/Alcarodia-Oscar-Antonio-Hinojosa-Salum-ebook/dp/B0CL1ZBWTQ",
            },
            es: {
                id: 1002,
                title: "ALCARODIA",
                subtitle: "UN NUEVO MUNDO",
                summary: "EL INMORTAL,\nCASSIUS BLOODGOOD,\nMINA ALGO QUE NUNCA DEBIÓ HABER SIDO MINADO...",
                emblemColor: "brightness(0) saturate(100%) invert(83%) sepia(40%) saturate(3227%) hue-rotate(181deg) brightness(85%) contrast(83%)",
                textColor: "#779ecb",
                cardColor: "#FFFFFF",
                url: "https://www.amazon.com/-/es/%C3%93scar-Antonio-Hinojosa-Salum-ebook/dp/B0BYWDSLGB",
            },
        },
        media: {}
    },
    {
        id: 2,
        identifier: "ALCARODIAN TALES EVERGREEN",
        alcarodian_year: 500, // ! FIX, CHECK ANTHOLOGY
        release_year: 2022, // ! VERIFY, AMAZON TELLS YOU. FORMAT TO DD/MM/YYYYY?
        versions: {
            us: {
                id: 2001,
                title: "ALCARODIAN TALES",
                subtitle: "EVERGREEN",
                summary: "THE STORY OF THE MOST POWERFUL DRUID AND DRYAD OF ALCARODIA: ANASTASIA EVERGREEN",
                emblemColor: "brightness(0) saturate(100%) invert(100%) sepia(17%) saturate(6775%) hue-rotate(53deg) brightness(89%) contrast(77%)",
                textColor: "#77DD77",
                cardColor: "#FFFFFF",
                dynamicClass: "Evergreen",
                url: "https://www.amazon.com/Tales-Alcarodia-Oscar-Antonio-Hinojosa-ebook/dp/B0CW1LX5W1",
            },
            es: {
                id: 2002,
                title: "CUENTOS ALCARODIANOS",
                subtitle: "EVERGREEN",
                summary: "LA HISTORIA DE LA DRUIDA Y DRÍADA MÁS PODEROSA DE ALCARODIA:\nANASTASIA EVERGREEN",
                emblemColor: "brightness(0) saturate(100%) invert(100%) sepia(17%) saturate(6775%) hue-rotate(53deg) brightness(89%) contrast(77%)",
                textColor: "#77DD77",
                cardColor: "#FFFFFF",
                dynamicClass: "Evergreen",
                url: "https://www.amazon.com.mx/Cuentos-Alcarodianos-%C3%93scar-Antonio-Hinojosa/dp/B0CYPH1Q7Q",
            },
        },
        media: {
            dynamicClass: "Evergreen",
        }
    },
];

export const new_world_years = [
    {
        // ? - ALCARODIA A NEW WORLD
        title: "1035 A.D."  // ! Naming them 'title' because of the way npm's react-chrono works: https://www.npmjs.com/package/react-chrono?activeTab=readme
    },
    {
        // ? - ALCARODIAN TALES EVERGREEN
        title: "184 A.D."
    },
];


// ? ====================================================== ? //
// ? =================== OLD WORLD DATA =================== ? //
// ? ====================================================== ? //

export const old_world_data = [
    {
        id: 1,
        identifier: "ALCARODIAN TALES DRAGONRIDER",
        versions: {
            us: {
                id: 1001,
                title: "ALCARODIAN TALES",
                subtitle: "DRAGONRIDER",
                summary: "...",
                emblemColor: "white",
                textColor: "white",
                cardColor: "#FF4081",
                url: "",
            },
            es: {
                id: 1002,
                title: "CUENTOS ALCARODIANOS",
                subtitle: "DRAGONRIDER",
                summary: "...",
                emblemColor: "brightness(0) saturate(100%) invert(63%) sepia(69%) saturate(6752%) hue-rotate(316deg) brightness(101%) contrast(105%)",
                textColor: "#FF4081",
                cardColor: "#FFFFFF",
                url: "",
            },
        },
        media: {}
    },
];

export const old_world_years = [
    {
        // ? ALCARODIAN TALES DRAGONRIDER
        title: "COMING SOON"
    }
]