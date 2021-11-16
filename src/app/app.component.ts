import { Component } from '@angular/core';
import { Product} from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg=10;
  name = 'Deivith';
  age= 60;
  img = 'https://wallpaper.sc/iphone6plus/wp-content/uploads/2018/08/iphone6plus-1398x2592-wallpaper_00827.jpg';
  img2 = 'https://cdn.topgear.es/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2020/08/primer-tesla-roadster-2020711.jpg?itok=ItH_Feti'
  btnDisabled=true;
  register={
    name: '',
    email: '',
    password: '',
  }
  person ={
    name:'Deivith',
    age:1,
    avatar:'https://source.unsplash.com/random'
  }
   names: string[]= ['Deivith','Yami','Vale'];
   newName = '';

   products : Product[] = [
    {
      name: 'Audi',
      price: 500000,
      image: './assets/images/Audi.jpg',
      category: 'Autos deportivos',
    },
    {
      name: 'BMW M440I',
      price: 10000000,
      image: './assets/images/BMW .jpg',
    },
    {
      name: 'BMW X6',
      price: 34000000,
      image: './assets/images/BMW X6.jpg',
    },
    {
      name: 'MERCEDES',
      price: 23000000,
      image: './assets/images/Mercedes.jpg',
    },
    {
      name: 'Tesla Model 3',
      price: 34000000,
      image: './assets/images/Tesla Model 3.jpg',
    },
    {
      name: 'Tesla Model X',
      price: 34340000000,
      image: './assets/images/Tesla Model X.jpg',
    },

    {
      name: 'Toyota',
      price: 34340000000,
      image: './assets/images/Toyota.jpg',
      category: 'Camioneta',
    }
  ]

   box={
      width: 100,
      height: 100,
      background :'red'
   };



  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
  this.person.age +=1;
  }

  onScroll(event: Event){
    const element =event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event :Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }
  deleteName(index: number){
    this.names.splice(index ,1 )
  }
}




