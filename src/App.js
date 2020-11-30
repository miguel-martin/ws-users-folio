import './App.css';
import { Switch, Route } from 'react-router-dom'
import { UsersList } from './components/UsersList'
import { UserDetail } from './components/UserDetail'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <div className="App">
      <Switch>
            <Route exact path='/' component={ UsersList } />
            <Route exact path='/users/' component={ UsersList } />
            <Route path='/users/:id' render={(props) => <UserDetail {...props} showInfo />} />
            <Route component={ NotFound} />
      </Switch>
    </div>
  );
}

export default App;
