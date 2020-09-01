import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={styles.item}>
            <span className={`${styles.status} ${isOnline ? styles.status__online : styles.status__offline}`}></span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{name}</p>
        </li>
    )
};

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    isOnline: PropTypes.bool,
}

FriendListItem.defaultProps = {
    name: 'Stranger',
    avatar: 'https://bit.ly/3lAYNyj',
}

export default FriendListItem;