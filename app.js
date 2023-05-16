const inputCPF = document.querySelector('.input-cpf');
const cpfContainer = document.querySelector('.cpf');
const buttonValidate = document.getElementById('validate-button');
// --------------------------------------------------

const userCPF = () => inputCPF.value;

/*
  dígito: 0 * 10
  dígito: 1 * 9
  dígito: 2 * 8
  dígito: 3 * 7
  dígito: 4 * 6
  dígito: 5 * 5
  dígito: 6 * 4
  dígito: 7 * 3
  dígito: 8 * 2

  for (let j = 10; j >= 2; j--) {
    console.log(`Digito: ${ArrCPF[i]} * ${j}`);
  }
*/

const validateCPF = () => {
  let ArrCPF = userCPF().split('');
  let validator = 10;
  let numbersToValidate = [];
  let totalNumbersValidate;
  let verifyingDigit;

  for (let i = 0; i < 9; i++) {
    numbersToValidate.push(ArrCPF[i] * validator);
    validator--;
  };
  numbersToValidate.map(item => totalNumbersValidate += item);
  let restValidate = totalNumbersValidate % 11;

  // if(restValidate === 0 || 1) verifyingDigit = 0;
  // else verifyingDigit = Number(11 - restValidate);
  
  console.log(`${userCPF()[9]} | ${restValidate} | ${verifyingDigit}`);
};

const handleClick = () => {
  validateCPF();
};
buttonValidate.addEventListener('click', handleClick);
