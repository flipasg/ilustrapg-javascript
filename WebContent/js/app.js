String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
};

init = function(){
	App = new Application();
	App.init();
}