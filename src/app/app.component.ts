import { Component, OnInit } from "@angular/core";
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
      auteur: "Michiel"
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
      auteur: "Sophie"
    }
  ];

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

  clear(table: Table) {
    table.clear();
  }
}
