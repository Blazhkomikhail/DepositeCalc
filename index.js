console.clear();
 
let inputSum = document.querySelector('.inpSum');
  before.innerHTML = `${inputSum.value}`;
  calculate();
    
    inputSum.addEventListener('input', function (e) {
      calculate(); 
      if (isNaN(e.data)) {
        nanWarning.style.display='inline';
        let arr = inputSum.value.split('');
        arr.forEach(function(item, i) {
          if (isNaN(item)) {
            delete arr[i];
          }
        })
        arr = arr.join('');
        inputSum.value = arr;
        before.innerHTML = `${inputSum.value}`;
        calculate();
        
        setTimeout(function () {
          nanWarning.style.display='none';
        },1500);
      } 
  });
  
  capital.addEventListener ('change', function () {
    calculate();
  })
  
  months.addEventListener('change', calculate);
  
  function calculate () {
    let result = 0;
    let selected = months.options.selectedIndex;
    let termDep = months[selected].value;
    before.innerHTML = `${inputSum.value}`;
    
    if (capital.checked) {
        result = inputSum.value * Math.pow((1 + (0.12/12)),
          (termDep/12)*12);
        result = result.toFixed();
        after.innerHTML = `${result}`;
        visualiseAfter();
    } else {
        result = inputSum.value * (1 + 12/100/12*termDep);
        result = result.toFixed();
        after.innerHTML = `${result}`;
        visualiseAfter();
      }
      
    function visualiseAfter () {
      let heigth = 100 * result / inputSum.value;
     heightAfter.style.height = heigth + 'px';
   }
    
  }