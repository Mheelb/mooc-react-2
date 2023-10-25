import React, {useCallback, useState} from 'react';

function Counter(props) {
    const [count, setCount] = useState(0);
    const [historique, setHistorique] = useState([]);

    const historiqueCounter = useCallback((newCount) => {
        setHistorique([...historique, count]);
        setCount(newCount);
    }, [count, historique]);

    return (
        <div>
            {count} : le compteur est {count % 2 ? 'impair'  : 'pair'}<br/>
            <button onClick={() => historiqueCounter(count + 1)} className='btn btn-success me-1'>+</button>
            <button onClick={() => historiqueCounter(count - 1)} className='btn btn-danger me-1'>-</button>
            <br/>
            {historique.map((value, index) => <div key={index}>Valeur {index} : {value}</div>)}
        </div>
    );
}

export default Counter;