import { FaTimes } from 'react-icons/fa';

import Card from './shared/Card';

function FeedbackItem({ item, handleDelete }: FeedbackItemProps) {
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button className='close'>
        <FaTimes onClick={() => handleDelete(item.id)} color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

type FeedbackItemProps = {
  item: { id: number; rating: number; text: string };
  handleDelete: (id: number) => void;
};

export default FeedbackItem;
