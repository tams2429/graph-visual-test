import React from 'react'

import SignInPage from './components/SignInPage'
import GraphPage from './components/GraphPage'

const App = () => {
  return (
    <div className='outer-wrapper'>
      <SignInPage />
      <GraphPage />
    </div>
  )
}

export default App
