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
  
  if(restValidate < 2) verifyingDigit = 0;
  else verifyingDigit = 11 - restValidate;
  
  if(verifyingDigit != cpf[9]) {
    console.log('Falso - Primeira verificação');
    return false;
  }
  
  // second validate
  for (let i = 0; i < 10; i++) {
    numbersToValidate2.push((ArrCPF[i] * validator2));
    validator2--;
  };
  numbersToValidate2.map(item => totalNumbersValidate2 += item);
  let restValidate2 = totalNumbersValidate2 % 11;
  
  if(restValidate2 < 2) verifyingDigit2 = 0;
  else verifyingDigit2 = 11 - restValidate2;
  
  if(verifyingDigit2 != cpf[10]) {
    console.log('Falso - Segunda verificação');
    return false;
  };

  console.log('Verdadeiro')
  return true;
};

const handleClick = () => {
  validateCPF(userCPF());
  inputCPF.value = '';
};
buttonValidate.addEventListener('click', handleClick);