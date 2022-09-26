import logo from './logo.svg';
import './App.css';
import {Todos, Users} from "./components";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,

} from "react-router-dom";
import {Posts} from "./components/posts/Posts";
import {MainLayout} from "./layout/MainLayout";
import {TodosPAge} from "./pages/TodosPage";
import {AlbumsPage} from "./pages/AlbumPage";
import {CommentsPage} from "./pages/CommentsPage";


function App() {

    return (<div>

        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'albums'} element={<AlbumsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}>
                    <Route path={':postId'} element={<Posts/>}/>
                </Route>
                <Route path={'todos'} element={<TodosPAge/>}/>
            </Route>
        </Routes>

    </div>);
}
export default App;
