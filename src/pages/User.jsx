import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserProfile from '../components/UserProfile';

const User = () => {

    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users/' + id)
            .then(result => setUser(result.data))
    }, [id]);

    return (
        <div>
            {user.name ? (
                <UserProfile user={user} complete></UserProfile>
            ) : (
                <div className="col-lg-3 col-md-4 col-xs-6 mb-3 d-flex justify-content-center align-items-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>)
            }
        </div>
    );
};

export default User;