var appConfiguration = {
    cscontainer: {
        template: "cscontainer"
    },
    container: {
        id: "appContainer",
        className: "appContainer container-fluid",
        template: "container",
        children: [{
            id: "mainContainer",
            className: "mainContainer container-fluid",
            template: "container",
            children: [{
                id: "headerContainer",
                className: "headerContainer container-fluid",
                template: "header",
                children: [{
                    id: "headerBackground",
                    className: "headerBackground",
                    template: "image",
                    src: "#headerBackground",
                    alt: "@headerBackground"
                }, {
                    id: "logoContainer",
                    className: "logoContainer",
                    template: "container",
                    children: [{
                        id: "logo",
                        className: "logo img-responsive",
                        template: "image",
                        src: "#logo",
                        alt: "@logo"
                    }]
                }, {
                    id: "headerFacebook",
                    className: "headerSocialLogo headerFacebook",
                    template: "imageLink",
                    src: "#headerFacebook",
                    alt: "@headerFacebook",
                    link: "_facebook"
                }, {
                    id: "headerInstagram",
                    className: "headerSocialLogo headerInstagram",
                    template: "imageLink",
                    src: "#headerInstagram",
                    alt: "@headerInstagram",
                    link: "_instagram"

                }, {
                    id: "headerTwitter",
                    className: "headerSocialLogo headerTwitter",
                    template: "imageLink",
                    src: "#headerTwitter",
                    alt: "@headerTwitter",
                    link: "_twitter"
                }]
            }, {
                id: "contentContainer",
                className: "contentContainer container-fluid",
                template: "container",
                children: [{
                    id: "leftContainer",
                    className: "sidebar-nav-fixed affix col-xs-12 col-sm-4 col-md-4 col-lg-2",
                    template: "container",
                    children: [{
                        id: "menuContainer",
                        className: "menuContainer",
                        template: "container",
                        children: [{
                            id: "menu",
                            className: "menu",
                            template: "unorderedList",
                            children: [{
                                    id: "editorial",
                                    className: "editorial",
                                    template: "listSectionContainer",
                                    text: "@editorialMenuText",
                                    link: "",
                                    sectionArrowImageSrc: "#sectionArrow",
                                    children: [{
                                        id: "adulto",
                                        className: "adulto",
                                        template: "listContainer",
                                        text: "@adultoMenuText",
                                        link: "",
                                        children: [{
                                            id: "lavozeslava",
                                            className: "lavozeslava",
                                            text: "@lavozeslavaMenuText",
                                            link: "",
                                            template: "listElement"
                                        }, {
                                            id: "circe",
                                            className: "circe",
                                            text: "@circeMenuText",
                                            link: "",
                                            template: "listElement"
                                        }, {
                                            id: "narciso",
                                            className: "narciso",
                                            text: "@narcisoMenuText",
                                            link: "",
                                            template: "listElement"
                                        }, {
                                            id: "medeacomic",
                                            className: "medeacomic",
                                            text: "@medeacomicMenuText",
                                            link: "",
                                            template: "listElement"
                                        }] // ARTICULO dentro de ADULTO
                                    }, {
                                        id: "infantil",
                                        className: "infantil",
                                        template: "listContainer",
                                        text: "@infantilMenuText",
                                        link: "",
                                        children: [
                                            //     {
                                            //     id: "elninoylacaracola",
                                            //     className: "elninoylacaracola",
                                            //     text: "@elninoylacaracolaMenuText",
                                            //     link: "",
                                            //     template: "listElement"
                                            // }, 
                                            {
                                                id: "labellaylabestia",
                                                className: "labellaylabestia",
                                                text: "@labellaylabestiaMenuText",
                                                template: "listElement"
                                            }, {
                                                id: "cuentosclasicos",
                                                className: "cuentosclasicos",
                                                text: "@cuentosclasicosMenuText",
                                                link: "",
                                                template: "listElement"
                                            }
                                        ] // ARTICULO dentro de INFANTIL

                                    }] // aniadir nuevo GRUPO dentro EDITORIAL
                                }
                                //,  {
                                //     id: "dibujosypinturas",
                                //     className: "dibujosypinturas",
                                //     template: "listSectionContainer",
                                //     text: "@dibujosypinturasMenuText",
                                //     link: "",
                                //     sectionArrowImageSrc: "#sectionArrow",
                                //     children: [{
                                //         id: "libretas",
                                //         className: "libretas",
                                //         text: "@libretasMenuText",
                                //         link: "",
                                //         template: "listElement"
                                //     }, {
                                //         id: "figuras",
                                //         className: "figuras",
                                //         text: "@figurasMenuText",
                                //         link: "",
                                //         template: "listElement"
                                //     }]
                                // }, {
                                //     id: "posters",
                                //     className: "posters",
                                //     template: "listSectionContainer",
                                //     link: "",
                                //     text: "@postersMenuText",
                                //     sectionArrowImageSrc: "#sectionArrow",
                                //     children: [{
                                //             id: "eulienkantua",
                                //             className: "eulienkantua",
                                //             text: "@eulienkantuaMenuText",
                                //             link: "",
                                //             template: "listElement"
                                //         }
                                // , {
                                //     id: "shakespeare",
                                //     className: "shakespeare",
                                //     text: "@shakespeareMenuText",
                                //     link: "",
                                //     template: "listElement"
                                // }
                                //     ]
                                // }, 
                                // {
                                //     id: "retratos",
                                //     className: "retratos",
                                //     template: "listSectionContainer",
                                //     text: "@retratosMenuText",
                                //     link: "",
                                //     sectionArrowImageSrc: "#sectionArrow",
                                //     children: [{
                                //         id: "culpables",
                                //         className: "culpables",
                                //         text: "@culpablesMenuText",
                                //         link: "",
                                //         template: "listElement"
                                //     }, {
                                //         id: "personales",
                                //         className: "personales",
                                //         text: "@personalesMenuText",
                                //         link: "",
                                //         template: "listElement"
                                //     }]
                                // }
                                , {
                                    id: "contacto",
                                    className: "contacto",
                                    template: "listContainer",
                                    link: "",
                                    text: "@contactoMenuText"
                                }
                                // , {
                                //     id: "tienda",
                                //     className: "tienda",
                                //     template: "listContainer",
                                //     link: "_linkTest",
                                //     text: "@tiendaMenuText"
                                // }
                            ]
                        }]
                    }, {
                        id: "menuCollapseDiv",
                        className: "menuCollapseDiv",
                        template: "container"
                    }]
                }, {
                    id: "infoContainer",
                    className: "infoContainer col-xs-12 col-sm-8 col-md-8 col-lg-10",
                    template: "container"
                }]
            }]
        }]
    },
    plugins: []
};