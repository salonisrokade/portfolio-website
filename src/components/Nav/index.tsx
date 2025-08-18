import * as React from 'react'
import { GitHub, LinkedIn } from '@mui/icons-material'
import { Box, Button, createTheme, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, ThemeProvider } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
export default function Nav() {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }
  const navLinks = [
    {
      name: 'About Me',
      link: '#about-me',
    },
    {
      name: 'Projects',
      link: '#projects',
    },
    // {
    //   name: 'Playground',
    //   link: '#playground',
    // },
    {
      name: 'Skills',
      link: '#skills',
    },
    {
      name: 'Experience',
      link: '#experience',
    },
  ]
  return (
    <ThemeProvider theme={darkTheme}>
    <nav>
        <div className='nav-links'>
            {navLinks.map((item) => {
                return (
                <li>
                    <a href={item.link}>
                    <p>{item.name}</p>
                    </a>
                </li>
                )
            })}
        </div>
      <Button onClick={toggleDrawer(true)} className='hamburger-menu'><MenuIcon sx={{ color:'white'}}/> </Button>
      <Drawer open={open} anchor={'top'} onClose={toggleDrawer(false)}>
        <Box>
          <List>
            {navLinks.map((item) => {
              return (
                <ListItemButton onClick={toggleDrawer(false)}>
                    <a href={item.link}>
                    <p>{item.name}</p>
                    </a>
                </ListItemButton>
                // <ListItem><ListItemButton><ListItemText primary={item.name} /></ListItemButton></ListItem>
              )
            })}
          </List>
        </Box>
      </Drawer>
      {/* <li>
        <IconButton href="https://www.linkedin.com/in/saloni-r/" target="blank">
          <LinkedIn sx={{ color: '#E0E0E0 ' }} />
        </IconButton>
      </li>
      <li>
        <IconButton href="https://github.com/salonisrokade/" target="blank">
          <GitHub sx={{ color: '#E0E0E0 ' }} />
        </IconButton>
      </li> */}
    </nav>
    </ThemeProvider>
  )
}
