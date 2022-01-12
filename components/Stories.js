import React from 'react';
import data from '../fakeDB/data';
import Story from "./Story";

function Stories(props) {
    return (
        <div className={'flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'}>
            {data.map(profile => (
                <Story key={profile.id} img={profile.avatar} username={profile.username} />
            ))}
        </div>
    );
}

export default Stories;