import React, { Component } from 'react'
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap'
import { Redirect } from 'react-router-dom'

class CatEdit extends Component{
  constructor(props){
    super(props)
    this.state = {
      form:{
        name: this.props.cat.name,
        age: this.props.cat.age,
        enjoys: this.props.cat.enjoys
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    // destructuring form out of state
    let { form } = this.state
    form[e.target.name] = e.target.value
    // setting state to the updated form
    this.setState({ form: form })
  }

  handleSubmit = () => {
    this.props.updateCat(this.state.form, this.props.cat.id)
    this.setState({ submitted: true })
  }

  render(){
    return(
      <div className="main-body">
        <h3>Update Cat Profile</h3>
        <Form>
          <FormGroup>
            <Label>Cat's Name</Label>
            <Input
              type="text"
              name="name"
              onChange={ this.handleChange }
              value={ this.state.form.name }
            />
          </FormGroup>
          <FormGroup>
            <Label>Cat's Age</Label>
            <Input
              type="number"
              name="age"
              onChange={ this.handleChange }
              value={ this.state.form.age }
            />
          </FormGroup>
          <FormGroup>
            <Label>I enjoy...</Label>
            <Input
              type="text"
              name="enjoys"
              onChange={ this.handleChange }
              value={ this.state.form.enjoys }
            />
          </FormGroup>
          <Button
            name="submit"
            color="secondary"
            onClick={ this.handleSubmit }
          >
            Edit Cat Profile
          </Button>
        </Form>
        { this.state.submitted &&
          <Redirect
            to={ `/catshow/${this.props.cat.id}` }
          />
        }
      </div>
    )
  }
}
export default CatEdit
