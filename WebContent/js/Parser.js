Parser = function(){}

Parser.prototype.parseConfigurationToClass = function(componentConfiguration){
	if(!componentConfiguration.jsClass) {
		componentConfiguration.jsClass = "HTMLElement";
	}
	if(window[componentConfiguration.jsClass]){
		return new window[componentConfiguration.jsClass](componentConfiguration);
	}

	return false;
}

Parser.prototype.parsePlugins = function(pluginsConfiguration){
	var parsedPlugins = [];
	for(var i = 0; i < pluginsConfiguration.length;i++){
		parsedPlugins.push(this.parseConfigurationToClass(pluginsConfiguration[i]));
	}
	return parsedPlugins;
}