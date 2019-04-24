# Instructions for Local Development

## 1. Clone the Git repository to your local machine using `git clone https://github.com/mruskamp/RPIEats`.

## 2. Download and install NodeJS from the following link: **https://nodejs.org/en/download/**

## 3. Inside your local repository run `npm install` to download and install the necessary packages to run the website.

## 4. Edit the server endpoint in `data/endpoint.js` to the proper origin. This will adjust the endpoint for sending and receiving data to the server.

## 4. To run the website locally in development mode, run `npm start`. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will hot reload when editing the source code.

# Instructions for Deployment

To build the website run `npm run build`. This will build the app for production in the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance. See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
