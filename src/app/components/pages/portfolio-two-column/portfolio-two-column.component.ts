import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-two-column',
  templateUrl: './portfolio-two-column.component.html',
  styleUrls: ['./portfolio-two-column.component.scss']
})
export class PortfolioTwoColumnComponent implements OnInit {
  value: number = 50; // Valeur initiale du slider

  disabled = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  

  constructor() { }

  ngOnInit(): void {
  }


  updateLabel() {
    // Mettre à jour le contenu du label avec la valeur actuelle du slider
    // Vous pouvez ajouter des traitements supplémentaires si nécessaire
    }
}
