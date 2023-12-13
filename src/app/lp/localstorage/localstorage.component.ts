
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class LocalstorageComponent {
  selectedgames: any [] = [{name:"Dota 2", img:"assets\\source\\icons\\dota_2.png", selected:true}, {name:"League of Legends", img:"assets\\source\\icons\\League_of_Legends.png", selected:true}, {name:"Overwatch 2", img:"assets\\source\\icons\\Overwatch_2_logo.png", selected:false}, {name:"Counter Strike 2", img:"assets\\source\\icons\\CSGO Counter Strike New.png", selected:false}, {name:"PUBG", img:"assets\\source\\icons\\pngimg.com - pubg_PNG58.png", selected:false}, {name:"Valorant", img:"assets\\source\\icons\\games-valorant.512x512.png", selected:false}] 
    
  getItem(key: string): any {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
  getGames():any[]{
    return this.selectedgames;
  }

  setGames (value: any): void {
    this.selectedgames = value;
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
}
