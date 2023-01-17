import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const HouseDetail = () => {
  const [house, setHouse] = useState({});

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const getHouses = async () => {
      const data = await fetch(`http://localhost:8080/houses/${id}`);
      const res = await data.json();
      setHouse(res);
    };
    getHouses();
  }, []);

  return (
    <div className="house">
      {house ? (
        <figure>
          <img src={house.image} alt={house.name} />
          <h2>{house.name}</h2>
          <h3>This House was founded by {house.founder}</h3>
          <h3>Their source of magic is the {house.element}</h3>
          <h3>Their spirit animal is the {house.animal}</h3>
          <h3>Their actual leader is {house.leader}</h3>
          <h3>You can find this wizzards in {house.land}</h3>
          <h3>Their motto is: {house.watchword}</h3>
        </figure>
      ) : (
        <p>This is not valid House</p>
      )}
    </div>
  );
};

export default HouseDetail;
