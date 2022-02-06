import { useState } from 'react';

import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import { FeedbackData } from './data/feedbackData';
import FeedbackStats from './components/FeedbackStats';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id: number) =>
    setFeedback(feedback.filter((item) => item.id !== id));

  return (
    <>
      <Header text='Hello there!' />
      <div className='container'>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
