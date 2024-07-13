// Soliq konkulyatori

function soliqKonkulyatori(soliqStavkasi) {
    return function (mahsulotNarxi) {
      return mahsulotNarxi * soliqStavkasi;  
    };
}

const gazSoligi = soliqKonkulyatori(0.7);
const elektrsoligi = soliqKonkulyatori(0.9);

console.log(elektrsoligi(2000));