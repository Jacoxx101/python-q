import { useState, useEffect } from 'react';
import './index.css';
import { questionsData } from './data/questions';
import Checklist from './components/Checklist';
import QuestionDetailModal from './components/QuestionDetailModal';

function App() {
  const [checkedItems, setCheckedItems] = useState(() => {
    const saved = localStorage.getItem('python-practice-checked');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    localStorage.setItem('python-practice-checked', JSON.stringify(checkedItems));
  }, [checkedItems]);

  const handleToggleCheck = (id, e) => {
    e.stopPropagation();
    setCheckedItems(prev => 
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id]
    );
  };

  const handleSelectQuestion = (question) => {
    setSelectedQuestion(question);
  };

  const handleCloseModal = () => {
    setSelectedQuestion(null);
  };

  const totalQuestions = questionsData.reduce((acc, theme) => acc + theme.questions.length, 0);
  const progressPercentage = Math.round((checkedItems.length / totalQuestions) * 100);

  return (
    <div className="app-container">
      <main className="main-content">
        <header className="header">
          <h1>Python Practice Quests</h1>
          <p>Complete these 50 themed challenges to master intermediate Python. Select a quest to view its details.</p>
          
          <div className="progress-bar-container">
            <span className="progress-text">{progressPercentage}%</span>
            <div className="progress-track">
              <div 
                className="progress-fill" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <span className="progress-text">{checkedItems.length} / {totalQuestions}</span>
          </div>
        </header>

        <Checklist 
          data={questionsData} 
          checkedItems={checkedItems}
          onToggleCheck={handleToggleCheck}
          onSelectQuestion={handleSelectQuestion}
          selectedQuestionId={selectedQuestion?.id}
        />
      </main>

      {selectedQuestion && (
        <QuestionDetailModal 
          question={selectedQuestion} 
          onClose={handleCloseModal} 
          theme={questionsData.find(t => t.questions.some(q => q.id === selectedQuestion.id))?.theme}
        />
      )}
    </div>
  );
}

export default App;
