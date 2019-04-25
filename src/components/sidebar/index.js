import React, { useState } from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import { makeStyles, useTheme } from '@material-ui/styles'

function Sidebar(props) {
  const [open, toggleOpen] = useState(true)
  return (
    <div>
      <SwipeableDrawer variant="permanent" open={open} onClose={e => console.log(e)}>
        <div onClick={() => toggleOpen(!open)}>toggle</div>
        233
      </SwipeableDrawer>
    </div>
  )
}

export default Sidebar
