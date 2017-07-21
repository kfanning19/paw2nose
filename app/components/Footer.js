import React from 'react'

// The Header creates links that can be used to navigate
// between routes.
const Footer = () => (
  <footer className="page-footer">
    <div className="container">
      <div className="row">
        <div className="col s10">
          <h5 className="white-text">Paw2Nose © 2017</h5>
        </div>
        <div className="col s2">
          <a className="white-text " href="#!">
             <i className="fa fa-github-alt fa-3x" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer