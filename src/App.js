import './App.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Users from "./components/users/Users";
import Comments from "./components/comments/Comments";
import Posts from "./components/posts/Posts";

export default function App() {
    return (
        <Router>

            <div>
                <div className={'link-box'}>
                    <Link to={'/'}>null</Link>
                    <br/>
                    <Link to={'/users'}> Users page</Link>
                    <br/>
                    <Link to={'/posts'}> Posts page</Link>
                    <br/>
                    <Link to={'/comments'}> Comments page</Link>
                </div>


                <div className={'route-box'}>
                    <Route path={'/users'}>
                        <Users/>
                    </Route>

                    <Route path={'/posts'} component={Posts}/>

                    <Route path={'/comments'} render={() => <Comments/>}/>
                </div>

            </div>

        </Router>
    );
}