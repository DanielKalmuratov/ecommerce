import React from 'react'
import { Card, Icon, Image, Loader, Button} from 'semantic-ui-react'

const  productCard = props => {
  <Card
    key={props.id}
    image={<Image src={props.image} size='small' />}
    header={props.title}
    meta={`Цена: ${props.price} cом, ${props.catergory}`}
    description={props.description}
    extra = {<Button>
    <Icon name='arrow down cart' />
      В Корзину
    </Button>}
  />

                  
}
export default productCard 