import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loader from '../../components/loader';
import IPlanets from '../../types/planets';
import { getIdFromUrl } from '../../utilities';

const PlanetsPage = () => {
  const { data, isLoading } = useQuery<IPlanets>('getPlanets', async () => {
    const data = await fetch('https://swapi.dev/api/planets');

    return data.json();
  });

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      {isLoading ? (
        <Loader alt='Planets loading' />
      ) : (
        <div>
          <div style={{ marginBottom: 10, fontSize: 40, fontWeight: 700 }}>Star Wars Planets</div>
          {data?.results.map((x) => {
            const id = getIdFromUrl(x.url);
            return (
              <Link to={`/planet/${id}`} key={id} style={{ display: 'flex', justifyContent: 'center' }}>
                {x.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default PlanetsPage;
