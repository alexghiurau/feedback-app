import Card from './shared/Card';

function FeedbackItem({ item }: FeedbackItemProps) {
  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

type FeedbackItemProps = {
  item: { id: number; rating: number; text: string };
};

export default FeedbackItem;
