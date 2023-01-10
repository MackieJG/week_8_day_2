import React from 'react';
import Story from "./Story";

const StorySelect = ({stories}) => {
    
    const StoryItems = stories.map((story, index) => {
        
        return <Story key={index} story={story} />
    })

    return (
        <>
            <h3>Current Articles</h3>
                <ul>    
                    {StoryItems}
                </ul>
        </>
    )
}

export default StorySelect;