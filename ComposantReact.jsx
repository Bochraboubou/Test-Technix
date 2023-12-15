
import React, { useState, useEffect } from 'react';

const ApiListComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erreur lors de la récupération des données:', error));
  }, []);

  return (
    <div>
      <h1>Liste d'éléments depuis JSONPlaceholder API</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiListComponent;
