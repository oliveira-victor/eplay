import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalCss } from './styles'
import Product from './components/Product'
import ProductsList from './components/ProductsList'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProductsList title="Promoções" background="gray" />
        <ProductsList title="Em breve" background="black" />
      </>
    )
  }
])

function App() {
  return (
    <div className="App">
      <>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <RouterProvider router={rotas} />
      </>
    </div>
  )
}

export default App
