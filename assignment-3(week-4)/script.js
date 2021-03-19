(function () {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var index in names) {
    if (names[index].toLowerCase().startsWith("j")) {
      byeSpeaker.speak(names[index]);
    } else {
      helloSpeaker.speak(names[index]);
    }
  }
})();