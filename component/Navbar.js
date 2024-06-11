"use client";
import { AppBar, dividerClasses, Stack,styled, StyledEngineProvider, Toolbar, Typography } from '@mui/material'
import React from 'react'



const Styledtoolbar = styled(Toolbar)
({
 display:'flex',
 justifyContent:'space-between',
 background:'black'
})



const Navbar = () => {
  return (
    <AppBar position='static'>
        <Styledtoolbar>
            <Typography variant='h5'>Next</Typography>
                <Stack direction='row'justifyContent='space-between' width='20%'>
                    <a>Home</a>
                    <a>About</a>
                    <a>Contact</a>
                </Stack>
        </Styledtoolbar>
    </AppBar>
  )
}

export default Navbar