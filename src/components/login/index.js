import React from 'react'
import Topbar from 'app/topbar'
import Sidebar from 'app/sidebar'

function Login(props) {
  return (
    <div className={classes.root}>
      <Topbar />
      <Sidebar />
    </div>
  )
}

export default Login
