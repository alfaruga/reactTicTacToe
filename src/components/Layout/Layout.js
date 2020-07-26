import React from 'react';
import Main from '../../containers/main/main'
import Aux from '../../hoc/Aux'

const layout = (props) => (
    <Aux>
        {props.children}
        <div>Toolbar sidedrawer backdrop</div>
        <Main></Main>

    </Aux>


)

export default layout;