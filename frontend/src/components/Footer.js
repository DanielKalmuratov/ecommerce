import React from 'react'
import { Container,
  Icon,
  List,
  Segment,
  } from 'semantic-ui-react'



const Footer = () =>{

  return(
    <div >
      <Segment  inverted style={{ margin: '3em 0em 0em', padding: '2em 0em 3em 0em' }} >
          <Container textAlign='center' >       
            <Icon name='compass'/>
            <List horizontal inverted divided link size='small'>
              <List.Item >
                My first ecommerce website
              </List.Item>
              <List.Item  >
                2021
              </List.Item>            
            </List>
          </Container>
        </Segment>    
    </div>
  )
}

export default Footer
