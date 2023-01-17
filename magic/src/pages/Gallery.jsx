import React from 'react';

import FindYourHouse from '../components/FilterHouses';
import HouseGallery from '../components/HouseGallery';

const Gallery = () => {
  return (
    <div>
      <h3>⬇️ Invoke a House ⬇️</h3>
      <FindYourHouse />
      <HouseGallery />
    </div>
  );
};

export default Gallery;
