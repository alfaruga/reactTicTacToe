import React from 'react';
import classes from './Sidedrawer.module.css'
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';
import DrawerToggle from './DrawerToggle/DrawerToggle'


const sidedrawer = (props) => (
    < Aux props>
        <DrawerToggle clicked={props.sideDrawerToggle} />
        <Backdrop showBack={props.showSideDrawer} backdropToggle={props.sideDrawerToggle} />
        <nav style={
            {
                display: props.showSideDrawer ? null : 'none'
            }
        }
            className={classes.Sidedrawer}>
            <ul>
                <NavigationItems />
            </ul>
        </nav>
    </Aux >
)

export default sidedrawer;