import React from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import Loader from '../../components/loader';
import IPlanet from '../../types/planet';
import { getIdFromUrl } from '../../utilities';

// Planet endpoint: `https://swapi.dev/api/planets/${id}`
// Get url params: const { id } = useParams<{ id: string }>();
// Title  style: style={{ marginBottom: 10, fontSize: 40, fontWeight: 700 }}

const PlanetPage = () => {
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

export default PlanetPage;
