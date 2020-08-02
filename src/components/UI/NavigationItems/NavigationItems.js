import React, { Component } from 'react';
import NavigationItem from "./NavigationItem/NavigationItem";

class NavigationItems extends Component {
    render() {
        const NavItems = ['Home', 'Stats', 'About'].map(element => {
            return <NavigationItem page={element} />
        });


        return (NavItems);
    }

}

export default NavigationItems;