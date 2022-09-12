import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Header from './components/Header'
import NotFound from './components/NotFound'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={Header} />
      <Route component={NotFound} />
    </Switch>
  </>
)

export default App
