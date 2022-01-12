import React, {useEffect, useState} from 'react';
//import data from '../fakeDB/data';
import Story from "./Story";
import faker from '@faker-js/faker';

function Stories(props) {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.createCard(),
            id: i+1,
            avatar: `/fakeAvatars/${i+1}.jpg`
        }))
        setSuggestions(suggestions);
    }, []);

    return (
        <div className={'flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'}>
            {suggestions.sort(() => Math.random() - 0.5).map(profile => (
                <Story key={profile.id} img={profile.avatar} username={profile.username} />
            ))}
        </div>
    );
}

export default Stories;