import React from 'react';
import imgA from './images/1.jpg';
import imgB from './images/2.jpg';
import imgC from './images/3.jpg';
import imgD from './images/4.jpg';
import imgF from './images/5.jpg';

function Food({name,picture,altText}){
return (
  <div>
    <h2>I like {name}</h2>
    <img src={picture} alt={altText}/>
  </div>
  

);
}

// function renderFood(dish){
//   return (
//   <Food name = {dish.name} picture={dish.images} />
 
//   );
// }

// const renderFood = dish => <Food name = {dish.name} picture={dish.images} />

const foodILink = [
  {
    id:1,
    name:'만두',
    images: imgA,
    altText:'만두를 먹는 모습'
  },
  {
    id:2,
    name:'국수',
    images: imgB,
    altText:'국수를 먹는 모습'
  },
  {
    id:3,
    name:'피자',
    images: imgC,
    altText:'피자를 먹는 모습'
  },
  {
    id:4,
    name:'떡볶이',
    images: imgD,
    altText:'떡볶이를 먹는 모습'
  },
  {
    id:5,
    name:'감자튀김',
    images: imgF,
    altText:'감자튀김을 먹는 모습'
  }
];

function App() {
  return (
  <div>
    {foodILink.map(dish => <Food key={dish.id} name = {dish.name} picture={dish.images} />)}
    </div>
    );
}

export default App;
