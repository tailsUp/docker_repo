* Pidetään täällä kirjaa tehdyistä tehtävistä

*** Miten ajaa projektia ***

backend mongoyhteys käyntiin:   docker compose -f docker-compose.dev.yml up
backend päälle:                 npm run dev

tämän jälkeen localhost 3000(/todos/nro/jne)

*** Tehtävät: ***

12.1.1  - OK. Luettu.
12.1.2  - OK. Kloonattu.
12.1.3  - OK. Curl tehty.
12.2.1  - OK. docker run -it ubuntu bash
12.2.2  - OK.
12.2.3  - Ok.
12.2.4  - OK.
12.3    - OK. Lisätty rivi.
12.4    - OK. 
12.5.1  - OK. image luotu nimellä image-backend. Image käynnistetty komennolla: docker run -p 3123:3000 image-backend. Container nimi: mystifying_leavitt.
12.6    - OK. Buildattu: docker compose up --build. Käynnistyy localhostiin.
12.7    - OK. Käytetty mongon omia operaatioita etsintään ja päivittämiseen. Ei tehty mitään erikoisia try/catch nappauksia. Testattu localhost ja postman.
12.8    - OK. Saatu päivitettyä CLI:stä. Muutokset nähty sekä CLI:ssä että localhostissa.
12.9	- OK. docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest. Tämän jälkeen yml asetukset. Saatu localhost auki redis_osoitteella. Ei virheitä consolissa.
12.10	- OK. Voi noutaa 'added_todos' ja voi luoda uuden. Testattu localhost ja postman.
12.11	- OK.
12.12   - OK.

12.13   -

*** Muuta ***

Poistetu todo nimistä.

Asennettu: npm install dotenv --save

*** TUTORIAALIT ***

Hello-world:latest
docker container run hello-world
--> Status: Downloaded newer image for hello-world:latest
docker image pull hello-world
--> Image is up to date for hello-world:latest

Docker 1:
docker container run --rm ubuntu ls
--> listaa kaikki
docker container ls -a
--> listaa kaikki suljetut containerit
docker start id/name
--> dreamy_haibt
docker kill dreamy_haibt
--> lopetti containerin
docker start -i dreamy_haibt
--> käynnistyi ja ollaan sisällä
--> apt-get update
--> apt-get -y install nano
--> nano /usr/src/app/index.js

Docker 2:
docker commit dreamy_haibt new_dreamy_haibt
--> sha256:bdafd8b472153f855023d1dc6add3c7ccecea1bf2914d1d699f19ba69fafad2c
docker image ls
--> listaa kaikki imaget
docker run -it new_dreamy_haibt bash
--> käynnistää imagen
node /usr/src/app/index.js
--> Hello World
docker container rm hopeful_clarke
--> poistettu

Kopiointi hässäkän lopputulos:
node /usr/src/app/index.js
--> Hello, World

Dockerfile:
docker build -t fs-hello-world .
docker image ls
--> image fs-hello-world on luotu.
docker run fs-hello-world
--> Hello, World

Express:
npx express-generator
--> projekti luotu
npm install
--> asennettu
DEBUG=express:* npm start
--> starttasi
docker build -t express-server .
--> image löytyy
docker run -p 3123:3000 express-server
--> localhost:3123 OK
docker kill condescending_feynman
--> suljettu.

Compose:
docker compose up --build
--> käynnistyy localhost:3000

Mongo:
docker compose -f docker-compose.dev.yml up -d
--> ✔ Container backend-mongo-1  Started 
docker compose -f docker-compose.dev.yml logs -f
--> http://localhost:3456
--> It looks like you are trying to access MongoDB over HTTP on the native driver port.




docker start -i mystifying_leavitt
docker run -it mystifying_leavitt bash

docker container run -it --name mystifying_leavit node:20 bash