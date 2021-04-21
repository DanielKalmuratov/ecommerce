import React, {useContext} from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Card, Icon, Image, Loader, Button} from 'semantic-ui-react'
import { ProductContext, StateContext } from '../context'
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';



const ProductList = () => {

  const [product] = useContext(ProductContext)
  const [nav, setNav]  = useContext(StateContext)

  const  createNotification = () => {
    return NotificationManager.success('Товар добавлен в корзину', 'Ecommerce');
  }
  

  const buyHandler = (e) =>{
    createNotification()


    
    const n = 1 + parseInt(nav.count)
    setNav({
      category:nav.category,
      islogin: true,
      count: n, 
      }) 
     
  }

  
    return  product.loading ? (<Loader content='Loading' active/>) 
    : (<Card.Group centered itemsPerRow={4} style={{marginTop: '20px', padding: '20px 30px'}}>
         {
           product.category ? (
            product.user.map(el=>{
              
              return( 
                     el.catergory === product.category &&   
                     <Card
                      key={el.id}
                      image={<Image src={el.image} size='small' />}
                      header={el.title}
                      description={el.description}
                      extra = {
                      <div>
                        <Button id={el} onClick={buyHandler}>
                        <Icon name='arrow down cart' />
                          В Корзину
                        </Button> 
                        <Button color='teal'>
                          {`${el.price} cом`}
                        </Button>
                      </div>}
                    />
              )
            })   
           ) : (
            product.user.map(el=>{
              return( 
                    <Card
                      key={el.id}
                      image={<Image src={el.image} size='small' />}
                      header={el.title}
                      description={el.description}
                      extra = {
                      <div>
                        <Button id={el} onClick={buyHandler}>
                        <Icon name='arrow down cart' />
                          В Корзину
                        </Button> 
                        <Button color='teal'>
                          {`${el.price} cом`}
                        </Button>
                      </div>}
                    />     
              )
            })
           )
         }
         <NotificationContainer enterTimeout={400} leaveTimeout={10}/>
      </Card.Group>
    )  
}

export default ProductList