import { Component, ViewChild, AfterContentInit, AfterViewInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';

export interface Item {
  nombre: string;
  costo: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  listaItems = [
    { nombre: 'Platos', costo: '10' },
    { nombre: 'Vasos', costo: '20' },
    { nombre: 'Cubiertos', costo: '30' },
    { nombre: 'Cervezas', costo: '40' },
    { nombre: 'Gaseosas', costo: '50' },
    { nombre: 'Galletas', costo: '60' },
  ];
  mostrarLista: boolean;

  constructor() {
    this.mostrarLista = false;
  }


  columnas: string[] = ['nombre', 'costo'];
  dataSource = new MatTableDataSource<Item>(this.listaItems);

  @ViewChild(MatTableDataSource) table!: MatTableDataSource<Item>;

  ngAfterViewInit() {
    this.dataSource.data = this.listaItems;
  }
}