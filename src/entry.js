export function Entry(title, body) {
  this.title = title;
  this.body = body;
  this.getWordCount = function() {
    return "word count = " + this.body.split(" ").length;
  };
}

Entry.prototype.getVowelCount = function() {
  const vowels = ["a", "i", "e", "o", "u"];
  const string = this.body;
  const stringArray = string.split("");
  let xArray = [];
  stringArray.forEach(function(letter) {
    if (vowels.includes(letter)) {
      xArray.push(letter);
    }
  });
  return "vowel count = " + xArray.length;
};