import React from 'react';

const getThemeIcon = (themeName) => {
  if (themeName.includes('Harry Potter')) return '🧙‍♂️';
  if (themeName.includes('Aviation')) return '✈️';
  if (themeName.includes('Fantasy')) return '🏰';
  if (themeName.includes('Space')) return '🚀';
  if (themeName.includes('Mystery')) return '🕵️';
  return '📝';
};

const Checklist = ({ data, checkedItems, onToggleCheck, onSelectQuestion, selectedQuestionId }) => {
  return (
    <div className="checklist-container">
      {data.map((themeGroup, index) => (
        <section key={index} className="theme-section">
          <div className="theme-header">
            <div className="theme-icon">{getThemeIcon(themeGroup.theme)}</div>
            <h2 className="theme-title">{themeGroup.theme}</h2>
          </div>
          
          <div className="questions-list">
            {themeGroup.questions.map((q) => {
              const isChecked = checkedItems.includes(q.id);
              const isSelected = selectedQuestionId === q.id;

              return (
                <div 
                  key={q.id} 
                  className={`question-item ${isSelected ? 'selected' : ''}`}
                  onClick={() => onSelectQuestion(q)}
                >
                  <div className="checkbox-wrapper" onClick={(e) => onToggleCheck(q.id, e)}>
                    <input 
                      type="checkbox" 
                      className="checkbox-input"
                      checked={isChecked}
                      onChange={() => {}} // Handle on parent div
                    />
                    <div className="checkbox-custom">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>

                  <div className="question-content">
                    <h3 className="question-title">{q.id}. {q.title}</h3>
                    <p className="question-summary">{q.summary}</p>
                  </div>

                  <svg className="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Checklist;
