import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class CatNew extends Component {
  constructor(props){
    super(props)
    this.state = {
      form: {
        name: "",
        age: "",
        enjoys: ""
      },
      submitted: false
    }
  }

  handleChange = (e) => {
    let { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleSubmit = () => {
    this.props.createCat(this.state.form)
    this.setState({ submitted: true })
  }

  render() {
    return (
      <>
        <h3>This is the new cat page</h3>
        <Form>

          <FormGroup>
            <Label>Name</Label>
            <Input
              type="text"
              name="name"
              onChange={ this.handleChange }
              value={ this.state.form.name }
            />
          </FormGroup>

          <FormGroup>
            <Label>Age</Label>
            <Input
              type="number"
              name="age"
              onChange={ this.handleChange }
              value={ this.state.form.age }
            />
          </FormGroup>

          <FormGroup>
            <Label>Enjoys</Label>
            <Input
              type="text"
              name="enjoys"
              onChange={ this.handleChange }
              value={ this.state.form.enjoys }
            />
          </FormGroup>

          <Button
            name="submit"
            onClick={ this.handleSubmit }
          >
            Create New Cat Profile
          </Button>
        </Form>

        { this.state.submitted && <Redirect to="/catindex" /> }
      </>
    )
  }
}
export default CatNew
