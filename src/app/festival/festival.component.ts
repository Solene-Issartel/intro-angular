import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-festival",
  templateUrl: "./festival.component.html",
  styleUrls: ["./festival.component.css"]
})
export class FestivalComponent implements OnInit {
  public festivals;
  public nbFestival;
  public nbTentatives;

  ngOnInit(): void {
    this.festivals = [
      { name: "FJM2020", tables: 160 },
      { name: "FJM2018", tables: 80 },
      { name: "FJM2019", tables: 110 }
    ];
    this.nbFestival = this.festivals.length;
    this.nbTentatives = 0;
  }

  addFestival(): void {
    this.festivals.push({
      name: "FJM2021",
      tables: 40
    });
    this.nbFestival += 1;
  }

  changeNameFestival(): void {
    this.nbTentatives += 1;
    this.festivals[0].name = this.festivals[0].name + this.nbTentatives;
  }
}
