import React from 'react'
import List from './List'

class Container extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: []
    }
  }

  componentDidMount() {
    this.props.fetchFunction()
    .then(values => {
      this.setState({
        items: values
      })
    })
  }






  render() {
    return (
      <div>
        <List list={this.state.items} />
      </div>
    )
  }
}

export default Container
