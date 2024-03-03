import React, { useEffect } from 'react';
import { Header, Layout } from '../components';
import { Hero, SectionCards, SectionForm } from '../features';

import { fetchPositionsList, fetchUsersList, usersListSelector, positionsListSelector } from '../store/app';

import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
  const dispatch = useDispatch();
  const usersList = useSelector(usersListSelector)
  const positionsList = useSelector(positionsListSelector)

  useEffect(() => {
    dispatch(fetchUsersList())
    dispatch(fetchPositionsList())
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Layout>
        <Hero />
        <SectionCards usersList={usersList} />
        <SectionForm positionsList={positionsList} />
      </Layout>
    </div>
  );
};
