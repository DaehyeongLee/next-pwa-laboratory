import React, { FC } from 'react'
import { AppBar, Badge, Container, IconButton, Toolbar } from '@mui/material'
import { useRouter } from 'next/router'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import NotificationsIcon from '@mui/icons-material/Notifications'

const AppLayout: FC<React.PropsWithChildren> = ({ children }) => {
  const router = useRouter()

  const handleBackClick = () => {
    router.back()
  }

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={handleBackClick}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton size="large" aria-label="noti-icon" color="inherit" href="/">
            <Badge color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container maxWidth={false}>{children}</Container>
    </>
  )
}

export default AppLayout