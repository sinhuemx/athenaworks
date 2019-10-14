import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  nombre: string = 'Carlos Sinhue';
  apellido: string = 'García Hernández';

  constructor() {}

  ngOnInit() {
    
  }
  
}

