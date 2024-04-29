document.addEventListener('DOMContentLoaded', function() {
  const display = document.querySelector('.display');
  const numbers = document.querySelectorAll(".number");
  const addbutton = document.querySelector(".add");
  const subtractbutton = document.querySelector(".subtract");
  const multiplybutton = document.querySelector(".multiply");
  const dividebutton = document.querySelector(".divide");
  const equalbutton = document.querySelector(".equal");
  const clearbutton = document.querySelector(".clear");

  let number1 = '';
  let number2 = '';
  let operation = '';

  numbers.forEach(number => {
      number.addEventListener("click", (event) => {
          const clickedNumber = event.target.innerText;
          if (!operation) {
              number1 += clickedNumber;
              display.textContent = number1;
          } else {
              number2 += clickedNumber;
              display.textContent = number2;
          }
      });
  });

  equalbutton.addEventListener("click", (event) => {
      determineResults();
  });

  addbutton.addEventListener("click", (event) => {
      operation = '+';
  });

  subtractbutton.addEventListener("click", (event) => {
      operation = '-';
  });

  multiplybutton.addEventListener("click", (event) => {
      operation = '*';
  });

  dividebutton.addEventListener("click", (event) => {
      operation = '/';
  });

  clearbutton.addEventListener("click", (event) => {
      clearAll();
      display.textContent = ''; // Clear the display
  });

  function determineResults() {
      let result = 0;
      const num1 = parseFloat(number1);
      const num2 = parseFloat(number2);
      switch (operation) {
          case '+':
              result = num1 + num2;
              break;
          case '-':
              result = num1 - num2;
              break;
          case '*':
              result = num1 * num2;
              break;
          case '/':
              if (num2 !== 0) {
                  result = num1 / num2;
              } else {
                  result = 'Error: Division by zero';
              }
              break;
          default:
              result = 'Error: Invalid operation';
      }
      display.textContent = result;
      clearAll();
  }

  function clearAll() {
      number1 = '';
      number2 = '';
      operation = '';
  }
});
