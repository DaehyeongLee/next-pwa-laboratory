import React, { FC } from 'react'
import { Drawer } from '@mui/material'
import { useTranslation } from 'next-i18next'

interface MenuListProps {
  open: boolean
  onClose(): void
}

const Menus: FC<React.PropsWithChildren<MenuListProps>> = ({ open, onClose }) => {
  const { t } = useTranslation('common')

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      {t('menu')}
    </Drawer>
  )
}

export default Menus