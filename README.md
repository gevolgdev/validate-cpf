# Validador de CPFs
Olá, o desafio do dia foi fazer um validador de CPF. Desáfio recomendado pelo ChatGPT e ele me passou o seguinte algoritmo para eu desenvolver no Javascript:

### Algoritmo:
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

### Resolução: