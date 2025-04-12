## Application Built with

- React Native Framework: 
This framework allows the application to run on both iOS and Android Platforms.

- socket.io: 
This feature enables real-time multiplayer for the game and allows communication between multiple devices.

- WebSQL database (Web Storage requirement):
This feature stores the player results into Chrome WebSQL.

- Express:
    This feature helps create a server port to store the player score on the following page: "localhost:4000"

---------------------------------------------------------------------------------------------------------------------------------

## Run the Game through Expo

PLEASE NOTE: 

- Before starting the game, please change the IP address to your WiFi IP address in App.js in order to run socket.io on your machine:

connectSocket() {
    this.socket = io("http://"Paste your IP address here":4000");
  }

- please change the IP address to your WiFi IP address in display.html in order to run socket.io on your machine:

  	const socket = io('http://"Paste your IP address here:4000");



- Use Terminal to access the "FinalProjectCAH" folder from its download location 

- Go to the "cardGame" folder in the Terminal ("cd cardGame") and install npm modules ("npm install")

- Open a new Terminal window, and after accessing the "FinalProjectCAH" folder in this new window, go to the server folder ("cd server") and install npm modules once again ("npm install")

- After the installation completes on the "server" folder, start the server ("node index.js"). This will start the socket to run the multiplayer game and the express to open the server port where the database is stored ("localhost:4000")

- After the setup completes, click on the previous Terminal window where the "cardGame" folder is opened on and start the game from there ("npm start")

---------------------------------------------------------------------------------------------------------------------------------

## Check game results on WebSQL

- after one player gets 3 points and ends the game, go to "localhost:4000" on your browser 

- right-click on the page, click "Inspect", go to the Applications tab, and click on WebSQL located on the bottom-left. Inside WebSQL, click on "records" and check for the player score.

---------------------------------------------------------------------------------------------------------------------------------

## Game Components:

 - There are two types of players: Host and client.
    - Host: Creates game through server and generates the code for clients.
    - Client: Joins game using generated code.

- There are 8 screens in this app and each screen holds different functionalities.

    - Answers.js:
    This component holds the white cards for each black-card question. If any client player clicks on a white card, that selected white card will show up on the host player's phone.

    - Compare.js:
    The host player receives a white card selected by a client player, and when the host clicks on their preffered white card, that card's client wins the round.

    - Home.js:
    Homescreen of the game. Has a title and two buttons, "Start" and "Exit".

    - Host.js:
    This screen will generate a random code for client players to join the game.

    - Join.js:
    Prompts client player to type generated code and his/her name into two different textboxes and allows that player to join the host's created game.

    - Questions.js:
    This screen holds the black-card questions and the white cards containing potential answers.

    - Scoreboard.js:
    This screen shows the overall points that each client player received during the game.

    - Start.js:
    Starts the game and shows a given black card to the players. When the host clicks on the black card, the client players will see their given white cards on their own phones.

---------------------------------------------------------------------------------------------------------------------------------

## Server

- index.js:
Coded with node.js and socket.io. Creates a database on server port 4000 which is implemented by express.

---------------------------------------------------------------------------------------------------------------------------------

## Features that we were unable to implement as proposed 

 - We originally proposed to store both the black and white cards in a database. However, we found an easier way to store the cards by coding them using JavaScript. As you can see in Questions.js, you can see a set of questions and potential answers stored inside. Following this, we now used the database idea to store the client players' names and scores.

---------------------------------------------------------------------------------------------------------------------------------

## References

- https://expressjs.com/en/5x/api.html?fbclid=IwAR1mkj4RZsqAkvx8R7rDBE8tWpIJGREInIMP7sMFfN9BQ1vqQqpguEZHUh4

- https://socket.io/docs/?fbclid=IwAR2GFGtksSusdkQpR56inc_Xj0m0-l8xS173E9uOb3b8UxTDGuE4xOIsYJw#Using-with-Express

- https://reactnative.dev/docs/getting-started?fbclid=IwAR2GEpiEhXqHZJqcbmw7_tKUbZ1INlEavZETEBhJd4K5pYOGBpwboZSNZtc

- https://docs.expo.io/versions/latest/sdk/sqlite/?fbclid=IwAR2WufzbDE5JCigsNn4-zUeXYjGgAeSUupZ-enCm1OGYCTkLu2PR6tPj3L4

- https://developers.google.com/web/tools/chrome-devtools/storage/websql?fbclid=IwAR0iFfETPMk2TJucl4OOxfEDX4Dph3iFl6Um-7Cal3a85OrwqbptzALpYfk
