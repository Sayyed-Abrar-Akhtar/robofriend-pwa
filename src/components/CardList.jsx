import React from 'react';

import Card from './Card';

function CardList({ robots }) {
  return (
    <div className='flex items-center flex-wrap justify-center ma2'>
      {robots.map((robot) => (
        <Card
          key={robot.id}
          name={robot.name}
          email={robot.email}
          id={robot.id}
        />
      ))}
    </div>
  );
}

export default CardList;
