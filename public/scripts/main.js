import Organism from '../scripts/organism.js';

export default function createOffspring() {
    let genes_a1 = document.getElementById("genes_a1").value.split(',');
    let genes_a2 = document.getElementById("genes_a2").value.split(',');
    let genes_b1 = document.getElementById("genes_b1").value.split(',');
    let genes_b2 = document.getElementById("genes_b2").value.split(',');

    let maleOrganism = new Organism( [
        {chromosomeFromMaleParent: genes_a1, chromosomeFromFemaleParent: genes_a2}
      ] );
      
    let femaleOrganism = new Organism( [
        {chromosomeFromMaleParent: genes_b1, chromosomeFromFemaleParent: genes_b2}
    ] );    

    let offspring = maleOrganism.reproduce(femaleOrganism);
    console.log("["+offspring.chromosomes[0].chromosomeFromMaleParent + "], [" + offspring.chromosomes[0].chromosomeFromFemaleParent+"]");
}
