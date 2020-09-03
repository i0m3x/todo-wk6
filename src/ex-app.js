
// AUSTEN'S ADVICE:

// 1. START WITH IMPORTS
// 2. MOVE ON TO NPM INSTALLS
// 3. CHECK PACKAGE.JSON (-s means that we save to the dependencies)
// 4. CHANGE THE 'TODOS' TO 'TODO' IN THE PROPS
// 5. CHANGE THE ROUTE PATH
// 6. GO TO 'APP.JS' PASTE THE BELOW IN (EVAN GAVE IT TO US)
// 7. CHANGE THE FUNCTIONAL COMPONENT TO A CLASS COMPONENT


import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
export default function App () {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>All</Link>
            </li>
            <li>
              <Link to='/done'>Completed Todos</Link>
            </li>
            <li>
              <Link to='/incomplete'>Incomplete Todos</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/done'>
            <Todos todos={[{ text: 'take out the trash' }]} />
          </Route>
          <Route path='/incomplete'>
            <Todos todos={[{ text: 'do the dishes' }]} />
          </Route>
          <Route path='/'>
            <Todos todos={[{ text: 'take out the trash' }, { text: 'do the dishes' }]} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
function Todos (props) {
  return (
    <div>
      <h2>Todos</h2>
      {props.todos.map((todo, i) => <li key={i}>{todo.text}</li>)}
    </div>
  )
}