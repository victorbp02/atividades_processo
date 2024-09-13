function nextElementA(sequence) {
    return sequence[sequence.length - 1] + 2;
  }
  
 
  function nextElementB(sequence) {
    return sequence[sequence.length - 1] * 2;
  }
  
  
  function nextElementC(sequence) {
    const lastIndex = sequence.length - 1;
    return (lastIndex + 1) ** 2;
  }
  
 
  function nextElementD(sequence) {
    const lastIndex = sequence.length - 1;
    return ((lastIndex + 2) * 2) ** 2;
  }
  
  
  function nextElementE(sequence) {
    const len = sequence.length;
    return sequence[len - 1] + sequence[len - 2];
  }
  
  
  function nextElementF(sequence) {
    return sequence[sequence.length - 1] + 1;
  }
  

  const sequenceA = [1, 3, 5, 7];
  const sequenceB = [2, 4, 8, 16, 32, 64];
  const sequenceC = [0, 1, 4, 9, 16, 25, 36];
  const sequenceD = [4, 16, 36, 64];
  const sequenceE = [1, 1, 2, 3, 5, 8];
  const sequenceF = [2, 10, 12, 16, 17, 18, 19];
  
  console.log('Próximo elemento da sequência A:', nextElementA(sequenceA));
  console.log('Próximo elemento da sequência B:', nextElementB(sequenceB));
  console.log('Próximo elemento da sequência C:', nextElementC(sequenceC));
  console.log('Próximo elemento da sequência D:', nextElementD(sequenceD));
  console.log('Próximo elemento da sequência E:', nextElementE(sequenceE));
  console.log('Próximo elemento da sequência F:', nextElementF(sequenceF));
  