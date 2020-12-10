# Company Search
## Search company name & find logo as well as other relevant company info

## Demo
Deployed on Heroku: [here](https://warm-oasis-05569.herokuapp.com/)
![](demo/demo.gif)

## Available Scripts

In the root project directory, you can run:
### `npm run dev`

Make sure `concurrently` is installed globally on your machine before running: `npm i -g concurrently`

Runs the app in the development mode.<br />
- Open [http://localhost:3000](http://localhost:3000) to run frontend
- Open [http://localhost:8080](http://localhost:8080) to run backend

### `npm run start`

Before deploying, make sure dependencies are installed & frontend build is completed: `npm run postinstall`. Note that if deploying to [Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs), it automatically looks to the `postinstall` script as well as `start`
- There also must be a `CLEARBIT_KEY` variable within `/backend` in a `.env` file -- this allow a [ClearBit API](https://clearbit.com/docs) to be called for all of the relevant company information.

Runs the app in the build/production mode.<br />
- Open [http://localhost:8080](http://localhost:8080) to run backend
