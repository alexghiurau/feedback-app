function FeedbackStats({ feedback }: FeedbackStatsProps) {
  // calc rating avg
  let avg: number =
    feedback.reduce((acc, curr) => {
      return acc + curr.rating;
    }, 0) / feedback.length;

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(avg) ? 0 : avg}</h4>
    </div>
  );
}

type FeedbackStatsProps = {
  feedback: { id: number; rating: number; text: string }[];
};

export default FeedbackStats;
