// My Solution of the Module 4 Assignment

(function (window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  function charAt (name) {
      return name[0].toLowerCase();
  }

  for (var i = 0; i < names.length; i++) {
   var firstLetter = charAt(names[i]);

  if (firstLetter == 'j') {
      byeSpeaker.speak(names[i]);
      } else {
      helloSpeaker.speak(names[i]);
      }
    }
})(window);