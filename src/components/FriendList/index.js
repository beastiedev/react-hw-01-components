import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem';
import styles from './styles.module.scss';


const FriendList = ({ friends }) => {
    return (
        <ul className={['widget-cont', styles.friendList].join(' ')}>
            {friends.map(friend => <FriendListItem
                key={friend.id}
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline} />)}
        </ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string,
            isOnline: PropTypes.bool,
        })
    )
}

export default FriendList;