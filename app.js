// https://www.omnicalculator.com/conversion/katha-to-square-feet-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const squareFeetRadio = document.getElementById('squareFeetRadio');
const kathaRadio = document.getElementById('kathaRadio');

let squareFeet;
let katha = v; 

// labels of the inpust
const variable = document.getElementById('variable');

squareFeetRadio.addEventListener('click', function() {
  variable.textContent = 'Katha';
  katha = v;
  result.textContent = '';
});

kathaRadio.addEventListener('click', function() {
  variable.textContent = 'SquareFeet';
  squareFeet = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(squareFeetRadio.checked)
    result.textContent = `SquareFeet = ${computesquareFeet().toFixed(5)}`;

  else if(kathaRadio.checked)
    result.textContent = `Katha = ${computekatha().toFixed(5)}`;
})

// calculation

function computesquareFeet() {
  return Number(katha.value) * 3645;
}

function computekatha() {
  return Number(squareFeet.value) / 3645;
}