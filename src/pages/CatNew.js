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
      <div className="main-body">
        <h3>Add a Cat Profile</h3>
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
            onClick={ this.handleSubmit }
          >
            Create New Cat Profile
          </Button>
        </Form>

        { this.state.submitted && <Redirect to="/catindex" /> }
      </div>
    )
  }
}
export default CatNew
