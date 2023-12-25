import React, { FC } from 'react'
import { Box, Drawer, ListItemButton, Typography, ListItemIcon } from '@mui/material'
import { useTranslation } from 'next-i18next'
import HomeIcon from '@mui/icons-material/Home'

interface MenuListProps {
  open: boolean
  onClose(): void
}

const menuList = [
  {
    href: '/',
    page: 'home',
    icon: <HomeIcon />,
  },
]

const Menus: FC<React.PropsWithChildren<MenuListProps>> = ({ open, onClose }) => {
  const { t } = useTranslation('common')

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: '312px',
          borderTopRightRadius: 12,
          borderBottomRightRadius: 12,
        },
      }}
    >
      <Box>
        {
          menuList.map(({ href, page, icon }) => (
            <ListItemButton
              key={page}
              href={href}
              sx={{
                height: '56px',
              }}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <Typography variant="body1">
                {t(page)}
              </Typography>
            </ListItemButton>
          ))
        }
      </Box>
    </Drawer>
  )
}

export default Menus