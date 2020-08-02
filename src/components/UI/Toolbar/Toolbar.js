import React, { Component } from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.module.css'


class Toolbar extends Component {


    render() {

        return (<nav className={classes.Toolbar}>
            <ul>
                <NavigationItems />
            </ul>
        </nav >)
    }
}

export default Toolbar;