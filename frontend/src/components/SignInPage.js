import React from 'react'

class SignInPage extends React.Component {

  state = {
    formData: {
      username: '',
      password: '',
    },
  }

  handleChange = (e) => {
    const formData = { ...this.state.formData, [e.target.id]: e.target.value }
    this.setState({ formData })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      this.props.history.push('/choose')
    } catch (err) {
      console.log(err)
    }
  }

  isNotValid = () => {
    return (this.state.formData.username  === '' || this.state.formData.password === '')
  }

  render() {
    return (
      <div className='form-container window'>
        <h1>Sign In</h1>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='username'>
            User Name:
          </label>
          <input id='username' type='text' placeholder='Please enter your User Name' value={this.state.formData.username} onChange={this.handleChange}/>
          <label htmlFor='password'>
            Password:
          </label>
          <input id='password' type='password' placeholder='Please enter your Password' value={this.state.formData.password} onChange={this.handleChange}/>
          <input type='submit' value='Sign In' className={this.isNotValid() ? 'disabled-btn' : 'submit-btn'} disabled={this.isNotValid()}/>
        </form>
      </div>
    )
  }
}

export default SignInPage
