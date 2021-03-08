// Target é o elemento h1
const target = window.document.getElementsByTagName('h1')[0];
console.log(target);

//Pega a letra e adiciona o style nela, esse style tem uma ////animação com o tempo aleatório de 0 a 4
const flickerLetter = letter => `<span style="animation: blink linear ${Math.random()*4}s">${letter}</span>`;
console.log(flickerLetter);

//Pega a letra do h1 e adiciona uma cor aleatória em hsla 
const colorLetter = letter => `<span style="color: hsla(${Math.random()*360}, 100%, 80%, 1);">${letter}</span>`;
console.log(colorLetter);


//Transforma em um array, pega cada letra do array e anima com o blink, depois colore cada letra com uma cor aleatória e o resultado é a soma de flickerLetter e colorLeter
const flickerAndColorText = text =>
  text
  .split('')
  .map(flickerLetter)
  .map(colorLetter)
  .join('');

  //Pega o target (h1) e roda a função nele 
  const neonTemps = target => target.innerHTML = flickerAndColorText(target.textContent);

  //Chamada da função para o target
  neonTemps(target);


