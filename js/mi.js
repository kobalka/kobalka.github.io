// mi.js, v1.0.0
// Copyright 2015 Mobile Institute (http://mobileinstitute.eu)

mi = {
	text: 'Oceń nas',
	bgColor: '#ce3f0d',
	color: 'white',
	hlColor: '#8b2c09',
	id: '_mi_btn',
	offset: '30%',

	run: function() {
		var style = this.prepareStyle();
		this.createStyle(style);
		this.createSurveyButton();
	},

	openSurvey: function() {
		window.open(this.link, "_blank", "width=1130,height=700,innerWidth=1130,innerHeight=700,titlebar=0,scrollbars=0,status=0,location=0,toolbar=0,menubar=0");
	},

	createSurveyButton: function(conf) {
		var that = this;
		var f = "<div id='" + this.id + "'><a href='#' onclick='return false;'>" + this.text + "</a></div>";
		var l = document.createElement("div");
		l.innerHTML = f;
		document.body.appendChild(l);

		var c = document.getElementById(this.id).getElementsByTagName("a");
		for (var h = 0; h < c.length; h++) {
			c[h].onclick = function() {
				that.openSurvey();
				return false
			}
		}
	},

	prepareStyle: function(conf) {
		var s = "div#" + this.id + " { position: fixed; z-index: 16777270; top: " + this.offset + "; right: -10px; \n";
		s += "background-color: " + this.bgColor + "; color: " + this.color + "; \n";
		s += "transform: rotate(270deg); -ms-transform:rotate(270deg); -moz-transform:rotate(270deg); -webkit-transform:rotate(270deg); -o-transform:rotate(270deg); transform-origin: 100% 100%; -ms-transform-origin: 100% 100%; -webkit-transform-origin: 100% 100%;  \n";
		s += "border-radius: 4px 4px 0 0; box-shadow: 0px 0px 10px rgba(0,0,0,0.2); \n";
		s += "transition: all 0.5s; -webkit-transition: all 0.5s; -ms-transition: all 0.5s; -moz-transition: all 0.5s; \n";
		s += "}\n";
		s += "div#" + this.id + ":hover { background-color: " + this.hlColor + "; transform: rotate(270deg) translateY(-10px); -ms-transform: rotate(270deg) translateY(-10px); -webkit-transform: rotate(270deg) translateY(-10px); -moz-transform: rotate(270deg) translateY(-10px); -o-transform: rotate(270deg) translateY(-10px); }\n";
		s += "div#" + this.id + " > a { color: white; background: none; text-decoration: none; font-size: 14px; display: inline-block; font-weight: normal; font-family: arial; padding: 10px 20px 15px 20px; }\n";
		return s;
	},

	createStyle: function(style) {
		var a = document.createElement("style");
		a.setAttribute("type", "text/css");
		if (a.styleSheet)
			a.styleSheet.cssText = style;
		else
			a.appendChild(document.createTextNode(style));
		document.getElementsByTagName("head")[0].appendChild(a);
	}
};