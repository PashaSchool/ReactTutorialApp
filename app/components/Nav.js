import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = () => {
  return (
  <ul className='navigation'>
      <li>
        <NavLink exact to='/' activeClassName='active'>
          Wether
        </NavLink>
      </li>

      <li>
        <NavLink to='/about' activeClassName='active'>
          about
        </NavLink>
      </li>

      <li>
        <NavLink to='/examples' activeClassName='active'>
          examples
        </NavLink>
      </li>
  </ul>
  )
}

module.exports = Nav;
