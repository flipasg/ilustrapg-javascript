Application = function(){}

Application.prototype.init = function(){
	this.parser = new Parser();
	this.languageReader = new LanguageReader();
	this.imageReader = new ImageReader();
	this.linkReader = new LinkReader();
	this.appConfigurationReader = new AppConfigurationReader();
	this.render = new Render();
	this.eventsController = new EventController();
}