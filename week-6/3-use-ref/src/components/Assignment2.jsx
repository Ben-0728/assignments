import React, { useState, useCallback } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    let r = 0;
    const [render, forceRender] = useState(0);
    const trackRef = useRef();
    const handleReRender = () => {
        // Update state to force re-render
        trackRef.current.innerHTML = "This component has rendered {++r} times";
        forceRender(Math.random());
    };

    return (
        <div>
            <p ref={trackRef}>This component has rendered {r} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};
