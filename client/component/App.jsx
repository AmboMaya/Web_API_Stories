import React from 'react'
import request from 'superagent'

class App extends React.Component {


  componentDidMount () {
    request
      .get('/')
      .then(res => {
        // We can only use the API data here
        
      })
      .catch(err => {
        // Error messages will be available here
        console.error(err)
      })
  }

  render () {
    return (
      <React.Fragment>
        <h1>TesT</h1>
      </React.Fragment>
    )
  }
}

export default App