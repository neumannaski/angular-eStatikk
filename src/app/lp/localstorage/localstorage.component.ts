
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class LocalstorageComponent {
  selectedgames: any [] = [{name:"Dota 2", img:"assets\\source\\icons\\dota_2.png", selected:true,  color:"rgb(255,92,92)"}, {name:"League of Legends", img:"assets\\source\\icons\\League_of_Legends.png", selected:true, color:"rgb(92,92,255)"}, {name:"Overwatch 2", img:"assets\\source\\icons\\Overwatch_2_logo.png", selected:false, color:"rgb(92,92,255)"}, {name:"Counter-Strike", img:"assets\\source\\icons\\CSGO Counter Strike New.png", selected:false, color:"rgb(92,92,255)"}, {name:"PUBG", img:"assets\\source\\icons\\pngimg.com - pubg_PNG58.png", selected:false, color:"rgb(92,92,255)"}, {name:"Valorant", img:"assets\\source\\icons\\games-valorant.512x512.png", selected:false, color:"rgb(92,92,255)"}] 
  regions: any [] = [{name:"Europe",img:"assets\\source\\icons\\Europe-PNG.png"},{name:"North America",img:"assets\\source\\icons\\pngfind.com-america-map-png-6398713.png"},{name:"Korea",img:"assets\\source\\icons\\SeekPng.com_korea-png_2123678.png"}]  
  
  getimageofregion(key:string):any{
    for (const region of this.regions) {
      if (key == region.name) {
        return region.img;
      }
    }
  }
  
  
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

  getgamecolor(game_name:string):string{
    for (const game of this.selectedgames) {
      if (game_name == game.name) {
        return game.color;
      }
    }
    return '';
  }

  getimageofgame(gamen: string):string{
    for (const game of this.selectedgames) {
      if (gamen == game.name) {
        return game.img;
      }
    }
    return 'rgb(255,255,255)';
  }

  getteamcolor(teamname:string):string{
    switch(teamname){
      case 'Fnatic':
        return 'orange';
      case 'G2 Esports':
        return 'black';
      case 'Team Heretics':
        return 'yellow';
      case 'Team Vitality':
        return 'lightyellow';
      case 'Team BDS':
        return 'pink';
      case 'Excel Esports':
        return 'white';
      case 'Karmine Corp':
        return 'blue';
      case 'MAD Lions':
        return 'gold';
      case 'Rogue':
        return 'darkblue';
      case 'SK Gaming':
        return 'gray';
      case '100 Thieves':
          return 'red';
      case 'Cloud9':
          return 'lightblue';
      case 'Dignitas':
          return 'yellow';
      case 'FlyQuest':
          return 'green';
      case 'Immortals':
          return 'pink';
      case 'NRG':
          return 'black';
      case 'BRION':
        return 'darlgreen';
      case 'Dplus':
        return 'lightblue';
      case 'DRX':
        return 'darkblue';
      case 'Freecs':
        return 'red';
      case 'Gen.G Esports':
          return 'gold';
      case 'Hanwha Life Esports':
          return 'orange';
      case 'KT Rolster':
          return 'darkred';
      case 'Nongshim RedForce':
          return 'red';
      case 'SANDBOX Gaming':
          return 'yellow';
      case 'T1':
          return 'red';
    }
    return 'rgb(255,92,92)';
  }
}
