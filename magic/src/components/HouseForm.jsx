import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useState } from 'react';

const HouseForm = () => {
  const [name, setName] = useState('');
  const [founder, setFounder] = useState('');
  const [element, setElement] = useState('');
  const [animal, setAnimal] = useState('');
  const [land, setLand] = useState('');
  const [leader, setLeader] = useState('');
  const [image, setImage] = useState('');
  const [watchword, setWatchword] = useState('');

  const constituteHouse = (e) => {
    e.preventDefault(e);
    const house = {
      id: uuidv4(),
      name: name,
      founder: founder,
      element: element,
      animal: animal,
      land: land,
      leader: leader,
      image: image,
      watchword: watchword,
    };
    postHouseToJson(house);
  };

  const postHouseToJson = async (house) => {
    axios({
      method: 'POST',
      url: 'http://localhost:8080/houses',
      data: house,
    });
  };
  return (
    <form onSubmit={(e) => constituteHouse(e)}>
      <fieldset>
        <div className="labelInput">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="labelInput">
          <label htmlFor="founder">Founder:</label>
          <input
            type="text"
            name="founder"
            id="founder"
            onChange={(e) => setFounder(e.target.value)}
          />
        </div>
        <div className="labelInput">
          <label htmlFor="leader">Leader:</label>
          <input
            type="text"
            name="leader"
            id="leader"
            onChange={(e) => setLeader(e.target.value)}
          />
        </div>
        <div className="labelInput">
          <label htmlFor="image">Shield:</label>
          <input
            type="text"
            name="image"
            id="image"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="labelInput">
          <label htmlFor="element">Element:</label>
          <input
            type="text"
            name="element"
            id="element"
            onChange={(e) => setElement(e.target.value)}
          />
        </div>
        <div className="labelInput">
          <label htmlFor="animal">Animal:</label>
          <input
            type="text"
            name="animal"
            id="animal"
            onChange={(e) => setAnimal(e.target.value)}
          />
        </div>
        <div className="labelInput">
          <label htmlFor="land">Lands:</label>
          <input
            type="text"
            name="land"
            id="land"
            onChange={(e) => setLand(e.target.value)}
          />
        </div>
        <div className="labelInput">
          <label htmlFor="whatchword">Motto:</label>
          <input
            type="text"
            name="whatchword"
            id="whatchword"
            onChange={(e) => setWatchword(e.target.value)}
          />
        </div>
      </fieldset>
      <input type="submit" value="Establish House" className="establishHouse" />
    </form>
  );
};

export default HouseForm;
