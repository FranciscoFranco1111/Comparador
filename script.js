function comparar() {
    let bool = 0;
    let n1 = parseFloat(document.getElementById('N1').value);
    let n2 = parseFloat(document.getElementById('N2').value);
    let n3 = parseFloat(document.getElementById('N3').value);
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
      alert("Por favor preencha todos os campos solicitados.");
      return;
    }
  let max= Math.max(n1, n2, n3);
  let min= Math.min(n1, n2, n3);
  let equalNumbers = [];
      if (n1 === n2) {
          equalNumbers.push(n1);
      }
      if (n2 === n3) {
          equalNumbers.push(n2);
      }
      if (n1 === n3) {
          equalNumbers.push(n1);
      }
    
      document.getElementById('outputHTML').innerHTML = ` 
      <p>Maior número= ${max}
      <p>Menor número= ${min}
      <p>Números Iguais= ${equalNumbers}
      <p>Os números são todos diferentes: ${equalNumbers.length === 0 ? 'Sim' : 'Não'}`;
    }