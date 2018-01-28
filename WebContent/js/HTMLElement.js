HTMLElement = function(config) {
    this.config = config;
    this.init();
}

HTMLElement.prototype.init = function() {
    this.template = templates[this.config.template];
    this.setHtml();
}

HTMLElement.prototype.setHtml = function() {
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
    if (this.config.children) {
        for (var i = 0; i < this.config.children.length; i++) {
            var component = App.parser.parseConfigurationToClass(this.config.children[i]);
            containerContent += component.getHtml();
        }
    }

    this.html = this.html.replaceAll("[" + this.config.jsClass + "_content" + "]", containerContent);
}

HTMLElement.prototype.getHtml = function() {
    return this.html;
}