# asteroid-game
Un mic joc facut pentru un proiect la facultate folosing JavaScript

Pilotezi o nevetă reprezentată de un triunghi, pentru a o mișca se folosesc tastele up, down, left, right.

Pentru a roti naveta se folosesc tastele Z și C iar pentru a lansa o rachetă este folosită tasta X.

Asteroizii sunt reprezentați de un cerc, aceștia au un număr de vieți ales aleator și se vor genera pe una din laturile canvas-ului cu o viteza pe axele x si y,  aleatoare de asemenea.

Coliziunea dintre asteroizi îi face să își schimbe direcția de deplasare și coliziunea dintre asteroid și navetă scade viețile navetei. După coliziunea cu un asteroid naveta are imunitate 4 secunde.

Naveta poate avea maxim 3 rachete (reprezentate de un cerc rosu) pe ecran în orice moment. Când o rachetă lovește un asteorid acesta se micsoreaza și numărul de lovituri necesare să fie distrus scade.

La 10 lovituri cu succes către asteroizi naveta mai câștigă o viața.

Este implementat și un mod de a memora primele 5 scoruri record.

Cu SpaceBar se poate reseta jocul curent.

![image](https://user-images.githubusercontent.com/61497362/189958408-43c51937-1f35-4818-b081-5ef307dcaa97.png)
![image](https://user-images.githubusercontent.com/61497362/189958973-580710e6-b60b-437f-99f4-2205e2a3ad39.png)
