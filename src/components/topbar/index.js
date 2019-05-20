import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Typography from '@material-ui/core/Typography'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import classnames from 'classnames'

import { connect } from 'react-redux'
import { toggleSidebar } from '../../actions'

const sidebarWidth = 250

const style = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 10,
  },
  appbarShift: {
    marginLeft: sidebarWidth,
    width: `calc(100% - ${sidebarWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }
})

function Topbar(props) {
  const { title = 'Statistic', classes, toggleOpen, open } = props
  console.log(open, 'topbar')

  return (
    <div className={classes.root}>
      <AppBar className={classnames({[classes.appbarShift]: open})}>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" onClick={toggleOpen}>
            <MenuIcon />
          </IconButton>
          <Typography className={classes.grow} color="textPrimary" variant="h6" noWrap>
            { title }
          </Typography>
          <Button color="inherit">
            LOGIN
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapStateToProps = ({ sidebar: open }) => ({
  open
})

const mapDispatchToProps = dispatch => ({
  toggleOpen: () => dispatch(toggleSidebar())
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(style)(Topbar))
