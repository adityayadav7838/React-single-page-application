import React, { Fragment } from 'react'
import { Navigate } from 'react-router-dom'
const PrivateRoute = ({children}) => {
    let id=localStorage.getItem("userid")
  return (
    <Fragment>
      {id? <Fragment>{children}</Fragment>:<Navigate to={"/"}/>}
      </Fragment>
  )
}

export default PrivateRoute
