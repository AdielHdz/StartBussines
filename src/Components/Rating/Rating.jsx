import { Rating } from 'flowbite-react';

export default function DefaultRating() {
    return (
      <Rating>
       <div style={{ paddingRight: 10 }}>4</div>
        <Rating.Star style={{ color: 'yellow' }} />
        <Rating.Star style={{ color: 'yellow' }} />
        <Rating.Star style={{ color: 'yellow' }} />
        <Rating.Star style={{ color: 'yellow' }} />
        <Rating.Star  />
      </Rating>
    )
  }