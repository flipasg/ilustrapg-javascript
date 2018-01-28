Carousel = function(config) {
    this.config = config;
    this.init();
}

Carousel.prototype.init = function() {
    this.template = templates[this.config.template];
    this.setHtml();
}

Carousel.prototype.setHtml = function() {
    var oThis = this;
    this.html = this.template;
    var configKeys = Object.keys(this.config);
    for (var i = 0; i < configKeys.length; i++) {
        var key = configKeys[i];
        if (this.config[key].indexOf) {
            if (this.config[key].indexOf("@") == 0) {
                this.html = this.html.replaceAll("[" + this.config.jsClass + "_" + key + "]", App.languageReader.getText(this.config[key]));
            } else if (this.config[key].indexOf("#") == 0) {
                this.html = this.html.replaceAll("[" + this.config.jsClass + "_" + key + "]", App.imageReader.getImage(this.config[key]));
            } else if (this.config[key].indexOf("_") == 0) {
                this.html = this.html.replaceAll("[" + this.config.jsClass + "_" + key + "]", App.linkReader.getLink(this.config[key]));
            } else {
                this.html = this.html.replaceAll("[" + this.config.jsClass + "_" + key + "]", this.config[key]);
            }

        }
    }

    var containerContent = "";
    for (var i = 0; i < this.config.images.length; i++) {
        var containerClass = "item";
        if (i == 0) {
            containerClass += " active";
        }
        var captionTitle = "";
        var alt = "";
        var captionDesc = "";
        var width = "";
        var height = "";
        if (this.config.images[i].title) {
            captionTitle = this.config.images[i].title;
        }
        if (this.config.images[i].alt) {
            alt = this.config.images[i].alt;
        }
        if (this.config.images[i].width) {
            width = this.config.images[i].width;
        }
        if (this.config.images[i].height) {
            height = this.config.images[i].height;
        }
        if (this.config.images[i].desc) {
            captionDesc = this.config.images[i].desc;
        }
        var imageTemplate = "image";
        if(this.config.imageTemplate){
            imageTemplate = this.config.imageTemplate;
        }
        var configuration = {
            id: this.config.id+"_casourelItemContainer" + i,
            className: "",
            template: "container",
            children: [{
                id: this.config.id+"_casourelItemContainer" + i,
                className: "",
                template: "carousel",
                captionDesc: captionDesc,
                captionTitle: captionTitle,
                children: [{
                    id: this.config.id+"_carouselImage" + i,
                    className: "rsImg",
                    template: imageTemplate,
                    src: this.config.images[i].src,
                    alt: this.config.images[i].alt,
                    width: width,
                    height: height
                }]
            }]
        }
        var component = App.parser.parseConfigurationToClass(configuration);
        containerContent += component.getHtml();
    }

    this.html = this.html.replaceAll("[" + this.config.jsClass + "_content" + "]", containerContent);
    setTimeout(function() {
        $('#' + oThis.config.id).royalSlider(oThis.config.sliderConfig);

    });
}

Carousel.prototype.getHtml = function() {
    return this.html;
}