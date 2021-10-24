import { ingridient } from './../shared/ingridient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoppinng-list',
  templateUrl: './shoppinng-list.component.html',
  styleUrls: ['./shoppinng-list.component.scss'],
})
export class ShoppinngListComponent implements OnInit {
  ingridients: ingridient[] = [
    new ingridient('apple', 5),
    new ingridient('tomatoes', 15),
  ];
  constructor() { }

  ngOnInit(): void { }
}
