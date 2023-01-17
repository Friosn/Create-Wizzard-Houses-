export const getHouses = async (filter) => {
  const data = await fetch(`http://localhost:8080/houses/${filter}`);
  const dataToJson = await data.json();
  return dataToJson;
};
