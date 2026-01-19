import React from 'react'
import Tour from './Tour';

const Tours = ({tours, removeTour}) => {

  return (
  <section>
    <div className='title'>
        <h2>our tours</h2>
        <div class="title-underline"></div>
    </div>
    <div class="tours">
        {tours.map((tour) => {
            return <Tour key={tour.id} {...tour} removeTour={removeTour}/>;
        })};
    </div>
  </section>
  );
}

export default Tours;
