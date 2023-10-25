import React, { useCallback, useEffect, useState } from 'react';

const roles = ['Administrateur', 'Utilisateur', 'Modérateur', 'Comptable', 'Directeur', 'Secrétaire']

const Roles = () => {
    const [criteria, setCriteria] = useState('');
    const hundleChange = useCallback((event) => {
        setCriteria(event.target.value);
    }, []);

    const [rolesFiltered, setRolesFiltered] = useState([]);
    useEffect(() => {
        setRolesFiltered(roles.filter(role => role.toLowerCase().includes(criteria.toLowerCase())));
    }, [criteria]);

    return (
        <div>
            <h1>Liste des rôles</h1>
            <input type="text" placeholder='Recherche' valeur={criteria} onChange={hundleChange} />
            <br />
            {rolesFiltered.length ? rolesFiltered.map((role, index) => <li key={index}>{role}</li>) : 'Aucun résultat'}
        </div>
    );
};

export default Roles;