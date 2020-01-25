import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  mostrar = true;

  card: any = {
    title: 'Card title',
    subtitle: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
  };

  items: string[] = ['Cras justo odio', 'Dapibus ac facilisis in', 'Morbi leo risus'];

  constructor() { }

  ngOnInit() {
  }

}
