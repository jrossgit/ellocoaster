import { Component, OnInit } from '@angular/core';
import { ballot } from '../ballot2018';

interface RollerCoaster {
  continent: string,
  state: string,
  park: string,
  name: string
}


@Component({
  selector: 'app-ec-selector',
  templateUrl: './ec-selector.component.html',
  styleUrls: ['./ec-selector.component.css']
})
export class EcSelectorComponent implements OnInit {

  allCoasters: RollerCoaster[];
  selectedCoasters: RollerCoaster[];
  menus;

  constructor() { }

  ngOnInit() {
    this.allCoasters = ballot;
    this.selectedCoasters = [];
    this.menus = [
      {name: 'continent', selection: null, availableCoasters: this.allCoasters},
      {name: 'state', selection: null, availableCoasters: []},
      {name: 'park', selection: null, availableCoasters: []},
      {name: 'name', selection: null, availableCoasters: []}
    ];
  }

}

const findDistinctValues = function(coasters: RollerCoaster[], key: string) {
 return coasters.reduce((distinctValues, coaster) =>
   distinctValues.indexOf(coaster[key]) === -1 && coaster[key] ?
      distinctValues.concat(coaster[key]) :
      distinctValues,
   []
 );
};
