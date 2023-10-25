import React, { useCallback, useEffect, useState } from 'react';
import UserProfile from '../components/UserProfile';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function UserList(props) {

    const [criteria, setCriteria] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // version fetch
        // fetch(('https://jsonplaceholder.typicode.com/users'))
        //     .then(res => res.json())
        //     .then(result => setUsers(result))

        // version axios
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(result => setUsers(result.data))
    }, []);

    const handleSearch = useCallback((event) => {
        setCriteria(event.target.value);
    }, []);

    useEffect(() => {
        setFilteredUsers(users.filter(user => user.name.toLowerCase().includes(criteria.toLowerCase())));
    }, [criteria, users]);

    const deleteUser = useCallback((id) => {
        setUsers(users.filter(user => user.id !== id));
    }, [users]);

    return (
        <div>
            <h1>Liste des utilisateurs</h1>
            <input type="text" className="form-control" placeholder='Recherche' onChange={handleSearch} />
            <div className='container'>
                <div className="row mt-3">
                    {users.length ? (
                        filteredUsers.map((user, index) =>
                            <div
                                key={index}
                                className="col-6 col-sm-4 col-md-3 mb-3"
                                onClick={() => navigate('/users/' + user.id)}
                                style={{ cursor: 'pointer' }}
                            >
                                <UserProfile user={user} deleteUser={deleteUser} />
                            </div>)
                    ) : (
                        <div className="col-lg-3 col-md-4 col-xs-6 mb-3 d-flex justify-content-center align-items-center">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    )
                    }

                </div>
            </div>
        </div>
    );
}

export default UserList;