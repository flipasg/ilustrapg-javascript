EventController = function () {
    this.init();
}

EventController.prototype.init = function () {
    this.events = eventsConfiguration;
    this.setEvents();
}

EventController.prototype.setEvents = function () {
    var oThis = this;
    this.setWelcomeEvents();
    this.setMenuEvents();
    this.setSectionsEvents();
    this.setGroupsEvents();
    this.setArticlesEvents();
    this.setResizeEvents();
    this.setContactEvents();
    $("#editorial a").trigger("click");
}

EventController.prototype.setContactEvents = function () {
    var oThis = this;
    $(this.events.contact.selector).click(function () {
        oThis.showContactContainer(arguments);
        oThis.clearInfoContainerClass();
    });
}

EventController.prototype.expandMenu = function () {
    $("#leftContainer").animate({
        "marginLeft": "0px"
    });
    $("#infoContainer").animate({
        "marginLeft": "325px"
    });
    $("#infoContainer").css("width","");
};

EventController.prototype.collapseMenu = function () {
    $("#leftContainer").animate({
        "marginLeft": "-265px"
    });
    $("#infoContainer").animate({
        "marginLeft": "0px"
    });
    $("#infoContainer").css("width","100%");
};

EventController.prototype.toggleMenu = function () {
    if (parseInt($("#leftContainer").css("margin-left").replace("px", "")) < 0) {
        this.expandMenu();
    } else {
        this.collapseMenu();
    }
};
EventController.prototype.setMenuEvents = function () {
    var oThis = this;
    $("#menuCollapseDiv").click(function () {
        event.stopPropagation();
        oThis.toggleMenu();
    });
    
    $(".menu li a").mouseover(function () {
        var arrowImage = document.getElementById(this.parentElement.id + "SectionArrowImage");
        if (arrowImage) {
            if ($(this).hasClass("activeMenuItem")) {
                arrowImage.src = App.imageReader.getImage("sectionArrowRed");
            } else {
                arrowImage.src = App.imageReader.getImage("sectionArrow");
            }
        }
    });

    $(".menu li a").mouseleave(function () {
        if (!$(this).hasClass("activeMenuItem")) {
            var arrowImage = document.getElementById(this.parentElement.id + "SectionArrowImage");
            if (arrowImage) {
                arrowImage.src = "";
            }
        }
    });

    $(".menu li a").click(function () {
        event.stopPropagation();
        event.preventDefault();
        $(".menu li a").removeClass("activeMenuItem");
        $(this).addClass("activeMenuItem");
        $(".sectionArrow img").each(function (index, element) {
            element.src = "";
        });
        var arrowImage = document.getElementById(this.parentElement.id + "SectionArrowImage");
        if (arrowImage) {
            arrowImage.src = App.imageReader.getImage("sectionArrowRed");
        }
    });
}


EventController.prototype.showContactContainer = function (eventArguments) {
    var oThis = this;
    eventArguments[0].preventDefault();
    if (!App.appConfigurationReader.pages[this.events.contact.id]) {

        var htmlElement = App.parser.parseConfigurationToClass(this.events.contact.pageConfiguration);
        App.appConfigurationReader.pages[this.events.contact.id] = htmlElement.getHtml();
    }
    $("#infoContainer").html(App.appConfigurationReader.pages[this.events.contact.id]);
    $("#infoContainer").fadeIn();
}

EventController.prototype.setWelcomeEvents = function () {
    var oThis = this;
    $("#welcomeArrow").click(function (event) {
        oThis.showAppContainer();
    });
    $("#logo").click(function (event) {
        oThis.showWelcomeContainer();
    });
}


EventController.prototype.setGroupsEvents = function (event) {
    var oThis = this;
    for (var i = 0; i < this.events.groups.length; i++) {
        var eventConfiguration = this.events.groups[i];
        $(eventConfiguration.selector)[eventConfiguration.type](function () {
            oThis.showChildren(arguments, eventConfiguration.template, eventConfiguration.childrenTemplate);
            oThis.addInfoContainerClass("groupBackground");
        });
    }
}

