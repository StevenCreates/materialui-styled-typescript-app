import React from 'react'
import { styled } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';

const NavBar = styled(AppBar)({
  background: 'linear-gradient(45deg, #40E0D0 30%, #ffa500 90%)',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
});

const NavGrid = styled(Grid)({
    display: "grid",
    gridAutoColumns: "true"
})

export default function Header() {

    return (
        <>
        <NavBar>
            <NavGrid >
            <div>Home</div>
            <div>About</div>

            </NavGrid>
        </NavBar>
        </>
    )
}



