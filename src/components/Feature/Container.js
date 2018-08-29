import React from 'react'
import List from './List'
import { withRouter } from 'react-router' // using withRouter to access the current route, which is stored in props.location


// Container component takes a 'fetchItems' prop and uses it to populate the tiled list

class Container extends React.Component {
  constructor(props) {
    super(props)

    // Entities belonging to the selected topic are fetched and stored in Items state
    this.state = {
      items: []
    }
  }

  // On mount, the selected topic's list of entities will be fetched and stored in state
  componentDidMount() {
    this.updateList()
  }


  // If the route location changes, the entities stored in items state will be cleared and reset based on the topic selected
  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.updateList()
    }
  }

  // When component mounts, current items state is cleared and reset
  updateList() {
    this.setState({
      items: []
    }, () => this.fetchItems())
  }

  // Retrieves entity list using the fetchFunction() function that the Route passes to it as a prop
  fetchItems() {
    this.props.fetchFunction()
    .then(values => {
      this.setState({
        items: values
      })
    })
  }


  render() {
    return (
      <div className='container'>
        <h2 className='heading feature-heading'>
          {this.props.title}
        </h2>


        {/* The selected topic's entity list is passed to the presentational List component*/}

        <List list={this.state.items} />

      </div>
    )
  }
}

// Wrapping component with react-router's withRouter
export default withRouter(Container)
