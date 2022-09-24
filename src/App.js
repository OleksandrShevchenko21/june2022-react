import logo from './logo.svg';
import './App.css';
import {Todos, Users} from "./components";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Outlet
} from "react-router-dom";
import {Albums} from "./components/albums/Albums";
import {Comments} from "./components/comments/Comments";


function App() {
  return (
      <div>

        <div>
          <Users/>
        </div>

        <div>
            <ul>
                <li><Link to={'/todos'}>all todos</Link></li>
                <li><Link to={'/albums'}>all albums</Link></li>
                <li><Link to={'/comments'}>all comments</Link></li>
            </ul>

            <Routes>
                <Route path={'todos'} element={<Todos/>}/>
                <Route path={'albums'} element={<Albums/>}/>
                <Route path={'comments'} element={<Comments/>}/>

            </Routes>

        </div>

      </div>
  );
}

export default App;
