import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HouseGallery = () => {
  const [houseList, setHouseList] = useState({});

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch('http://localhost:8080/houses');
      const data = await res.json();
      setHouseList(data);

      return data;
    };
    (async () => await getUsers())();
  }, []);

  return (
    <div className="galleryContainer">
      {houseList.length ? (
        houseList.map((house) => (
          <div key={house.id}>
            <Link to={`/houses/${house.id}`}>
              <img src={house.image} alt={house.name} />
              <h3>{house.name}</h3>
            </Link>
          </div>
        ))
      ) : (
        <h2>No Users</h2>
      )}
    </div>
  );
};

export default HouseGallery;
