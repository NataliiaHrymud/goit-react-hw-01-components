import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './friend.module.css';

function onlineStatus (item) {
    const iconClasses = [styles.status];

    if(item === false) {
        iconClasses.push(styles.statusFalse)
    } 
    return iconClasses.join(" ");
};

const FriendListItem = ({avatar, name, isOnline, alt}) => {
    return (
        <Fragment>
            <span className={onlineStatus(isOnline)}></span>
            <img className={styles.avatar} src={avatar} alt={alt} width="48" />
            <p className={styles.name}>{name}</p>
        </Fragment>
    )
}

FriendListItem.defaultProps = {
    alt: "User profile photo"
};

FriendListItem.propTypes = {
    alt: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired
        })
    )
};

export default FriendListItem;