import { useState } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import FishSlice from './features/fishSlices'
import AppNavigator from './navigation/AppNavigator'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}

export default App
