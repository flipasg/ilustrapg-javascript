LanguageReader = function(){
	this.init();
}

LanguageReader.prototype.init = function(){
	this.dictionary = dictionary;
	this.actualLanguage = "ES";
}

LanguageReader.prototype.getText = function(key){
	var text = this.dictionary[this.actualLanguage][key.replace("@","")];
	if(text){
		return text;
	}
	return "";
}