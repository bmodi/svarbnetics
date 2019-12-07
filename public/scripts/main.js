import Organism from '../scripts/organism.js';

import '../modules/chart.js/dist/Chart.bundle.min.js';

export function createOffspring() {
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

    addOffspringToTable(maleOrganism, femaleOrganism, offspring);
    updatePopulationChart();
}

function addOffspringToTable(maleOrganism, femaleOrganism, offspring) {
    let table = document.getElementById("population").getElementsByTagName('tbody')[0];
    let row = table.insertRow(0);
    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    // Add some text to the new cells:
    cell1.innerHTML = maleOrganism.toString();
    cell2.innerHTML = femaleOrganism.toString();
    cell3.innerHTML = offspring.toString();
}

function updatePopulationChart() {
    let ctx = document.getElementById('myChart').getContext('2d');
    let newChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    return newChart;
}
