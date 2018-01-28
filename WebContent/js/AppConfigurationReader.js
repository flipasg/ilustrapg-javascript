AppConfigurationReader = function(){
	this.init();
}

AppConfigurationReader.prototype.init = function(){
	this.readCSContainerConfiguration();
	this.readContainerConfiguration();
	this.readPluginsConfigurarion();
	this.pages = {};
}

AppConfigurationReader.prototype.readContainerConfiguration = function(){
	if(appConfiguration.container){
		this.container = App.parser.parseConfigurationToClass(appConfiguration.container);
	}
}
AppConfigurationReader.prototype.readCSContainerConfiguration = function(){
	if(appConfiguration.cscontainer){
		this.cscontainer = App.parser.parseConfigurationToClass(appConfiguration.cscontainer);
	}
}
AppConfigurationReader.prototype.readPluginsConfigurarion = function(){
	if(appConfiguration.plugins){
		this.plugins = App.parser.parsePlugins(appConfiguration.plugins);
	}
}