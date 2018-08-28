import React from 'react'
import List from './List'
// using withRouter to access the current route, which is stored in props.location
import { withRouter } from 'react-router'



class Container extends React.Component {
  constructor(props) {
    super(props)

      //  entities belonging to the selected topic are fetched and stored in {items} state
    this.state = {
      items: []
    }

    this.fetchItems = this.fetchItems.bind(this)
    this.updateList = this.updateList.bind(this)
  }


  // on mount, the proper entities will be fetched and stored in state based on the selected route
  componentDidMount() {
    this.updateList()
  }


  // if the route location changes, the entities stored in the { items } state will be cleared and reset to the topic selected
  componentDidUpdate(prevProps) {
    if (prevProps.location !== this.props.location) {
      this.updateList()
    }
  }

// retrieves correct list based on route via location prop
  fetchItems() {
    this.props.fetchFunction()
    .then(values => {
      this.setState({
        items: values
      })
    })
  }


    // clears current {items} state and sets to list fetched based on location prop
  updateList() {
    this.setState({
      items: []
    }, this.fetchItems())
  }


  render() {
    return (
      <div>
        {/* The selected Topic's list of entities is passed to the presentational List component*/}
        <List list={this.state.items} />
      </div>
    )
  }
}

export default withRouter(Container)
