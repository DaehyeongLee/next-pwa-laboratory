import React, { useContext } from 'react'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'
import { ColorModeContext } from '@/pages/_app'

const ToggleColorMode = () => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)
  return (
    <IconButton onClick={colorMode.toggleColorMode} color="inherit">
      {theme.palette.mode} mode
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  )
}

export default ToggleColorMode