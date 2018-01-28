SliderPlugin = function(config) {
    this.config = config;
    this.init();
}

SliderPlugin.prototype.init = function() {}

SliderPlugin.prototype.render = function() {
    var oThis = this;
    $(function() {
        $('#' + oThis.config.containerId).superslides({
            hashchange: true,
            play: 2000
        });

        $('#' + oThis.config.containerId).on('mouseenter', function() {
            $(this).superslides('stop');
        });
        $('#' + oThis.config.containerId).on('mouseleave', function() {
            $(this).superslides('start');
        });
    });
}