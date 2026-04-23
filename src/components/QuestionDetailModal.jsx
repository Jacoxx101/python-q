import React, { useEffect } from 'react';

const QuestionDetailModal = ({ question, onClose, theme }) => {
  // Prevent scrolling on the body when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="modal-theme-badge">{theme}</span>
            <h2 className="modal-title">Quest {question.id}: {question.title}</h2>
          </div>
          <button className="close-btn" onClick={onClose} aria-label="Close details">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: '20px', height: '20px'}}>
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="modal-body">
          <div className="detail-section">
            <h3>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: '20px', height: '20px', color: 'var(--accent-color)'}}>
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              The Scenario
            </h3>
            <p>{question.description}</p>
          </div>

          <div className="detail-section">
            <h3>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: '20px', height: '20px', color: 'var(--accent-color)'}}>
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
              Example Input
            </h3>
            <div className="code-block">{question.exampleInput || "No specific input required."}</div>
          </div>

          <div className="detail-section">
            <h3>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: '20px', height: '20px', color: 'var(--success-color)'}}>
                <path d="M22 11.08V12a10 10 0 1 1 -5.93 -9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              Expected Output
            </h3>
            <div className="code-block">{question.exampleOutput || "No specific output required."}</div>
          </div>

          {question.hints && question.hints.length > 0 && (
            <div className="detail-section">
              <h3>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: '20px', height: '20px', color: '#f59e0b'}}>
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                Helpful Hints
              </h3>
              <ul className="hints-list">
                {question.hints.map((hint, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{__html: hint.replace(/`([^`]+)`/g, '<code>$1</code>')}} />
                ))}
              </ul>
            </div>
          )}

          {question.advancedChallenge && (
            <div className="detail-section" style={{ borderLeft: '4px solid var(--primary-color)', paddingLeft: '1rem', backgroundColor: 'var(--surface-color)', padding: '1rem', borderRadius: '8px', marginTop: '1rem' }}>
              <h3 style={{ color: 'var(--primary-color)', marginTop: 0 }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: '20px', height: '20px'}}>
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
                Level Up Challenge
              </h3>
              <p dangerouslySetInnerHTML={{__html: question.advancedChallenge.replace(/`([^`]+)`/g, '<code>$1</code>')}}></p>
              
              {question.advancedHints && question.advancedHints.length > 0 && (
                <div style={{ marginTop: '1rem' }}>
                  <h4 style={{ fontSize: '0.95rem', color: '#f59e0b', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{width: '16px', height: '16px'}}>
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                    Pro Hints
                  </h4>
                  <ul className="hints-list">
                    {question.advancedHints.map((hint, idx) => (
                      <li key={idx} dangerouslySetInnerHTML={{__html: hint.replace(/`([^`]+)`/g, '<code>$1</code>')}} />
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionDetailModal;
