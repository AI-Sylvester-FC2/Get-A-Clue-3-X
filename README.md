# Get-A-Clue-3-X
OpenAI using Ollama- will act as a placekeeper for any ai agent you choose to install later. Documentation can be found here https://docs.ollama.com/cloud#javascript
  1. sign in or create an account at ollama.com to get your api key
  2. install openai to allow us to fake ollama into the openai slot
     npm install openai
  3. then you can build out your app using openai sdk documentation can be found here: https://platform.openai.com/docs/quickstart#page-top

1. [x] Create a repo to store work and test commits
2. [x] Manually Create index.html and styles.css files
  a. Boiler Plate code for html - https://gist.github.com/kingluddite/53c2109e62d406f5b2243961f0d4f654
  b. [] Connect HTML and CSS files:
    1. [x] HTML: Make sure <head> includes <link href="./styles.css" rel="stylesheet">
    2. [x] HTML: Make sure <body> includes <div id="root"></div> as this will be needed later when connecting with react
    3. [x] HTML: Make sure <body> includes <script type="module" src="./src/main.jsx"></script> - You can change src depending on where your main.jsx file will be located
3. [] create file/folder structure for frontend and backend
  a. [x] Create src folder for frontend files Will eventually be for (App.tsx, Main.tsx, components folder)
  b. [] leave backend/other files outside of src (node_modules - created w/ vite installation, assets, .gitignore, index.html, styles.css, README.md, 
  package.json - created w/ vite installation, package-lock.json - created w/ vite installation, server.ts, vite.config.ts)

  Your file structure should look something like this:

![alt text](<Screenshot 2025-12-21 at 2.35.00 AM.png>)

4. [] Connect build tools/ create necessary files
  a. [x] Vite and React - You can use ONE of the following commands :
    1. [x] npm install react react-dom and then npm install @vitejs/plugin-react --save-dev
      - If no package.json exists it will be created with this step or you can use -> npm init
    2. [-] npm create vite@latest <name of app> react-ts -> This basically sets up all of your files for you (Need to look into this later)
  b. [x] TypeScript -> npm install --save-dev typescript
    * Check version of TS -> npx tsc --version
  c. [x] Express -> npm install express
  d. [x] vite.config.ts -> Manually or npm init for vite.config.js
  e. [x] vite.config.json (needed for compiling TS into JS) -> npx tsc --init
  f. [x] .gitignore -> create manually
    a. [x] add the following files: 
      1. [x] .gitignore
  g. [x] configure vite.config.ts file
  h. [x] add the following scripts to package.json file above the dependencies:
    "type": "module",
    "main": "server.ts",
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "client": "vite",
    "server": "node server.ts",
    "start": "concurrently \"npm run client\" \"npm run server\"",
    "build": "vite build"
    },
  i. [] install concurrently -> npm install concurrently
  j. [-] install tailwind(if necessary) (Come back to this later)
    1. [-] npm install -D tailwindcss postcss autoprefixer -> Installs Tailwind, PostCSS, Autopprefixer
  k. [x] create App.tsx and Main.tsx files
  l. [] Connect Main.tsx to the DOM
    a. [x] import { createRoot } from express
    b. [x] declare root variable createRoot(document.getElementById('root'));
    c. [x] render App file -> root.render(<App/>)
  m. [] Connect Server
    a. [x] set a variable = an instance of express
      -  const app = express();
    b. [x] create a PORT: 
      - const PORT = 3000;
    c. [x] create file structure
      - const _filename = fileURLToPath(import.meta.url);
        const _dirname = path.dirname(_filename);
    d. [x] serve static files
      - app.use(express.static(_dirname));
    e. [x] seved html files
      - app.get('/', (req, res) => {
        res.sendFile(_dirname, '/index.html');
        });
    f. [x] make sure server is listening on port
      - app.listen(PORT, () => {
        console.log(`Now Listening on port: ${PORT}`);
        });
  n. [x] Go back to App.tsx and finish connecting it to main.tsx
    a. [x] export App component
      - export default function App() {
        <everthing else within here...>
        [x] return (
          [x] <>
        can start putting elements here to see on page

          [x] </>

        )
      }
    b. [x] Go back to main.tsx and import App.tsx
      1. [x] import App from "./App"; - Need to understand why the path is not ./src/App
    c. [x] Finally go back to App.tsx and add an element (for testing)
     - <h1>We are now up and running!</h1>
5. [] Run final test to make sure page is working:
  a. [] npm run start, then click on localhost link to see webpage
 

