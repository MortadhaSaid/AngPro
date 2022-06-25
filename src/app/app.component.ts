import { List } from './List';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  ngOnInit(): void {
  

  }
  title = 'PR1';
}
export let ST:boolean = false;
export let L1=new List;
