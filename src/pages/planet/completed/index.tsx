import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import Loader from '../../../components/loader';
import IPlanet from '../../../types/planet';
import { getIdFromUrl } from '../../../utilities';

const PlanetPage = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useQuery<IPlanet>(
    ['getPlanet', id],
    async () => {
      const data = await fetch(`https://swapi.dev/api/planets/${id}`);

      return data.json();
    },
    { enabled: !!id },
  );

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
      {isLoading || data === undefined ? (
        <Loader alt='Planet loading' />
      ) : (
        <>
          <div id='title' style={{ marginBottom: 10, fontSize: 40, fontWeight: 700 }}>
            Planet Information
          </div>
          <div>{data.name}</div>
          <div>{data.climate}</div>
          <div>{data.population}</div>
        </>
      )}
    </div>
  );
};

export default PlanetPage;
