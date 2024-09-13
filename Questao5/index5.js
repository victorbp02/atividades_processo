function simulateLamps() {
    
    let switches = [false, false, false]; 
    let lamps = [
      { id: 1, state: 'off', temperature: 'cold' },
      { id: 2, state: 'off', temperature: 'cold' },
      { id: 3, state: 'off', temperature: 'cold' }
    ];
  
    console.log('Ligar Interruptor 1 e aguardar...');
    switches[0] = true;
    lamps.forEach(lamp => {
      if (switches[0]) {
        lamp.temperature = 'warm';
      }
    });
  
    
    setTimeout(() => {
      console.log('Desligar Interruptor 1 e ligar Interruptor 2...');
      switches[0] = false;
      switches[1] = true;
      lamps.forEach(lamp => {
        if (switches[1]) {
          lamp.state = 'on';
        }
        if (switches[0]) {
          lamp.temperature = 'warm'; 
        }
      });
  
      
      console.log('Verificar o estado das lâmpadas:');
      lamps.forEach(lamp => {
        if (switches[1] && lamp.state === 'on') {
          console.log(`Lâmpada ${lamp.id} está ACESA. (Controlada pelo Interruptor 2)`);
        } else if (lamp.temperature === 'warm') {
          console.log(`Lâmpada ${lamp.id} está APAGADA mas QUENTE. (Controlada pelo Interruptor 1)`);
        } else {
          console.log(`Lâmpada ${lamp.id} está APAGADA e FRIA. (Controlada pelo Interruptor 3)`);
        }
      });
    }, 3000); 
  }
  
  simulateLamps();
  