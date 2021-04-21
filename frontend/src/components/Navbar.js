import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { ProductContext, StateContext } from '../context'
import {
  Container,
  Dropdown,
  Menu,
  Icon,
  Button
} from 'semantic-ui-react'


const Navbar = () => {


   const [product, setProduct] = useContext(ProductContext)
   const [nav, setNav]  = useContext(StateContext) 
   
  const logOutHandler = (e) =>{
    
    setNav({
      category: nav.category,
      islogin: false,
      count: 0,
    })

  }
  
  
   

    return(
       <div>
        <Menu  inverted color='black'>
          <Container>
            <Menu.Item  header>
              <Icon name='compass' />
              Ecommerce
            </Menu.Item>
            <Menu.Item>
              <Link to='/' onClick={e=>setProduct({
                          category : null,
                          loading: product.loading, 
                          user: product.user,
                          error: product.error,
                        })}>
                Все товары
              </Link>
            </Menu.Item>
            {nav.islogin && 
            <Dropdown item simple text='Категории'>
              <Dropdown.Menu>

                {nav.category.map(cat=>{
                  
                  return(
                    <Dropdown.Item key={cat.id} onClick={e=>setProduct({
                      category : parseInt(e.target.id),
                      loading: product.loading, 
                      user: product.user,
                      error: product.error,
                    })}>
                      <Menu.Item >
                        <Link id={cat.id} to={'/'} style={{'color': 'black'}} >
                           {cat.name}
                        </Link>
                      </Menu.Item>
                    </Dropdown.Item>
                  )
                })}
              </Dropdown.Menu>
            </Dropdown>}
         

            
              
              {nav.islogin ? 
              <Menu.Menu position='right'>
                 <Menu.Item>
                  <Link to='/cart'>
                    <Icon color='teal' name='shopping cart'>
                      <p style={{ position:'absolute', 
                                  color: 'green',
                                  top: '20px',
                                  left: '35px',
                                  fontSize: '15px',
                                  fontWeight: '800',}}>  {nav.count === 0 ? null : `+${nav.count}`} 
                        </p>
                      </Icon>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to='/'>
                   <Button onClick={logOutHandler} color='blue'>Выйти</Button>
                  </Link> 
                </Menu.Item>
              </Menu.Menu>  
              : <Menu.Menu position='right'>
                <Menu.Item>
                    <Link to='/signin'>
                      <Button primary>Войти</Button>
                    </Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to='/signup'>
                    <Button >Зарегистрироваться</Button>
                    </Link> 
                  </Menu.Item>
              </Menu.Menu> 
            
            }
            
          </Container>
        </Menu>   
      </div>
    )
  
}
 

export default Navbar