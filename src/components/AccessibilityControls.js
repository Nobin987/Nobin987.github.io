import React, { useState, useEffect } from 'react';

const AccessibilityControls = () => {
  const [animationsDisabled, setAnimationsDisabled] = useState(false);

  useEffect(() => {
    // Check localStorage for user preference
    const savedPreference = localStorage.getItem('animations-disabled');
    if (savedPreference === 'true') {
      setAnimationsDisabled(true);
      document.body.classList.add('animations-disabled');
    }
  }, []);

  const toggleAnimations = () => {
    const newState = !animationsDisabled;
    setAnimationsDisabled(newState);
    
    // Save preference to localStorage
    localStorage.setItem('animations-disabled', newState.toString());
    
    // Add/remove class to body
    if (newState) {
      document.body.classList.add('animations-disabled');
    } else {
      document.body.classList.remove('animations-disabled');
    }
  };

  return (
    <div className="accessibility-controls">
      <button 
        className="accessibility-toggle"
        onClick={toggleAnimations}
        aria-label={animationsDisabled ? 'Enable animations' : 'Disable animations'}
      >
        {animationsDisabled ? '🎬' : '⏸️'} 
        <span>{animationsDisabled ? 'Enable' : 'Disable'} Animations</span>
      </button>
    </div>
  );
};

export default AccessibilityControls;