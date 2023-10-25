import React, { useCallback, useContext } from 'react';
import propTypes from 'prop-types';
import { Context } from '../context';
import classnames from 'classnames';

const UserProfile = (props) => {

    const { context } = useContext(Context);

    const handleDelete = useCallback((event) => {
        event.stopPropagation();
        props.deleteUser(props.user.id);
    }, [props]);

    const infoComplete = <>
        <div>adresse : {props.user.address?.suite} {props.user.address?.street} {props.user.address?.city}</div>
        <div>Téléphone : {props.user.phone}</div>
        <div>Site web : {props.user.website}</div>
        <div>Entreprise : {props.user.company?.name}</div>
    </>

    return (
        <div className={classnames("card bg-" + context.theme, {
            'text-light': context.theme === "dark",
        })}
        >
            <img src="https://plus.unsplash.com/premium_photo-1683547021341-f708b9b3df38?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGF5c2FnZXxlbnwwfHwwfHx8MA%3D%3D" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.user.name}</h5>
                <div>username : {props.user.username}</div>
                <div>email : {props.user.email}</div>
                {props.complete && (infoComplete)}
                {props.deleteUser && <div className="d-flex justify-content-end">
                    <button className="btn btn-danger" onClick={handleDelete}>
                        <i className="bi bi-trash3"></i>
                    </button>
                </div>}
            </div>
        </div>
    );
};

UserProfile.propTypes = {
    user: propTypes.object.isRequired,
    deleteUser: propTypes.func,
    complete: propTypes.bool
};

export default UserProfile;