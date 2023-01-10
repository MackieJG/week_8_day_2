import React from 'react';
import Story from "./Story";

const StorySelect = ({stories}) => {
    
    const StoryItems = stories.map((story, index) => {
        
        return <Story key={index} story={story} />
    })

    return (
        <div className="story-list">
            <h3>Story List</h3>
            <ul>
                {StoryItems}
            </ul>
        </div>
    )
}

export default StorySelect;