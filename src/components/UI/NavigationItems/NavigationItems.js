import React, { Component } from 'react';
import NavigationItem from "./NavigationItem/NavigationItem";

class NavigationItems extends Component {
    render() {
        const NavItems = ['Home', 'Stats', 'About'].map((element, index) => {
            return <NavigationItem key={index} page={element} />
        });


        return (NavItems);
    }

}

export default NavigationItems;