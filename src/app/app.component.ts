import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  data:string[] = [];
  ret = '';
  beef = false;
  sau = false;
  chick = false;
  lettuce = false;
  onion = false;
  tomato = false;
  chess = false;
  bun = false;
  saubun = false;

  addData(msg:string){
    this.data.push(msg);
  }
  getData()
  {
    return this.data;
  }
  deleteMsg(msg:string)
  {
    this.data.splice(this.data.indexOf(msg), 1);
  }

  reset() {
    this.data = [];
    this.beef = false;
    this.sau = false;
    this.chick = false;
    this.lettuce = false;
    this.onion = false;
    this.tomato = false;
    this.chess = false;
    this.bun = false;
    this.saubun = false;
    this.ret = '';
  }

  submit(){
    for(let d of this.data){
      if(d == 'Beef'){
        this.beef = true;
      }else if(d == 'Chick'){
        this.chick = true;
      }else if(d == 'Sausage'){
        this.sau = true;
      }else if(d == 'Lettuce'){
        this.lettuce = true;
      }else if(d == 'Onion'){
        this.onion = true;
      }else if(d == 'Tomato'){
        this.tomato = true;
      }else if(d == 'Chess'){
        this.chess = true;
      }else if(d == 'Burger Bun'){
        this.bun = true;
      }else if(d == 'Sausage Bun'){
        this.saubun = true;
      }
    }

    if(this.beef && this.lettuce && this.bun && this.tomato && !this.saubun && !this.chick && !this.sau){
      this.ret = 'burger with lettuce and tomato';
    }else if(this.sau && this. saubun && !this.beef && !this.lettuce && !this.onion){
      this.ret = 'hotdog'
    }else if(this.chess && this. bun && this.beef && !this.chick){
      this.ret = 'chessburger'
    }else if(this.beef && this.bun && this.lettuce && !this.chick){
      this.ret = 'burger with lettuce';
    }else{
      this.ret = 'not a match';
    }
  }
}