EventController.prototype.setSectionsEvents = function (event) {
    var oThis = this;
    for (var i = 0; i < this.events.sections.length; i++) {
        var eventConfiguration = this.events.sections[i];
        $(eventConfiguration.selector)[eventConfiguration.type](function () {
            oThis.showChildren(arguments, eventConfiguration.template, eventConfiguration.childrenTemplate);
            oThis.addInfoContainerClass("sectionBackground");
        });
    }
}
EventController.prototype.addInfoContainerClass = function (className) {
    var oThis = this;
    this.clearInfoContainerClass();
    $("#mainContainer").addClass(className);
}
EventController.prototype.clearInfoContainerClass = function (className) {
    var oThis = this;
    $("#mainContainer").removeClass("groupBackground");
    $("#mainContainer").removeClass("sectionBackground");
}

EventController.prototype.setArticlesEvents = function (event) {
    var oThis = this;
    for (var i = 0; i < this.events.articles.length; i++) {
        var eventConfiguration = this.events.articles[i];
        $(eventConfiguration.selector)[eventConfiguration.type](function () {
            oThis.showArticle(arguments, eventConfiguration.template);
            oThis.clearInfoContainerClass();
        });
    }
}

EventController.prototype.showWelcomeContainer = function (eventArguments) {
    var oThis = this;
    $('#welcomeContainer').show();
    $('html, body').stop().animate({
        'scrollTop': $('#welcomeContainer').offset().top
    }, 500, 'swing');
    setTimeout(function () {
        oThis.resizeContainers();
        $("#mainContainer").hide();
    }, 500)
}


EventController.prototype.showAppContainer = function (eventArguments) {
    var oThis = this;
    $("#mainContainer").show();
    $('html, body').stop().animate({
        'scrollTop': $('#mainContainer').offset().top
    }, 500, 'swing');
    setTimeout(function () {
        oThis.resizeContainers();
        $("#welcomeContainer").hide();
    }, 500)
}

EventController.prototype.setResizeEvents = function (eventArguments) {
    var oThis = this;
    this.resizeContainers();
    $('#welcomeContainer').css({
        'height': $(window).height() + 'px'
    });
    //$('#contentContainer').css({'height':($(window).height()-$("#headerContainer ").outerHeight())+'px'});
    $(window).resize(function () {
        oThis.resizeContainers();
        //$('#contentContainer').css({'height':($(window).height()-$("#headerContainer ").outerHeight())+'px',maxHeight:($(window).height()-$("#headerContainer ").outerHeight())+'px'});
    });
}
EventController.prototype.resizeContainers = function (eventArguments) {

    $('#leftContainer').css({
        'max-height': ($(window).height() - $("#headerContainer").height()) + 'px',
        'height': ($(window).height() - $("#headerContainer").height()) + 'px',
        'overflow-y': 'auto'
    });
    $('#infoContainer').css({
        'max-height': ($(window).height() - $("#headerContainer").height()) + 'px',
        'height': ($(window).height() - $("#headerContainer").height()) + 'px',
        'overflow-y': 'auto'
    });

    $('.royalSlider').css({
        'max-height': ($("#leftContainer").height()) + 'px',
        'height': ($("#leftContainer").height()) + 'px',
        'max-width': ($("#infoContainer").width() - $(".pageInfoContainer").width()) + 'px'
    });

    $('.royalSlider').css({
        'max-height': ($("#leftContainer").height()) + 'px',
        'height': ($("#leftContainer").height()) + 'px',
        'overflow-y': 'auto'
    });
}

