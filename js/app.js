'use strict';

let WorkHour = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00am','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
const Seattle = {
  Name : 'Seattle',
  minimum: 23,
  maximum: 65,
  NumOfCost : [] ,
  avrNumOfCockies : 6.3 ,
  summation : 0,
  getNumOfCost : function(){
    for(let i =0;i<WorkHour.length;i++){
      this.NumOfCost.push(Math.floor(getNumOfCookies(this.minimum,this.maximum)*this.avrNumOfCockies));
      this.summation += this.NumOfCost[i];
    }
  },
  render: function(){
    const countainer = document.getElementById('sales');
    const crEl = document.createElement('article');
    countainer.appendChild(crEl);
    const h2El = document.createElement('h2');
    crEl.appendChild(h2El);
    h2El.textContent = this.Name;
    const ulEl = document.createElement('ul');
    countainer.appendChild(ulEl);
    for (let i = 0; i< WorkHour.length;i++){
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${WorkHour[i]} : ${this.NumOfCost[i]} cookies`;
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total : ${this.summation}`;
  }
};

function getNumOfCookies (min,max){
  let l= Math.round(Math.random() * (max - min)) + min;
  return l;
}
Seattle.getNumOfCost();
Seattle.render();

const tokyo = {
  Name : 'Tokyo',
  minimum: 3,
  maximum: 24,
  NumOfCost : [] ,
  avrNumOfCockies : 1.2 ,
  summation : 0,
  getNumOfCost : function(){
    for(let i =0;i<WorkHour.length;i++){
      this.NumOfCost.push(Math.floor(getNumOfCookies(this.minimum,this.maximum)*this.avrNumOfCockies));
      this.summation += this.NumOfCost[i];
    }
  },
  render: function(){
    const countainer = document.getElementById('sales');
    const crEl = document.createElement('article');
    countainer.appendChild(crEl);
    const h2El = document.createElement('h2');
    crEl.appendChild(h2El);
    h2El.textContent = this.Name;
    const ulEl = document.createElement('ul');
    countainer.appendChild(ulEl);
    for (let i = 0; i< WorkHour.length;i++){
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${WorkHour[i]} : ${this.NumOfCost[i]} cookies`;
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total : ${this.summation}`;
  }
};

tokyo.getNumOfCost();
tokyo.render();

const dubai= {
  Name : 'Dubai',
  minimum: 11,
  maximum: 38,
  NumOfCost : [] ,
  avrNumOfCockies : 3.7 ,
  summation : 0,
  getNumOfCost : function(){
    for(let i =0;i<WorkHour.length;i++){
      this.NumOfCost.push(Math.floor(getNumOfCookies(this.minimum,this.maximum)*this.avrNumOfCockies));
      this.summation += this.NumOfCost[i];
    }
  },
  render: function(){
    const countainer = document.getElementById('sales');
    const crEl = document.createElement('article');
    countainer.appendChild(crEl);
    const h2El = document.createElement('h2');
    crEl.appendChild(h2El);
    h2El.textContent = this.Name;
    const ulEl = document.createElement('ul');
    countainer.appendChild(ulEl);
    for (let i = 0; i< WorkHour.length;i++){
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${WorkHour[i]} : ${this.NumOfCost[i]} cookies`;
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total : ${this.summation}`;
  }
};

dubai.getNumOfCost();
dubai.render();

const paris = {
  Name : 'Paris',
  minimum: 20,
  maximum: 38,
  NumOfCost : [] ,
  avrNumOfCockies : 2.3 ,
  summation : 0,
  getNumOfCost : function(){
    for(let i =0;i<WorkHour.length;i++){
      this.NumOfCost.push(Math.floor(getNumOfCookies(this.minimum,this.maximum)*this.avrNumOfCockies));
      this.summation += this.NumOfCost[i];
    }
  },
  render: function(){
    const countainer = document.getElementById('sales');
    const crEl = document.createElement('article');
    countainer.appendChild(crEl);
    const h2El = document.createElement('h2');
    crEl.appendChild(h2El);
    h2El.textContent = this.Name;
    const ulEl = document.createElement('ul');
    countainer.appendChild(ulEl);
    for (let i = 0; i< WorkHour.length;i++){
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${WorkHour[i]} : ${this.NumOfCost[i]} cookies`;
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total : ${this.summation}`;
  }
};

paris.getNumOfCost();
paris.render();

const lima = {
  Name : 'Lima',
  minimum: 2,
  maximum: 16,
  NumOfCost : [] ,
  avrNumOfCockies : 4.6 ,
  summation : 0,
  getNumOfCost : function(){
    for(let i =0;i<WorkHour.length;i++){
      this.NumOfCost.push(Math.floor(getNumOfCookies(this.minimum,this.maximum)*this.avrNumOfCockies));
      this.summation += this.NumOfCost[i];
    }
  },
  render: function(){
    const countainer = document.getElementById('sales');
    const crEl = document.createElement('article');
    countainer.appendChild(crEl);
    const h2El = document.createElement('h2');
    crEl.appendChild(h2El);
    h2El.textContent = this.Name;
    const ulEl = document.createElement('ul');
    countainer.appendChild(ulEl);
    for (let i = 0; i< WorkHour.length;i++){
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${WorkHour[i]} : ${this.NumOfCost[i]} cookies`;
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total : ${this.summation}`;
  }
};

lima.getNumOfCost();
lima.render();
