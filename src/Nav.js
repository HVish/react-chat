import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const styles = {
    actions: {
        marginLeft: "auto",
        marginTop: 7
    }
};

/**
 * Action buttons on the right of navigation bar
 */
const NavActionsRight = (props) => (
    <div style={styles.actions}>
        <FlatButton key={1} style={{ color: "#fff" }} label="Signup" />
        <FlatButton key={2} style={{ color: "#fff" }} label="Signin" />
    </div>
);

NavActionsRight.muiName = 'IconMenu';

/**
 * Top navigation bar
 * By default, the left icon is a navigation-menu.
 */
const NavBar = () => (
    <AppBar
        title="ChatterBox"
        iconElementRight={<NavActionsRight/>}
    />
);

export default NavBar;