function longer(champ, contender) {
    return (contender.length > champ.length) ? contender : champ;
  }
  
  function longestWord(str) {
    var words = str.split(' ');
    return words.reduce(longer);
  }
  
  console.log(longestWord("Saya sangat senang mengerjakan soal algoritma"));