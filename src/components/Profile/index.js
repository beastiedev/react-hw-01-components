import React from 'react';
import ProfileDescription from '../ProfileDescription';
import ProfileStats from '../ProfileStats';

const Profile = ({ name, tag, location, avatar, stats }) => {
    return (
        <div className="profile">
            <ProfileDescription
                name={name}
                tag={tag}
                location={location}
                avatar={avatar} />
            <ProfileStats
                stats={stats} />
        </div>
    )
}

export default Profile;