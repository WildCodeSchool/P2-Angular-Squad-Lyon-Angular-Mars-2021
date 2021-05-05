export class MatchDirect {
      public equipeDomicile: string;
      public scoreDomicile: number;
      public equipeExterieur: string;
      public scoreExterieur: number;


    constructor(
    equipeDomicile: string,
    scoreDomicile: number,
    equipeExterieur: string,
    scoreExterieur: number,
    ) {
      this.equipeDomicile = equipeDomicile;
      this.scoreDomicile = scoreDomicile;
      this.equipeExterieur = equipeExterieur;
      this.scoreExterieur = scoreExterieur;
    }
  }