import {v4 as uuidv4} from 'uuid'
import { motion,AnimatePresence } from 'framer-motion';
import {useState} from 'react'
import Header from "./components/Header";
import FeedbackData from './data/FeedbackData';
import FeedbackList from './components/FeedbackList';
import FeedbackForm from './components/FeedbackForm';
import FeedbackStatus from './components/FeedbackStatus';
function App() {
  const [feedback,setFeedback]=useState(FeedbackData)

  const addFeedback=(newFeedback)=>{
     newFeedback.id=uuidv4()
     setFeedback([newFeedback,...feedback])
  }
  const deleteFeedback=(id)=>{
  
      if (window.confirm('Are you sure you want to delete?')) {
        setFeedback(feedback.filter((item) => item.id !== id))
    }
  

  }
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStatus feedback={feedback} />
        <FeedbackList feedback={feedback}
        handleDelete={deleteFeedback}
        />
        
      </div>
    </>
  );
}
export default App;
