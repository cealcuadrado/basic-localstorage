import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {

  public foo: string = '';

  constructor() { }

  ngOnInit(): void {
    this.foo = localStorage.getItem('foo');
  }

}
