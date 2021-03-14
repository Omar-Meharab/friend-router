import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend, setFriend] = useState({});
    const {name, phone, email, website} = friend;
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
        .then(res => res.json())
        .then(data =>setFriend(data))
    }, [])

    return (
        <div>
            <p>Friend Detail {friendId}</p>
            <p>Name: {name}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
            <p>Website: {website}</p>

        </div>
    );
};

export default FriendDetail;