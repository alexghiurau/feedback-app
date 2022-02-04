import { useState } from 'react';

function FeedbackItem({ item }: FeedbackItemProps) {
  return (
    <div className='card'>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
    </div>
  );
}

type FeedbackItemProps = {
  item: { id: number; rating: number; text: string };
};

export default FeedbackItem;
