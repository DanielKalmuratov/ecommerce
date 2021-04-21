import React from 'react'
import ProductList from './containers/ProductList'
// import Home from './containers/Home'
import Navbar from './components/Navbar'
import Signin from './containers/Signin'
import Signup from './containers/Signup'
import { Route} from 'react-router-dom'
import Footer from './components/Footer'




const App = () =>{

  return(
    <div>
      <Navbar />
     
    
        <Route path='/signin'>
          <Signin />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        
        <Route path='/' exact>
          <ProductList />
        </Route>

        <Footer />
     
      

    </div>
  )
}

export default App
