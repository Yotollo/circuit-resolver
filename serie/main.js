function calcola() {
    const operazione = document.getElementById('operazione').value;
    const r1 = Number(document.getElementById('r1').value);
    const r2 = Number(document.getElementById('r2').value);
    let risultato = '';
  
    if (operazione === 'serie') {
      risultato = r1+r2;
    } else if (operazione === 'parallelo') {
      risultato = Math.round((r1*r2)/(r1+r2)*100)/100;
    }
  
    document.getElementById('risultato').innerText = operazione + " vale " + risultato;
  }
