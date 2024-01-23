import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Header from './components/Header'
import { GlobalCss } from './styles'

import Rotas from './routes'
import Footer from './components/Footer'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <GlobalCss />
          <div className="container">
            <Header />
          </div>
          <Rotas />
          <Footer />
          <Cart />
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
