# Streamity

With governments around the world advising people to socially distance themselves to contain the spread of coronavirus, there is a need for innovative solutions that allow people to still socialise.
Streamity is a web application that enables a group of users to listen to a playlist of songs at the same time, regardless of their location. 

## Get Started!

To get the project running, follow these steps:

### Prerequisites
- Visual Studio Code [or equivalent frontend tooling]
- NPM/NodeJS (for running the frontend)

### Steps
1. Open the frontend folder in a command line tool.
2. Run `npm install` to download and install all dependencies.
3. Run `npm start` to start the React development server. 
4. Your browser should open (or you may have to open a link from the React command line tool). You should see the home page, and it should successfully connect to the backend. 

5. Open the backend folder in the command line tool. 
6. Run `npm i`
8. Run `npm start`
```
If you get "ReferenceError: required is not defined:
- Delete backend/node_modules
- Delete line 6 ("type: module") in backend/package.json
- Run npm i
- Run npm start
```

### Things to Note
1. You will need a Spotify Premium account to use Streamity
2. Do not switch playback on different devices using the Spotify Application. 
3. Control playback via the Streamity Application, do not switch to the Spotify Application.
4. Ensure that you do not have music currently playing when opening up Streamity. 
