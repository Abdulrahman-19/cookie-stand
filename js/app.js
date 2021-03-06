'use strict';

let WorkHour = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00am','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm'];
let tableEl= document.createElement('table');
let totalArray = [];
let footerArray =[];
let totalOfTotal=0;
let Places = [];
function Place(Name,minimum,maximum,avrNumOfCockies){
  this.Name = Name;
  this.minimum = minimum;
  this.maximum = maximum;
  this.avrNumOfCockies = avrNumOfCockies;
  this.NumOfCost=[];
  this.summation = 0;
  totalArray.push(this);
  Places.push(this);

}
function getNumOfCookies (min,max){
  let l= Math.round(Math.random() * (max - min)) + min;
  return l;
}

Place.prototype.getNumOfCost =function(){
  for(let i =0;i<WorkHour.length;i++){
    let numOfCookiesPerHour = Math.floor(getNumOfCookies(this.minimum,this.maximum)*this.avrNumOfCockies);
    this.NumOfCost.push(numOfCookiesPerHour);
    this.summation += this.NumOfCost[i];
  }
};
Place.prototype.render = function(){
  let trEl = '';
  trEl = document.createElement('tr');
  tableEl.appendChild(trEl);
  let tdEl = document.createElement('td');
  trEl.appendChild(tdEl);
  tdEl.textContent = this.Name;
  for (let i = 0; i<= WorkHour.length;i++){
    tdEl = document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent = `${this.NumOfCost[i]}`;
  }

  tdEl.textContent = this.summation;


};
let tableHeader = function () {
  let divEl = document.getElementById('sales');
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
  for (let i = 0; i < WorkHour.length; i++) {
    let dailyLocationTotal = 0;
    for (let j=0; j<totalArray.length;j++ ){
      dailyLocationTotal+= totalArray[j].NumOfCost[i];
    }
    footerArray.push(dailyLocationTotal);
    tableHead = document.createElement('th');
    tableRow.appendChild(tableHead);
    tableHead.textContent = dailyLocationTotal;
  }
  // footerArray.pop();
  // let th3El = document.createElement('th');
  // tableRow.appendChild(th3El);
  // th3El.textContent = totalOfTotal;
  for(let i=0;i<footerArray.length;i++){
    totalOfTotal+=footerArray[i];
  }
  console.log(totalOfTotal);
  let thEl = document.createElement('th');
  tableRow.appendChild(thEl);
  thEl.textContent = totalOfTotal;

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



let myForm = document.getElementById('placeForm');
// let placeSection = document.getElementById('sales');

myForm.addEventListener('submit',addNewPlace);
function addNewPlace(event){
  event.preventDefault();
  let place = event.target.name.value;
  let maxNum = event.target.maximum.value;
  let minNum = event.target.minimum.value;
  let AvrNumPerCust = Number(event.target.avrnumofcustomer.value);
  let newPlace = new Place(place,minNum,maxNum,AvrNumPerCust);
  newPlace.getNumOfCost();
  newPlace.render();
  let table= document.getElementById('table');
  let tableTotal  =document.getElementById('total');
  table.removeChild(tableTotal);
  tableFooter();
}
tableFooter();
