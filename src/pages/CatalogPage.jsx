import { useState, useEffect } from 'react';

import { getCars } from 'API/api';

export const CatalogPage = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);

  const urlParams = {
    params: {
      page: page,
      limit: 8,
    },
  };

  useEffect(() => {
    getCars(urlParams).then(res => setCars(res));
    setPage(page + 1);
  }, []);

  const handleLoadMore = () => {
    getCars(urlParams).then(res => {
      setCars([...cars, ...res]);
    });

    setPage(page + 1);

    console.log(page);
  };

  return (
    <>
      <h1>Catalog page</h1>

      <ul>
        {cars.map(car => (
          <li key={car.id}>{car.make}</li>
        ))}
      </ul>
      <button onClick={handleLoadMore}>Load more</button>
    </>
  );
};
