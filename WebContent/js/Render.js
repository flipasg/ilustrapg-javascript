Render = function(){
	this.init();
}

Render.prototype.init = function(){
	if(this.getParameterByName("mode") === 'complete'){
		this.renderApp();
	} else {		
		this.renderComingSoon();
	}
	this.renderPlugins();
}

Render.prototype.renderComingSoon = function () {
	$("body").append(App.appConfigurationReader.cscontainer.getHtml());
}

Render.prototype.renderApp = function(){
	$("body").append(App.appConfigurationReader.container.getHtml());
}
Render.prototype.renderPlugins = function(){
	var plugins =App.appConfigurationReader.plugins;
	for(var i = 0; i < plugins.length;i++){
		plugins[i].render();
	}
}

Render.prototype.getParameterByName = function(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, "\\$&");
	var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, " "));
}