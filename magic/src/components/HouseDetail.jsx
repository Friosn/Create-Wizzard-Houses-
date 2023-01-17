import React from 'react';

const HouseDetail = ({ house }) => {
  return (
    <div className="house">
      {house ? (
        <figure>
          <img src={house.image} alt={house.name} />
          <h2>{house.name}</h2>
        </figure>
      ) : (
        <p>This is not valid House</p>
      )}
    </div>
  );
};

export default HouseDetail;
