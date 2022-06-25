import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import {L1} from '../app.component';
import { List } from '../List';


let L2=new List<number>;
let L3=new List<string>;
let L4=new List;
let ST:boolean=false;

function Add1(x:number,ST:boolean): void {
if(L2.size()>0)
  {
    if (ST==false)
    {
        let sz:number=L2.size()-1;
        let n:number=L2.get(sz);
        n=(n*10)+x;
        reducev2(L2);
        L2.add(n);
    }
  else
    {
        L2.add(x);
        ST=false;
    } 
  }
else
  {
  L2.add(x);
  }
}

function Add2(s:string,ST:boolean):void{
  L3.add(s);
  ST=true;
}
function Add3(){

}
function reduce(L:List<string>):void{
L.remove();
}
function reducev2(L:List<number>):void{
  L.remove();
  }

// Func
//Func



@Component({
  selector: 'app-tf1',
  templateUrl: './tf1.component.html',
  styleUrls: ['./tf1.component.css']
})
export class TF1Component implements OnInit {
  D:unknown;
  TY:unknown;
  constructor() { }
  CB(F:number){
    Add1(F,ST);
    this.D=L2.get(L2.size()-1);
  }
  NP(x:number)
  {
    L2.add(x);
    this.TY=L2.get(L2.size()-1);
  }
  ADOP(S:string)
  {
    Add2(S,ST);
    this.TY=L3.get(L3.size()-1);
  }
  ngOnInit(): void {
  }

}
