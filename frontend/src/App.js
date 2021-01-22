import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import SignInPage from './components/SignInPage'
import ChoosePage from './components/ChoosePage'
import CitiesPage from './components/CitiesPage'
import ContinentsPage from './components/ContinentsPage'
import SectorsPage from './components/SectorsPage'

const App = () => {
  return (
    <BrowserRouter>
      <div className='outer-wrapper'>
        <Switch>
          <Route exact path='/' component={SignInPage} />
          <Route path='/choose' component={ChoosePage} />
          <Route path='/cities' component={CitiesPage} />
          <Route path='/continents' component={ContinentsPage} />
          <Route path='/sectors' component={SectorsPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
