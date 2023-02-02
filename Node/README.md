-------------------------------------------
INSTRUCCIONES PARA EJECUTAR LOS TESTS CORRECTAMENTE
-------------------------------------------

Para ejecutar los test, es necesario instalar babel.

Copiando y pegando esto en la consola, en el directorio de la carpeta Node, debería ser suficiente:

npm install --save-dev babel-jest @babel/core @babel/preset-env

-------------------------------------------


Nivell 1
Crea un arxiu amb les funcions sumar, restar, multiplicar i dividir dos o més operands. Testeja la correcta execució d'aquestes funcions.
Crea els tests corresponents per verificar el funcionament de les dues funcions de l'exercici Promises i Callbacks N1 E2.
Crea els tests corresponents per verificar el funcionament de les funcions de l'exercici Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()).
Crea els tests corresponents per verificar el funcionament de l'exercici Async / Await N1 E2.
 Recorda

Per tots els tests que s'han de testejar coses com inputs, outputs, errors i casos límit, no només que 2 i 2 sumin 4.


Nivell 2
Verifica mitjançant tests l'execució de l'exercici Async / Await N2 E1 utilitzant Jest Fake Timers.
Crea un mock que comprovi les crides al constructor de la classe Persona i al seu mètode. dirNom() en l'exercici Classes & Arrow Functions - N2 E2 i testeja que funcionen.
Verifica mitjançant tests la creació d'instàncies de la classe abstracta de l'exercici Classes & Arrow Functions N3 E1.

Nivell 3
Refès els exercicis Promises i Callbacks N2 E1 i Promises i Callbacks N2 E2 (getEmployee() i getSalary()) de manera que accedeixin a les dades d'un fitxer extern JSON. Crea tests que demostrin la correcta execució de l'exercici fent un mock del fitxer JSON.
Utilitzant com a base l'exercici Async / Await, crea tests que forcin errors de funcionament i verifiqui que els errors llançats són els esperats.