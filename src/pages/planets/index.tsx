import React from 'react';
import { useQuery } from 'react-query';
import loader from '../../../src/images/loader.gif';
import Loader from '../../components/loader';
import IPlanets from '../../types/planets';

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
        <Loader />
      ) : (
        <>
          {data?.results.map((x) => (
            <div>{x.name}</div>
          ))}
        </>
      )}
    </div>
  );
};

export default PlanetsPage;
