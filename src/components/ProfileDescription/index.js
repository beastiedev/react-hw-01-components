import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const ProfileDescription = ({ name, tag, location, avatar }) => {
    return (
        <div className={styles.description}>
            <img
                src={avatar}
                alt="user avatar"
                className={styles.avatar}
            />
            <p className={styles.name}>{name}</p>
            <p className={styles.tag}>@{tag}</p>
            <p className={styles.location}>{location}</p>
        </div>
    )
};

ProfileDescription.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    }),
}

ProfileDescription.defaultProps = {
    name: 'Stranger',
    avatar: 'https://bit.ly/3lAYNyj',
}

export default ProfileDescription;