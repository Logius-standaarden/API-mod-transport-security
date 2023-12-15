const documentConfig = {
    //voor specStatus mogelijkheden zie https://github.com/Logius-standaarden/respec/wiki/specStatus
    specStatus: "VV",
    //voor specType mogelijkheden zie https://github.com/Logius-standaarden/respec/wiki/specType
    specType: "HR",
    pubDomain: "api",
    shortName: "transport-security",
//    publishDate: "2023-05-24",
    publishVersion: "1.0.0",
    // previousPublishVersion: "(none)",
    //  previousPublishDate: "(none)",
    //  previousMaturity: "WV",
    edDraftURI: "https://geonovum.github.io/KP-APIs/API-strategie-modules/transport-security/",    
    editors:
        [
            {
                name: "Kennisplatform API's",
                company: "Kennisplatform API's",
                companyURL: "https://github.com/Geonovum/KP-APIs",
            }
        ],
    authors:
        [
            {
                name: "Kennisplatform API's",
                company: "Kennisplatform API's",
                companyURL: "https://github.com/Geonovum/KP-APIs",
            }
        ],
    github: "https://github.com/Geonovum/KP-APIs",


    // Controls if linked "§" section markers are added to a document
    addSectionLinks: true,

    localBiblio: {
        "NCSC.TLS": {
          href: "https://www.ncsc.nl/documenten/publicaties/2021/januari/19/ict-beveiligingsrichtlijnen-voor-transport-layer-security-2.1",
          title: "ICT-beveiligingsrichtlijnen voor Transport Layer Security (TLS)",
          authors: ["NCSC"],
          date: "Januari 2021"
        }
    }
}
