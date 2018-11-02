import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='container pb-10'> {/*text-center*/}
    {/*<h1>React Redux Starter Kit</h1>*/}
    <div className="row">
      <div className="col-md-12 text-center">
        <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
        {' · '}
        <Link to='/companies' activeClassName='page-layout__nav-item--active'>Company</Link>
      </div>
    </div>
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
