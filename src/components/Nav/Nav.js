import React from 'react'
import NavList from './NavList'

export default function Nav (props) {
  return (
    <nav className="nav">
      <span className="heading heading--small">Choose a topic:</span>
      <NavList list={[
        { to: '/', text: 'Home'},
        { to: '/states', text: 'States'},
        { to: '/countries', text: 'Countries'},
      ]}/>
    </nav>
  )
}
