import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  public condition: boolean = false;
  public msg: string = 'Hi, pipes';

  constructor() { }

  ngOnInit(): void {
  }

}
