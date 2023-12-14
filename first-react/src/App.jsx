
import './App.css'
import Component from './components/component'
import { FiGithub } from "react-icons/fi";
function App() {
 

  return (
    <>
      <div>
      <h1>My first project</h1>
      </div>
      <body>
        <form action="">
        <label htmlFor="">Name</label>
        <input type="text" name='login' />
        </form>
       
      </body>
      <Component/>
      <div>
        <h2>
          <a href="https://github.com/NkusiYvette/React-projects">
          icon <FiGithub/>
          </a>
        </h2>
      </div>
    </>
  );
}

export default App

