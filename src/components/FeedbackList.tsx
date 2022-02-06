import FeedbackItem from './FeedbackItem';

function FeedbackList({ feedback, handleDelete }: FeedbackListProps) {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet.</p>;
  }
  return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

type FeedbackListProps = {
  feedback: { id: number; rating: number; text: string }[];
  handleDelete: (id: number) => void;
};

export default FeedbackList;
