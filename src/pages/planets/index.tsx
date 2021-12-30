import React from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loader from '../../components/loader';
import IPlanets from '../../types/planets';
import { getIdFromUrl } from '../../utilities';

// Endpoint: 'https://swapi.dev/api/planets'
// Title style: style={{ marginBottom: 10, fontSize: 40, fontWeight: 700 }}
// UrlID: getIdFromUrl(x.url);
// Link: `/planet/${id}`
// Link style: style={{ display: 'flex', justifyContent: 'center' }}

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
    ></div>
  );
};

export default PlanetsPage;
