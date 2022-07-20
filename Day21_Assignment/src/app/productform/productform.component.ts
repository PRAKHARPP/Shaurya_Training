import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent implements OnInit {
@Output() EventProductUpdate = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(frmProduct:any)
  {
    this.EventProductUpdate.emit(frmProduct.value);
  }

}
