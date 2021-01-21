## Start the app

Clone the project and run npm install in the ynap-frontend-task directory 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run coverage`

It generates a report to show the overall test coverage for the code. \


### `npm run build`

Builds the app for production to the `build` folder.\

The build is minified and the filenames include the hashes.\

### Server side rendering

1. You need to run `npm run build` first and the generated files will be served by server side.
2. Then run `npm run dev` to bundle the server side js and open port 3006. You can open http://localhost:3006 to view the site. You may see server error on the page because the bundling is not ready. It may take about 10 seconds. 


## Approaches

#### Create React App
I use create react app to initialise the project since this is a simple application, and the structure would be more consistent than using webpack.

#### Use node express to start a server and serve static files
Using ReactDOMServer to render react components into static markdown and return HTML string that can be served in express server when an initial http request is sent from the client side. Webpack is needed to bundle server files.

#### Parallax hero
I create a hook (useScroll) so that the scroll position will be sent to components as a prop. The backgroundPositionY, the opacity, contents of the Hero elements will be changed according to the scrollPosition.

#### Sticky column
I add the css property (sticky) to the column image when the scroll position reaches the offsetTop of the column image.

#### Unit tests 
There are some unit tests to generate snapshots and test the changes of the elements' opacity, background position when the scroll position is at certain point.

   

  