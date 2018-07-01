(function($) {
	$.fn.randomBG = function(options){
		setRandom();
		var defaults = {
           timing : 'ease-in',
           duration : '40s',
           iteration: 'infinite'
        }; 
        var params = $.extend(defaults, options);
        var mCss = {
        	'-webkit-animation': 'randomBg ' + params.duration + ' ' + params.timing + ' 0s ' + params.iteration + ' normal',
        	'-moz-animation': 'randomBg ' + params.duration + ' ' + params.timing + ' 0s ' + params.iteration + ' normal',
        	'-ms-animation': 'randomBg ' + params.duration + ' ' + params.timing + ' 0s ' + params.iteration + ' normal',
        	'-o-animation': 'randomBg ' + params.duration + ' ' + params.timing + ' 0s ' + params.iteration + ' normal',
        	'animation': 'randomBg ' + params.duration + ' ' + params.timing + ' 0s ' + params.iteration + ' normal'

   		};
        $(this).css(mCss);
		return(this);

	};
	function colorRan(){
		return parseInt(Math.random() * 255);
	};
	function colorA(){
		return Math.max(Math.random(), 0.7);
	};
	function setRandom(){
	var numA = Math.random();
	
	var css, rules, fadein, fadeout;
    css = document.createElement('style');
    css.type = 'text/css';

    fun1 = '@keyframes randomBg{' + [
        '0% {background-color: rgba(' + colorRan() + ',' + colorRan() + ',' + colorRan() + ',' + colorA() + ')}',
        '25% {background-color: rgba(' + colorRan() + ',' + colorRan() + ',' + colorRan() + ',' + colorA() + ')}',
        '50% {background-color: rgba(' + colorRan() + ',' + colorRan() + ',' + colorRan() + ',' + colorA() + ')}',
        '75% {background-color: rgba(' + colorRan() + ',' + colorRan() + ',' + colorRan() + ',' + colorA() + ')}',
        '100% {background-color: rgba(' + colorRan() + ',' + colorRan() + ',' + colorRan() + ',' + colorA() + ')}'
    ].join(' ') + '}';
    
    rules = document.createTextNode([fun1].join('\n'));
    css.appendChild(rules);
    document.getElementsByTagName('head')[0].appendChild(css);
	};
})(jQuery);
