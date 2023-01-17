import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import HouseForm from '../components/HouseForm';

const GenerateHouse = () => {
  const [generateHouse, setGenerateHouse] = useState({});

  useEffect(() => {
    const getNewHouse = async () => {
      const data = await fetch('http://localhost:8080/houses');
      const res = await data.json();
      setGenerateHouse(res);
    };
    getNewHouse();
  }, []);

  return (
    <div className="formHouse">
      <HouseForm />
      <div className="linkGallery">
        <Link to="houses">Established House's Gallery</Link>
      </div>
    </div>
  );
};

export default GenerateHouse;
