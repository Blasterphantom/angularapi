import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  constructor() { }

  async ngOnInit(): Promise<void> {
    try {
      const digimonData = await this.GetDigimonData();
      console.log(digimonData);
    } catch (error) {
      console.error('Error fetching yugioh data:', error);
    }
  }

  async GetDigimonData(){
    let res = await fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Tornado%20Dragon`);
    let data = await res.json();
    let digiData = data;
    console.log(digiData);
    return data;
  }
  
}