EventController.prototype.showChildren = function (eventArguments, pageTemplate, childrenTemplate) {
    eventArguments[0].preventDefault();
    var target = eventArguments[0].currentTarget;
    if (!App.appConfigurationReader.pages[target.parentElement.id]) {
        var targetChildrens = $("#" + target.parentElement.id + "Container").children("li");

        var childrenConfiguration = [];

        for (var i = 0; i < targetChildrens.length; i++) {
            var id = targetChildrens[i].id;
            var childConfiguration = {
                id: id + "Thumbnail",
                className: id + "Thumbnail imageContainer",
                articleTitle: "@" + id + "ThumbnailTitle",
                imageId: id + "ThumbnailImage",
                imageClassName: id + "ThumbnailImage thumbnailImage img-responsive",
                imageSrc: "#" + id + "ThumbnailImageSrc",
                imageAlt: "@" + id + "ThumbnailAlt",
                template: childrenTemplate
            }
            childrenConfiguration.push(childConfiguration);
        }

        var htmlElement = App.parser.parseConfigurationToClass({
            id: target.parentElement.id + "Page",
            className: target.parentElement.id + "Page col-lg-12",
            containerId: target.parentElement.id + "PageContainer",
            containerClassName: target.parentElement.id + "PageContainer webPageContainer col-xs-12 col-lg-10",
            sectionTitle: "@" + target.parentElement.id + "PageTitle",
            sectionDescription: "@" + target.parentElement.id + "PageDescription",
            imageContainerId: target.parentElement.id + "PageImageContainer",
            imageContainerClassName: target.parentElement.id + "PageImageContainer webPageImageContainer col-lg-2",
            rightImageId: target.parentElement.id + "PageImageContaineImage",
            rightImageClassName: target.parentElement.id + "PageImageContaineImage webPageContainerImage img-responsive",
            rightImageSrc: "#" + target.parentElement.id + "PageImageSrc",
            rightImageAlt: "@" + target.parentElement.id + "PageImageAlt",
            template: pageTemplate,
            children: childrenConfiguration
        });
        App.appConfigurationReader.pages[target.parentElement.id] = htmlElement.getHtml();
    }
    $("#infoContainer").html(App.appConfigurationReader.pages[target.parentElement.id]);
    $("#infoContainer").hide();
    $("#infoContainer").fadeIn();
    $(".thumbnailContentContainer").click(function () {
        var originId = $(this).parent().attr("id").replace("Thumbnail", "");
        $("#" + originId + " a").trigger("click");
    });
}

EventController.prototype.showArticle = function (eventArguments, pageTemplate) {
    eventArguments[0].preventDefault();
    var target = eventArguments[0].currentTarget;
    var htmlElement = App.parser.parseConfigurationToClass({
        id: target.parentElement.id + "PageContainer",
        className: "col-lg-12 pageContainer",
        template: "container",
        children: [{
            id: target.parentElement.id + "PageCarouselContainer",
            className: "royalSlider rsUni col-xs-12 col-sm-12 col-md-12 col-lg-9",
            jsClass: "Carousel",
            template: "carouselContainer",
            imageTemplate: "pageImageCarousel",
            sliderConfig: articlesConfiguration[target.parentElement.id].sliderConfig,
            images: articlesConfiguration[target.parentElement.id].images
        }, {
            id: target.parentElement.id + "PageInfoContainer",
            className: "pageInfoContainer col-xs-12 col-sm-12 col-md-12 col-lg-3",
            template: "container",
            children: [{
                id: target.parentElement.id + "PageTitle",
                className: "subTitle articleTitle",
                template: "pageTitle",
                text: "@" + target.parentElement.id + "PageTitle"
            }, {
                id: target.parentElement.id + "PageParagraph",
                className: "col-md-12 pageParagraph",
                template: "paragraph",
                content: "@" + target.parentElement.id + "PageParagraph"
            }]
        }]
    });
    App.appConfigurationReader.pages[target.parentElement.id] = htmlElement.getHtml();
    $("#infoContainer").html(App.appConfigurationReader.pages[target.parentElement.id]);
    $("#infoContainer").fadeIn();

    $('.royalSlider').css({
        'max-height': ($("#leftContainer").height() - 100) + 'px',
        'max-width': ($("#infoContainer").width() - $(".pageInfoContainer").width() - 100) + 'px'
    });
    

}