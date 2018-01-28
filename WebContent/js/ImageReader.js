ImageReader = function(){
	this.init();
}

ImageReader.prototype.init = function(){
	this.gallery = imageGallery;
}

ImageReader.prototype.getImage = function(key){
	var image = this.gallery[key.replace("#","")];
	if(image){
		return image;
	}
	return "";
}