import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

import { useDebounce } from 'use-debounce';

/* import { getHouses } from '../services/getHouses.js'; */

const FindYourHouse = () => {
  const [filter, setFilter] = useState('');
  const [houseCollection, setHouseCollection] = useState([]);

  const [debounceFilter] = useDebounce(filter, 700);

  useEffect(() => {
    const getHouses = async () => {
      const data = await fetch(`http://localhost:8080/houses?name=${filter}`);
      const dataToJson = await data.json();
      setHouseCollection(dataToJson);
      return dataToJson;
    };
    getHouses();
  }, [debounceFilter]);

  return (
    <>
      <input type="text" value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ul>
        {houseCollection.map((house) => (
          <li key={house.id}>
            <Link to={`/houses/${house.id}`}>
              <h1>{house.name}</h1>
              <img src={house.image} alt={house.name} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FindYourHouse;
