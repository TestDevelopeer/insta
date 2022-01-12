import React from 'react';
import data from '../fakeDB/data';
import Story from "./Story";

function Stories(props) {
    return (
        <div className="">
            {data.map(profile => (
                <Story key={profile.id} img={profile.avatar} username={profile.username} />
            ))}
        </div>
    );
}

export default Stories;