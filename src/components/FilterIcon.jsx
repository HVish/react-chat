import React from 'react';
import PropTypes from 'prop-types';
import {Motion, spring} from 'react-motion';
import {grey, lightBlue} from 'material-ui/colors';
import ArrowBackIcon from 'material-ui-icons/ArrowForward';
import SearchIcon from 'material-ui-icons/Search';

class FilterIcon extends React.Component {
    render() {
        const springConfig = {
            stiffness: 200,
            damping: 20
        };
        const efffects = {
            defaultStyle: {
                rotate: 0,
                opacity: 1
            },
            style: {
                rotate: spring(this.props.active ? 180 : 0, springConfig),
                opacity: this.props.active ? 0 : 1
            }
        };
        return <Motion {...efffects}>
            {(styles) => {
                const commonStyles = {
                    marginRight: '8px'
                };
                const searchStyle = {
                    ...commonStyles,
                    color: grey[500],
                    opacity: styles.opacity, 
                    transform: `rotateZ(${styles.rotate}deg)`
                };
                const arrowStyle = {
                    ...commonStyles,
                    cursor: 'pointer',
                    color: lightBlue['A200'],
                    opacity: 1-styles.opacity, 
                    transform: `rotateZ(${styles.rotate}deg)`
                };
                if (styles.opacity === 1) {
                    arrowStyle.display = 'none';
                } else {
                    searchStyle.display = 'none';
                }
                return <div style={{display: 'flex'}}>
                    <SearchIcon style={searchStyle}/>
                    <ArrowBackIcon style={arrowStyle} onClick={this.props.onBackPressed}/>
                </div>;
            }}
        </Motion>;
    }
}

FilterIcon.propTypes = {
    active: PropTypes.bool,
    onBackPressed: PropTypes.func.isRequired
};

export default FilterIcon;