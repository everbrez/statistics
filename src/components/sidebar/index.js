import React, { useState } from 'react'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import { makeStyles, useTheme } from '@material-ui/styles'

import { connect } from 'react-redux'
import { toggleSidebar } from '../../actions'

const useStyles = makeStyles(theme => ({
  root: {
    width: 250,
  },
  content: {
    width: 250
  }
}))

function Sidebar(props) {
  const { open, onClose, onOpen } = props
  const classes = useStyles()
  return (
    <div>
      <SwipeableDrawer className={classes.root} anchor="left" open={open} onClose={onClose} onOpen={(e) => console.log(e)}>
        <div className={classes.content}>
          233333
        </div>
      </SwipeableDrawer>
    </div>
  )
}

const mapStateToProps = ({ sidebar: open }) => ({
  open
})

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch((toggleSidebar(false))),
  onOpen: () => dispatch((toggleSidebar(true)))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar) 
