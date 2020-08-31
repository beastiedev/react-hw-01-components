import React from 'react';
import PropTypes from 'prop-types';

const ProfileDescription = ({ name, tag, location, avatar }) => {
    return (
        <div className="description">
            <img
                src={avatar}
                alt="user avatar"
                className="avatar"
            />
            <p className="name">{name}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
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