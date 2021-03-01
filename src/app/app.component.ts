import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { TreeNode } from "primeng/api";
import { Table } from "primeng/table";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  doelstellingboom: TreeNode[] = <TreeNode[]>[
    {
      label: "SD: Vrijetijdsbesteding",
      children: [
        {
          label: "BD: Een optimaal gebruik van de beschikbare infrastructuur",
          children: [
            {
              label: "AP: Efficiënt Gebruik van sportcentra etc....",
              children: [
                {
                  label: "A: De gemeentelijke sportcentra rookvrij maken"
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  beleidsItems = [
    {
      id: 1000,
      beleidselement: "SE2.2.5 Herstelling kunstgras hockeyveld",
      looptijd: "2020-2021",
      prioritair: true,
      status: "",
      verantwoordelijke:
        "Michiel Van Der Donck; Michel Lochten; Margarita Dubkova",
      opvolger: "Jan Peeters",
      tag: "SPORT;HEIST",
      indicator: "Stand van zaken",
      takenlijst: "",
      auteur: "Michiel",
      actieplan: "ap1",
      actie: "a1"
    },
    {
      id: 1001,
      beleidselement: "SE6.2.8 Implementatie nieuwe huisstijl",
      looptijd: "2020-2025",
      prioritair: true,
      status: "",
      verantwoordelijke: "Jan Peeters",
      opvolger: "Sophie Verheecke",
      tag: "HEIST",
      indicator: "Aantal volgers op facebook",
      takenlijst: "",
      auteur: "Sophie",
      actieplan: "ap2",
      actie: "a2"
    },
    {
      id: 1002,
      beleidselement:
        "SE2.2.8  Er wordt een algemene stedenbouwkundige verordening opgemaakt om diverse aangelegenheden inzake ruimtelijke ordening te regelen voor het hele grondgebied",
      looptijd: "2020-2025",
      prioritair: false,
      status: "",
      verantwoordelijke: "Erwin",
      opvolger: "Romain",
      tag: "ANDERE",
      indicator: "Test Indicator",
      takenlijst: "",
      auteur: "Sophie",
      actieplan: "ap3",
      actie: "a3"
    },
    {
      id: 1003,
      beleidselement: "SE2.2.5 Herstelling kunstgras hockeyveld",
      looptijd: "2020-2021",
      prioritair: true,
      status: "",
      verantwoordelijke:
        "Michiel Van Der Donck; Michel Lochten; Margarita Dubkova",
      opvolger: "Jan Peeters",
      tag: "SPORT;HEIST",
      indicator: "Stand van zaken",
      takenlijst: "",
      auteur: "Michiel",
      actieplan: "ap4",
      actie: "a4"
    },
    {
      id: 1004,
      beleidselement: "SE6.2.8 Implementatie nieuwe huisstijl",
      looptijd: "2020-2025",
      prioritair: true,
      status: "",
      verantwoordelijke: "Jan Peeters",
      opvolger: "Sophie Verheecke",
      tag: "HEIST",
      indicator: "Aantal volgers op facebook",
      takenlijst: "",
      auteur: "Sophie",
      actieplan: "ap5",
      actie: "a5"
    },
    {
      id: 1005,
      beleidselement:
        "SE2.2.8  Er wordt een algemene stedenbouwkundige verordening opgemaakt om diverse aangelegenheden inzake ruimtelijke ordening te regelen voor het hele grondgebied",
      looptijd: "2020-2025",
      prioritair: false,
      status: "",
      verantwoordelijke: "Erwin, Michiel Van Der Donck",
      opvolger: "Romain",
      tag: "ANDERE",
      indicator: "Test Indicator",
      takenlijst: "",
      auteur: "Sophie",
      actieplan: "ap5",
      actie: "a5"
    },
    {
      id: 1005,
      beleidselement:
        "SE2.1.1  Inzake ruimtelijke ordening te regelen voor het hele grondgebied",
      looptijd: "2020-2025",
      prioritair: false,
      status: "",
      verantwoordelijke: "Erwin, Michiel Van Der Donck",
      opvolger: "Romain",
      tag: "ANDERE",
      indicator: "Test Indicator",
      takenlijst: "",
      auteur: "Sophie",
      actieplan: "ap5",
      actie: "a6"
    }
  ];

  results = [
    {
      name: "SE2.2.5 Herstelling kunstgras hockeyveld",
      code: "A1"
    },
    {
      name: "SE6.2.8 Implementatie nieuwe huisstijl",
      code: "A2"
    }
  ];

  filteredResults = [];

  constructor() {}

  ngOnInit() {
    this.expandAll();
  }

  expandAll() {
    this.doelstellingboom.forEach(node => {
      this.expandRecursive(node, true);
    });
  }

  private expandRecursive(node: TreeNode, isExpand: boolean) {
    node.expanded = isExpand;
    if (node.children) {
      node.children.forEach(childNode => {
        this.expandRecursive(childNode, isExpand);
      });
    }
  }

  filterResults(event) {
    let filtered: any[] = [];
    let query = event.query;
    for (let i = 0; i < this.results.length; i++) {
      let beleidsIems = this.results[i];
      if (beleidsIems.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(beleidsIems);
      }
    }

    this.filteredResults = filtered;
  }
}
