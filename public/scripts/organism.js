let nextId=1000;

export default class Organism {

  constructor(homologousChromosomePairs) {
    this.id=nextId++;
    this.chromosomes=homologousChromosomePairs;
  }

  reproduce(femaleOrganism, randomService = Math.random) {
    let offspringChromosomes = [];

    for(let chrIndex=0; chrIndex<femaleOrganism.chromosomes.length; chrIndex++) {
      let offspringChromosomeFromMaleParent = [];
      let offspringChromosomeFromFemaleParent = [];
      for(let geneIndex=0; geneIndex<femaleOrganism.chromosomes[chrIndex].chromosomeFromMaleParent.length; geneIndex++) {
        offspringChromosomeFromMaleParent.push( randomService()<0.5 ?
          this.chromosomes[chrIndex].chromosomeFromMaleParent[geneIndex] :
          this.chromosomes[chrIndex].chromosomeFromFemaleParent[geneIndex] );
        offspringChromosomeFromFemaleParent.push( randomService()<0.5 ?
          femaleOrganism.chromosomes[chrIndex].chromosomeFromMaleParent[geneIndex] :
          femaleOrganism.chromosomes[chrIndex].chromosomeFromFemaleParent[geneIndex] );
      }
      offspringChromosomes.push( {
        chromosomeFromMaleParent: offspringChromosomeFromMaleParent,
        chromosomeFromFemaleParent: offspringChromosomeFromFemaleParent,
      })
    }

    return new Organism( offspringChromosomes );
  }

  getGenes() {
    let asString="";
    let delimiter="";
    for(let chrIndex=0; chrIndex<this.chromosomes.length; chrIndex++) {
      asString += delimiter;
      let maleParentGenes = this.chromosomes[chrIndex].chromosomeFromMaleParent.join();
      let femaleParentGenes = this.chromosomes[chrIndex].chromosomeFromFemaleParent.join();
      asString += "["+maleParentGenes+" / "+femaleParentGenes+"]";
      delimiter=" ";
    }
    return asString;
  }

  toString() {
    return this.id+": "+this.getGenes();
  }
}
