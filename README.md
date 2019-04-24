# Instructions for Local Website Development
    

1. Clone the Git repository to your local machine using `git clone https://github.com/mruskamp/RPIEats`.<br>
    

2. Download and install NodeJS from the following link: **https://nodejs.org/en/download/**<br>
    

3. Inside your local repository run `npm install` to download and install the necessary packages to run the website. 
    

4. Edit the server endpoint in `src/data/endpoint.js` to the proper origin. This will adjust the endpoint for sending and receiving data to the server. Refer to Server Development/Deployment for more information<br>
    

5. To run the website locally in development mode, run `npm start`. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will hot reload when editing the source code.<br>
    

# Instructions for Website Deployment
    
To build the website run `npm run build`. This will build the app for production in the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
    

# Instructions for Local Server Development
1. Download and install the IntelliJ Idea IDE from the following link: **https://www.jetbrains.com/idea/**
2. Open IntelliJ and navigate to **File -> New -> Project From Version Control -> Git**
3.  In the `Clone Repository` dialog box that opens up, enter the link **https://github.com/mruskamp/RPIEats.git** into the URL box.
4. Install the Gradle project manager/builder from **https://gradle.org/install/**
5. In the terminal inside of IntelliJ with the project open, run the command **gradle build**
6. Run the main class folder **App.java**
    

# Instructions for Server Deployment
