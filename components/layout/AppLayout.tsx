import React, { FC, useState } from 'react'
import { AppBar, Badge, Container, IconButton, Toolbar } from '@mui/material'
import { useRouter } from 'next/router'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import NotificationsIcon from '@mui/icons-material/Notifications'
import MenuIcon from '@mui/icons-material/Menu'
import Offset from './Offset'
import Menus from './Menus'

interface AppLayoutProps {
  leftActionType?: 'menu' | 'back'
}

const AppLayout: FC<React.PropsWithChildren<AppLayoutProps>> = ({ children, leftActionType }) => {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleBackClick = () => {
    router.back()
  }

  const handleMenuOpen = () => {
    setMenuOpen(true)
  }
  const handleMenuClose = () => {
    setMenuOpen(false)
  }

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          {leftActionType === 'menu' ? (
            <IconButton color="inherit" edge="start" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
          ) : (
            <IconButton color="inherit" edge="start" onClick={handleBackClick}>
              <ArrowBackIcon />
            </IconButton>
          )}
          <IconButton size="large" aria-label="noti-icon" color="inherit" href="/">
            <Badge color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Offset />
      <Container maxWidth={false}>{children}</Container>
      <Menus open={menuOpen} onClose={handleMenuClose} />
    </>
  )
}

export default AppLayout