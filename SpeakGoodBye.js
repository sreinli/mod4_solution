(function (window){
var byeSpeaker = {
		speak : function speak(name) {
	  console.log(speakWord + " " + name);
	}
}

var speakWord = "Good Bye";

window.byeSpeaker = byeSpeaker;
})(window)