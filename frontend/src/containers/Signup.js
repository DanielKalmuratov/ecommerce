import React from 'react'
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom'


const Signup = () => (
  <Grid textAlign='center' style={{ height: '85vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Icon name='compass'/>Create a new account
      </Header>
      <Form size='large'>
        <Segment stacked>
          <Form.Input fluid icon='address card' iconPosition='left' placeholder='Firstname' autoComplete="off" />
          <Form.Input fluid icon='user md' iconPosition='left' placeholder='Lastname' autoComplete="off" />
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Username' autoComplete="off" />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password'
            type='password'
            autoComplete="new-password"
          />

          <Button color='teal' fluid size='large'>
            Signup
          </Button>
        </Segment>
      </Form>
      <Message>
        Already have account? <Link to='/signin'>Sign-in</Link>
      </Message>
    </Grid.Column>
  </Grid>
)

export default Signup