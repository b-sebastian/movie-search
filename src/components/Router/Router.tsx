import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Results from "../Results/Results";
import MovieDetails from "../MovieDetails/MovieDetails";

type AppRouterProps = {
    headerComponent: JSX.Element;
}

const AppRouter = ({ headerComponent }: AppRouterProps) => (
    <Router>
        {headerComponent}
        <Switch>
            <Route path='/movie/:id'>
                <MovieDetails/>
            </Route>
            <Route path='/results/:search'>
                <Results/>
            </Route>
            <Route path='/'>
                <h2>Welcome!</h2>
            </Route>
        </Switch>
    </Router>
);

export default AppRouter;