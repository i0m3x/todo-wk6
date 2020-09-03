import React from 'react';
import './App.css';
import Todo from './components/Todo';
import { BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      todo: "",
      todos: [
        {
          text: 'thing1',
          completed: false
        },
        {
          text: 'thing2',
          completed: false
        }
      ]
    }
  }
  render() {

  return (
    <div className="App">
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/all'>All</Link>
          </li>
          <li>
            <Link to='/done'>Finished</Link>
          </li>
          <li>
            <Link to='/todo'>Do more</Link>
          </li>
        </ul>
      </nav>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path='/all'>
          <Todo todos={[{ text: 'take out the trash' }]} />
        </Route>
        <Route path='/done'>
          <Todo todos={[{ text: 'do the dishes' }]} />
        </Route>
        <Route path='/todo'>
          <Todo todos={[{ text: 'take out the trash' }, { text: 'do the dishes' }]} />
        </Route>
      </Switch>
    </div>
  </Router>
    </div>
  );
}
}
