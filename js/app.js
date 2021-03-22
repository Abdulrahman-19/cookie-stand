'use strict';

let WorkHour = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00am','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
let tableEl= document.createElement('table');
let totalArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
function Place(Name,minimum,maximum,avrNumOfCockies){
  this.Name = Name;
  this.minimum = minimum;
  this.maximum = maximum;
  this.avrNumOfCockies = avrNumOfCockies;
  this.NumOfCost=[];
  this.summation = 0;

}
function getNumOfCookies (min,max){
  let l= Math.round(Math.random() * (max - min)) + min;
  return l;
}

Place.prototype.getNumOfCost =function(){
  for(let i =0;i<WorkHour.length;i++){
    this.NumOfCost.push(Math.floor(getNumOfCookies(this.minimum,this.maximum)*this.avrNumOfCockies));
    this.summation += this.NumOfCost[i];
  }
};

Place.prototype.render = function(){
  let trEl = '';
  trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  let tdEl = document.createElement('td');
  trEl.appendChild(tdEl);
  for (let i = 0; i<= WorkHour.length;i++){
    tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    // trEl.appendChild('tdEl');
    tdEl.textContent = `${this.NumOfCost[i]}`;
  }

  tdEl.textContent = this.summation;




  // const headerRowEl = document.createElement('tr');
  // tableEl.appendChild(headerRowEl);
  // for (let i = 0; i< WorkHour.length;i++){
  //   const headerRowEl = document.createElement('tr');
  //   tableEl.appendChild(headerRowEl);
  //   const thEl = document.createElement('th');
  //   headerRowEl.appendChild(thEl);
  //   thEl.textContent = `${WorkHour[i]}`;
  // }
  // for (let i = 0; i< WorkHour.length;i++){
  //   const tdEl = document.createElement('td');
  //   tableEl.appendChild(tdEl);
  //   tdEl.textContent = `${this.NumOfCost[i]}`;
  // }
 
};
let tableHeader = function () {
  let divEl = document.getElementById('sales');
  // tableEl.className = 'table';
  divEl.append(tableEl);
  let tableRow = document.createElement('tr');
  tableEl.appendChild(tableRow);
  let tableHead = document.createElement('th');
  tableRow.appendChild(tableHead);
  for (let i = 0; i <= WorkHour.length; i++) {
    tableHead = document.createElement('th');
    tableRow.appendChild(tableHead);
    tableHead.textContent = WorkHour[i];
  }
  tableHead.textContent = 'Daily Location Total';
  tableRow.appendChild(tableHead);
};


let tableFooter = function () {
  let divEl = document.getElementById('sales');
  tableEl.setAttribute('id','table');
  divEl.append(tableEl);
  let tableRow = document.createElement('tr');
  tableEl.appendChild(tableRow);
  tableRow.setAttribute('id','total');
  let tableHead = document.createElement('th');
  tableRow.appendChild(tableHead);
  tableHead.textContent = 'Totals';
  let dailyLocationTotal = 0;
  for (let i = 0; i <= totalArray.length; i++) {
    tableHead = document.createElement('th');
    tableRow.appendChild(tableHead);
    tableHead.textContent = totalArray[i];
    if (i < totalArray.length) {
      dailyLocationTotal += totalArray[i];

    }
  }
  tableHead.textContent = dailyLocationTotal;
  tableRow.appendChild(tableHead);

};
tableHeader();

const seattle = new Place('Seattle',23,65,6.3);
seattle.getNumOfCost();
seattle.render();
const tokyo = new Place('Tokyo',3,24,1.2);
tokyo.getNumOfCost();
tokyo.render();
const dubai = new Place('Dubai',11,38,3.7);
dubai.getNumOfCost();
dubai.render();
const paris = new Place('Paris',20,38,2.3);
paris.getNumOfCost();
paris.render();
const lima = new Place('Lima',2,16,4.6);
lima.getNumOfCost();
lima.render();

tableFooter();
