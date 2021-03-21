'use strict';

const Seattle = {
  Name : 'Seattle',
  minimum: 23,
  maximum: 65,
  NumOfCost : [] ,
  WorkHour: ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00am','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'],
  avrNumOfCockies : 6.3 ,
  summation : 0,
  getNumOfCost : function(){
    for(let i =0;i<this.WorkHour.length;i++){
      this.NumOfCost.push(Math.floor(getNumOfCookies()*this.avrNumOfCockies));
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
    for (let i = 0; i< this.WorkHour.length;i++){
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${this.WorkHour[i]} : ${this.NumOfCost[i]}`;
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total : ${this.summation}`;
  }
};

function getNumOfCookies (){
  return Math.floor(Math.random()*(Seattle.maximum-Seattle.minimum+1)+Seattle.minimum);
}
Seattle.getNumOfCost();
Seattle.render();

const Tokyo = {
  Name : 'Tokyo',
  minimum: 3,
  maximum: 24,
  summation : 0,
  NumOfCost : [] ,
  WorkHour: ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00am','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'],
  avrNumOfCockies : 1.2 ,
  getNumOfCost : function(){
    for(let i =0;i<this.WorkHour.length;i++){
      this.NumOfCost.push(Math.floor(getNumOfCookies1()*this.avrNumOfCockies));
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
    for (let i = 0; i< this.WorkHour.length;i++){
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${this.WorkHour[i]} : ${this.NumOfCost[i]}`;
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total : ${this.summation}`;
  }
};


function getNumOfCookies1(){
  return Math.floor(Math.random()*(Tokyo.maximum-Tokyo.minimum+1)+Tokyo.minimum);
}
Tokyo.getNumOfCost();
Tokyo.render();

const Dubai = {
  Name : 'Dubai',
  minimum: 11,
  maximum: 38,
  summation : 0,
  NumOfCost : [] ,
  WorkHour: ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00am','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'],
  avrNumOfCockies : 3.7 ,
  getNumOfCost : function(){
    for(let i =0;i<this.WorkHour.length;i++){
      this.NumOfCost.push(Math.floor(getNumOfCookies2()*this.avrNumOfCockies));
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
    for (let i = 0; i< this.WorkHour.length;i++){
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${this.WorkHour[i]} : ${this.NumOfCost[i]}`;
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total : ${this.summation}`;
  }
};


function getNumOfCookies2(){
  return Math.floor(Math.random()*(Dubai.maximum-Dubai.minimum+1)+Dubai.minimum);
}
Dubai.getNumOfCost();
Dubai.render();

const Paris = {
  Name : 'Paris',
  minimum: 11,
  maximum: 38,
  summation : 0,
  NumOfCost : [] ,
  WorkHour: ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00am','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'],
  avrNumOfCockies : 3.7 ,
  getNumOfCost : function(){
    for(let i =0;i<this.WorkHour.length;i++){
      this.NumOfCost.push(Math.floor(getNumOfCookies3()*this.avrNumOfCockies));
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
    for (let i = 0; i< this.WorkHour.length;i++){
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${this.WorkHour[i]} : ${this.NumOfCost[i]}`;
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total : ${this.summation}`;
  }
};


function getNumOfCookies3(){
  return Math.floor(Math.random()*(Paris.maximum-Paris.minimum+1)+Paris.minimum);
}
Paris.getNumOfCost();
Paris.render();

const Lima = {
  Name : 'Lima',
  minimum: 2,
  maximum: 16,
  summation : 0,
  NumOfCost : [] ,
  WorkHour: ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00am','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'],
  avrNumOfCockies : 4.6 ,
  getNumOfCost : function(){
    for(let i =0;i<this.WorkHour.length;i++){
      this.NumOfCost.push(Math.floor(getNumOfCookies4()*this.avrNumOfCockies));
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
    for (let i = 0; i< this.WorkHour.length;i++){
      const liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = `${this.WorkHour[i]} : ${this.NumOfCost[i]}`;
    }
    const liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent = `Total : ${this.summation}`;
  }
};


function getNumOfCookies4(){
  return Math.floor(Math.random()*(Lima.maximum-Lima.minimum+1)+Lima.minimum);
}
Lima.getNumOfCost();
Lima.render();
