import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display1',
  template: '<h1>This is Display1 Component with h1 Tag</h1> <h2>This is h2 Tag</h2>',
  styles: ['h1 {color:red}']
})
export class Display1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
