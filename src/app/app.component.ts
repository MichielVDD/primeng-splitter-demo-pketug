import { Component } from "@angular/core";
import { TreeNode } from "primeng/api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  files2: TreeNode[] = <TreeNode[]>[
    {
      label: "SD: Vrijetijdsbesteding",
      data: "Documents Folder",
      expandedIcon: "pi pi-folder-open",
      collapsedIcon: "pi pi-folder",
      children: [
        {
          label: "BD: Een optimaal gebruik van de beschikbare infrastructuur",
          data: "Work Folder",
          expandedIcon: "pi pi-folder-open",
          collapsedIcon: "pi pi-folder",
          children: [
            {
              label: "AP: Efficiënt Gebruik van sportcentra etc....",
              icon: "pi pi-file",
              data: "Expenses Document",
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
      beleidselement: "SE2.2.5 Herstelling kunstgras hockeyveld",
      looptijd: "2020-2021",
      prioritair: true,
      status: "",
      verantwoordelijke:
        "Michiel Van Der Donck; Michel Lochten; Margarita Dubkova",
      opvolger: "Jan Peeters",
      tag: "SPORT;HEIST",
      indicator: "Stand van zaken",
      takenlijst: ""
    },
    {
      beleidselement: "SA6.2.8 Implementatie nieuwe huisstijl",
      looptijd: "2020-2021",
      prioritair: true,
      status: "",
      verantwoordelijke:
        "Michiel Van Der Donck; Michel Lochten; Margarita Dubkova",
      opvolger: "Jan Peeters",
      tag: "COMMUNICATIE",
      indicator: "Geen indicator",
      takenlijst: ""
    },
    {
      beleidselement: "SE2.2.5 Herstelling kunstgras hockeyveld",
      looptijd: "2020-2021",
      prioritair: true,
      status: "",
      verantwoordelijke:
        "Michiel Van Der Donck; Michel Lochten; Margarita Dubkova",
      opvolger: "Jan Peeters",
      tag: "SPORT;HEIST",
      indicator: "Stand van zaken",
      takenlijst: ""
    },
    {
      beleidselement: "SA6.2.8 Implementatie nieuwe huisstijl",
      looptijd: "2020-2021",
      prioritair: true,
      status: "",
      verantwoordelijke:
        "Michiel Van Der Donck; Michel Lochten; Margarita Dubkova",
      opvolger: "Jan Peeters",
      tag: "COMMUNICATIE",
      indicator: "Geen indicator",
      takenlijst: ""
    },
    {
      beleidselement: "SE2.2.5 Herstelling kunstgras hockeyveld",
      looptijd: "2020-2021",
      prioritair: true,
      status: "",
      verantwoordelijke:
        "Michiel Van Der Donck; Michel Lochten; Margarita Dubkova",
      opvolger: "Jan Peeters",
      tag: "SPORT;HEIST",
      indicator: "Stand van zaken",
      takenlijst: ""
    },
    {
      beleidselement: "SA6.2.8 Implementatie nieuwe huisstijl",
      looptijd: "2020-2021",
      prioritair: true,
      status: "",
      verantwoordelijke:
        "Michiel Van Der Donck; Michel Lochten; Margarita Dubkova",
      opvolger: "Jan Peeters",
      tag: "COMMUNICATIE",
      indicator: "Geen indicator",
      takenlijst: ""
    },
    {
      beleidselement: "SE2.2.5 Herstelling kunstgras hockeyveld",
      looptijd: "2020-2021",
      prioritair: true,
      status: "",
      verantwoordelijke:
        "Michiel Van Der Donck; Michel Lochten; Margarita Dubkova",
      opvolger: "Jan Peeters",
      tag: "SPORT;HEIST",
      indicator: "Stand van zaken",
      takenlijst: ""
    },
    {
      beleidselement: "SA6.2.8 Implementatie nieuwe huisstijl",
      looptijd: "2020-2021",
      prioritair: true,
      status: "",
      verantwoordelijke:
        "Michiel Van Der Donck; Michel Lochten; Margarita Dubkova",
      opvolger: "Jan Peeters",
      tag: "COMMUNICATIE",
      indicator: "Geen indicator",
      takenlijst: ""
    }
  ];
}
