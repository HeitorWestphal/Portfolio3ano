function Palindromo(palavra) {
    const lowerCaseWord = palavra.toLowerCase();
    const reversedWord = lowerCaseWord.split("").reverse().join("");
  
    return lowerCaseWord === reversedWord;
  }
  
  const palavra = "ovo";
  if (Palindromo(palavra)) {
    console.log(`${palavra} é um palíndromo.`);
  } else {
    console.log(`${palavra} não é um palíndromo.`);
  }