# Validador de CPFs
Olá, o desafio do dia foi fazer um validador de CPF. Desáfio recomendado pelo ChatGPT e ele me passou o seguinte algoritmo para eu desenvolver no Javascript:

## Algoritmo:
1. Receba o CPF como entrada.
2. Divida o CPF em dígitos individuais.
3. Calcule o primeiro dígito verificador:
    - Multiplique cada um dos 9 primeiros dígitos pelos números de 10 a 2.
    - Some os resultados.
    - Calcule o resto da divisão dessa soma por 11.
    - Se o resto for igual a 0 ou 1, o dígito verificador é 0. Caso contrário, subtraia o resto de 11.
    - Compare o dígito verificador obtido com o 10º dígito do CPF.
    - Se forem diferentes, retorne falso.
4. Calcule o segundo dígito verificador:
    - Multiplique cada um dos 10 primeiros dígitos pelos números de 11 a 2.
    - Some os resultados.
    - Calcule o resto da divisão dessa soma por 11.
    - Se o resto for igual a 0 ou 1, o dígito verificador é 0. Caso contrário, subtraia o resto de 11.
    - Compare o dígito verificador obtido com o 11º dígito do CPF.
    - Se forem diferentes, retorne falso.
5. Se ambos os dígitos verificadores passarem nas verificações, retorne verdadeiro. Caso contrário, retorne falso.

!['Imagem de demonstração'](./assets//img-demo.png)

## Resolução:

#### 1. Receba o CPF como entrada
Para receber o cpf é muito simples, fiz uma função que recebe o valor do input.
```javascript
const userCPF = () => inputCPF.value;
```

#### 2. Divida o CPF em dígitos individuais
Para fazer essa divisão, criei um novo array com os digitos usando o método `array.split()`.
```javascript
let ArrCPF = cpf.split('')
```

#### 3. Calcule o primeiro dígito verificador
Para isso criei a função principal do código a `validateCPF()`. Nelas iniciei com as variavel que vão guardando os dados de resultado do processo.

```javascript
let validator = 10;
let validator2 = 11;
let numbersToValidate = [];
let numbersToValidate2 = [];
let totalNumbersValidate = 0;
let totalNumbersValidate2 = 0;
let verifyingDigit = 0;
let verifyingDigit2 = 0;
```
Depois calculamor o primeiro digito verificador.

```javascript
// Multiplique cada um dos 9 primeiros dígitos pelos números de 10 a 2.
for (let i = 0; i < 9; i++) {
  numbersToValidate.push((ArrCPF[i] * validator));
  validator--;
};
// Some os resultados
numbersToValidate.map(item => totalNumbersValidate += item);
//Calcule o resto da divisão dessa soma por 11
let restValidate = totalNumbersValidate % 11;

//Se o resto for igual a 0 ou 1, o dígito verificador é 0. Caso contrário, subtraia o resto de 11.
if(restValidate < 2) verifyingDigit = 0;
else verifyingDigit = 11 - restValidate;

// Compare o dígito verificador obtido com o 10º dígito do CPF. Se for diferente, retorne falso
if(verifyingDigit != cpf[9]) {
  renderMessage(false);
  return false;
}
```

#### 4. Calcule o segundo dígito verificador
Essa etapa é igual a anterior, porém o digito que será verificado sera o 11º.
```javascript
// No loop muda para 10
for (let i = 0; i < 10; i++) {
  numbersToValidate2.push((ArrCPF[i] * validator2));
  validator2--;
};
numbersToValidate2.map(item => totalNumbersValidate2 += item);
let restValidate2 = totalNumbersValidate2 % 11;

if(restValidate2 < 2) verifyingDigit2 = 0;
else verifyingDigit2 = 11 - restValidate2;
// E aqui faz a comparação do digiro do index [10]
if(verifyingDigit2 != cpf[10]) {
  renderMessage(false);
  return false;
};
```
#### 5. Se ambos os dígitos verificadores passarem nas verificações, retorne verdadeiro. Caso contrário, retorne falso.
Para finalizar retornaremos `true` caso nossas 2 verificações passarem.

```javascript
const validateCPF = (cpf) => {

  // Limpar mensagem de retorno
  cpfContainer.innerHTML = '';
  
  // first validate
  // ...

  // second validate
  // ...

  // Mensagem de retorno
  renderMessage();
  // CPF válido
  return true;
};
```

#### 6. Mensagem de retorno
Para o usuário ver que o feedback do CPF inserido, renderizamos essa função nas condições que verificam o primeiro e segundo digito de verificação.

```javascript
const renderMessage = (feedback = true) => {
  cpfElement = document.createElement('div');
  if(feedback) {
    cpfElement.innerHTML = `<span>✅ CPF verdadeiro!</span>`;
    cpfContainer.appendChild(cpfElement);
  }
  else {
    cpfElement.innerHTML = `<span>❌ CPF inválido!</span>`;
    cpfContainer.appendChild(cpfElement);
  }
  setTimeout(() => {
    cpfContainer.innerHTML = '';
  }, 4000);
};
```

# Obrigado,
Espero que tenha gostado e aprendido algo caso você ainda esteje estudando, como eu.
Até a proxima.