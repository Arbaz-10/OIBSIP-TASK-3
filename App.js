let celcius = document.getElementById('celcius');
let fahrenheit = document.getElementById('fahrenheit');
let kelvin = document.getElementById('kelvin');

celcius.addEventListener('input',function(){
    let c = this.value;
    let f = (c * 9/5) + 32;
    let k = Number(c) + 273.15 ;
    if(!Number.isInteger(f , k)){
      f = f.toFixed(1);
      k = Number(k).toFixed(2);
    }
    fahrenheit.value = f;
    kelvin.value = k;
});

fahrenheit.addEventListener('input',function(){
  let f = this.value;
  let c = (f - 32) * 5/9;
  let k = (f - 32) * 5/9 + 273.15 ;
  if(!Number.isInteger(c,k)){
    c = c.toFixed(4);
    k = k.toFixed(4);
  }
  celcius.value = c;
  kelvin.value = k;
});

kelvin.addEventListener('input',function(){
  let k = this.value;
  let c = k - 273.15 ;
  let f = (k - 273.15) * 9/5 + 32;
  if(!Number.isInteger(c,f)){
    c = c.toFixed(2);
    f = f.toFixed(2);
  }
  celcius.value = c;
  fahrenheit.value = f;
});