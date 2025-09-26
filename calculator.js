
      let calculation = localStorage.getItem('calculation') || '';

    function displayOutput(){
      document.querySelector('.js-display').innerText = calculation;
      localStorage.setItem('calculation', calculation);
    }

    displayOutput();
