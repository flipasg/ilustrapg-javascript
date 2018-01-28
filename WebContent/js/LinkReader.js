LinkReader = function(){
	this.init();
}

LinkReader.prototype.init = function(){
	this.links = links;
}

LinkReader.prototype.getLink = function(key){
	var link = this.links[key.replace("_","")];
	if(link){
		return link;
	}
	return "";
}