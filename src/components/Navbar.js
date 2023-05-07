import React from 'react'
import {Link,to} from "react-router-dom"
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
     

      <Link to="/form"><button className="btn btn-outline-success " type="submit">Create A movie</button></Link>  
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
