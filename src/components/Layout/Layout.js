import React, { Component } from 'react';
import Main from '../../containers/main/main';
import Aux from '../../hoc/Aux';
import Toolbar from '../UI/Toolbar/Toolbar';
import Sidedrawer from '../UI/Sidedrawer/Sidedrawer'

class Layout extends Component {
    state = {
        showSideDrawer: false,
    }
    sideDrawerToggleHandler = () => {
        this.setState((state, props) => {
            return {
                showSideDrawer: !state.showSideDrawer,
            }
        })

    }
    render() {
        return (<Aux>
            {this.props.children}
            <div>
                <Toolbar />
                <Sidedrawer showSideDrawer={this.state.showSideDrawer} sideDrawerToggle={this.sideDrawerToggleHandler} />

            </div>
            <main>
                <Main />
            </main>

        </Aux>)

    }
}

export default Layout;