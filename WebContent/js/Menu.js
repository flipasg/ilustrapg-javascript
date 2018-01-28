Menu = function() {

}

Menu.prototype.getMenuItems = function() {
    return this.menuItems;
}

Menu.prototype.addMenuItem = function(menuItem) {
	this.menuItems.push(menuItem);
}

Menu.prototype.removeMenuItem = function(menuItem) {
	var menuItemIndex = this.menuItems.indexOf(menuItem);
	if(menuItemIndex != -1){
		this.menuItems.splice(menuItemIndex,1);
	}
}

Menu.prototype.removeMenuItemById = function(menuItemId) {
	var find = false;
	for(var i = 0;!find && i < this.menuItems.length; i++){
		var menuItem = this.menuItems[i];
		if(menuItem.id == menuItemId){
			this.menuItems.splice(i,1);
			find = true;
		}
	}
}


Menu.prototype.render = function() {
	var find = false;
	for(var i = 0;!find && i < this.menuItems.length; i++){
		var menuItem = this.menuItems[i];
		menuItem.render();
	}
}