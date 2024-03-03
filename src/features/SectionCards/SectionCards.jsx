import React, { useEffect, useState } from 'react';

import { fetchUsersList, usersListSelector } from '../../store/app';

import { useDispatch, useSelector } from 'react-redux';

import { Button, Card } from '../../components';

import './sectionCards.scss';

export const SectionCards = () => {
  const dispatch = useDispatch();
  const usersList = useSelector(usersListSelector);

  const [currentPage, setCurrentPage] = useState(1);
  const [currentCount, setCurrentCount] = useState(6);

  const sortedUsers =
    usersList.users &&
    [...usersList.users].sort(
      (a, b) => new Date(b.registration_timestamp) - new Date(a.registration_timestamp),
    );

  const isMaxUsersReached = sortedUsers?.length >= usersList?.total_users;

  useEffect(() => {
    dispatch(fetchUsersList({ count: currentCount }));
  }, [dispatch, currentPage, currentCount]);

  const handleShowMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    setCurrentCount((prevCount) => prevCount + 6);
  };

  return (
    <section className="section-cards">
      <h1>Working with GET request</h1>
      <div className="section-cards__container">
        {sortedUsers
          ? sortedUsers.map((user) => (
              <Card
                key={user.id}
                photo={user.photo}
                name={user.name}
                position={user.position}
                email={user.email}
                phone={user.phone}
              />
            ))
          : 'No users available'}
      </div>
      {!isMaxUsersReached && usersList.page < usersList.total_pages && (
        <Button title="Show more" onClick={handleShowMore} />
      )}
    </section>
  );
};
