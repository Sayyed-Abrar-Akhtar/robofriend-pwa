import React from 'react';

const Card = ({ name, email, id }) => {
  return (
    <div className='bg-light-green dib br3 ma2 grow bw2 shadow-2'>
      <img src={`https://robohash.org/${id}?150*150`} alt='robots' />
      <div className=''>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
