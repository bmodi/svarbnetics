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

    // Find a <table> element with id="myTable":
    var table = document.getElementById("population").getElementsByTagName('tbody')[0];

    // Create an empty <tr> element and add it to the 1st position of the table:
    var row = table.insertRow(0);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    // Add some text to the new cells:
    cell1.innerHTML = maleOrganism.toString();
    cell2.innerHTML = femaleOrganism.toString();
    cell3.innerHTML = offspring.toString();
}
