import Organism from '../scripts/organism.js';

let nextRandom=0;
let randomList = [54, 162, 241, 287, 375, 448, 519, 528, 534, 574, 596, 629, 633, 655, 675, 702, 725, 746, 887, 940];

let chromosomesPairs1 =
  [
    {chromosomeFromMaleParent: ["gene33", "gene2", "gene3"], chromosomeFromFemaleParent: ["gene1", "gene2", "gene44"]},
    {chromosomeFromMaleParent: ["gene11", "gene8", "gene99", "gene45"], chromosomeFromFemaleParent: ["gene11", "gene82", "gene13", "gene10"]},
    {chromosomeFromMaleParent: ["gene20", "gene16"], chromosomeFromFemaleParent: ["gene20", "gene17"]}
  ];

let maleOrganism = new Organism( [
  {chromosomeFromMaleParent: ["gene1", "gene2", "gene3"], chromosomeFromFemaleParent: ["gene1", "gene5", "gene3"]},
  {chromosomeFromMaleParent: ["gene7", "gene8", "gene9", "gene10"], chromosomeFromFemaleParent: ["gene11", "gene8", "gene13", "gene10"]},
  {chromosomeFromMaleParent: ["gene15", "gene17"], chromosomeFromFemaleParent: ["gene20", "gene17"]}
] );

let femaleOrganism = new Organism( [
  {chromosomeFromMaleParent: ["gene33", "gene2", "gene3"], chromosomeFromFemaleParent: ["gene1", "gene2", "gene44"]},
  {chromosomeFromMaleParent: ["gene11", "gene8", "gene99", "gene45"], chromosomeFromFemaleParent: ["gene11", "gene82", "gene13", "gene10"]},
  {chromosomeFromMaleParent: ["gene20", "gene16"], chromosomeFromFemaleParent: ["gene20", "gene17"]}
] );

function randomNumbers() {
  return randomList[nextRandom++]/1000;
}

describe('Organism', function () {
  it('gets unique ids', function () {
    let o1 = new Organism(chromosomesPairs1);
    let o2 = new Organism(chromosomesPairs1);
    chai.expect(o1).to.have.property('id');
    chai.expect(o1.id).to.not.equal(o2.id);
  }),
  it('has a set of chromosomes', function () {
    let o1 = new Organism(chromosomesPairs1);
    chai.expect(o1).to.have.property('chromosomes');
  }),
  it('can reproduce with another organism', function () {
    let offspring = maleOrganism.reproduce(femaleOrganism, randomNumbers);
    let expectedChromosomes = [
      {chromosomeFromMaleParent: ["gene1", "gene2", "gene3"], chromosomeFromFemaleParent: ["gene33", "gene2", "gene3"]},
      {chromosomeFromMaleParent: ["gene11", "gene8", "gene13", "gene10"], chromosomeFromFemaleParent: ["gene11", "gene82", "gene13", "gene10"]},
      {chromosomeFromMaleParent: ["gene20", "gene17"], chromosomeFromFemaleParent: ["gene20", "gene17"]}
    ];
    console.log(offspring.chromosomes);
    console.log(expectedChromosomes);
    chai.expect(offspring.chromosomes).to.deep.equal(expectedChromosomes);
  });
});
