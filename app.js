const inputCPF = document.querySelector('.input-cpf');
const cpfContainer = document.querySelector('.cpf');
const buttonValidate = document.getElementById('validate-button');
// --------------------------------------------------

const userCPF = () => inputCPF.value;

const validateCPF = (cpf) => {
  let ArrCPF = cpf.split('');
  let validator = 10;
  let validator2 = 11;
  let numbersToValidate = [];
  let numbersToValidate2 = [];
  let totalNumbersValidate = 0;
  let totalNumbersValidate2 = 0;
  let verifyingDigit = 0;
  let verifyingDigit2 = 0;
  
  // first validate
  for (let i = 0; i < 9; i++) {
    numbersToValidate.push((ArrCPF[i] * validator));
    validator--;
  };
  numbersToValidate.map(item => totalNumbersValidate += item);
  let restValidate = totalNumbersValidate % 11;

  if(restValidate === 0 || restValidate === 1) verifyingDigit = 0;
  else verifyingDigit = 11 - restValidate;

  if(verifyingDigit != cpf[9]) {
    console.log('Primeira verificação')
    return false;
  }
  
  // second validate
  for (let i = 0; i < 11; i++) {
    numbersToValidate2.push((ArrCPF[i] * validator2));
    validator2--;
  };
  numbersToValidate2.map(item => totalNumbersValidate2 += item);
  let restValidate2 = totalNumbersValidate2 % 11;

  if(restValidate2 === 0 || restValidate2 === 1) verifyingDigit2 = 0;
  else verifyingDigit2 = 11 - restValidate2;
  
  if(verifyingDigit2 != cpf[10]) {
    console.log('Segunda verificação')
    return false;
  };

  return true;
};

const handleClick = () => {
  validateCPF(userCPF());
  console.log(validateCPF(userCPF()))
};
buttonValidate.addEventListener('click', handleClick);