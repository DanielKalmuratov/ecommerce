import React from 'react'
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

const Signin = (props) => (
  <Grid textAlign='center' style={{ height: '85vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Icon name='compass'/>Log-in to your account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input 
            fluid icon='user' 
            iconPosition='left' 
            placeholder='E-mail address' 
            autoComplete="off"       
          />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            autoComplete="new-password"
          />

          <Button color='teal' fluid size='large' >
            Login
          </Button>
        </Segment>
      </Form>
      <Message>
        New to us? <Link to='/signup'>Sign Up</Link>
      </Message>
    </Grid.Column>
  </Grid>
)

export default Signin