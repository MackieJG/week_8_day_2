import React from 'react';

const Story = ({story}) => {

    
       if (story.url) {
            return(
                <div className="div_components">
                    <li>{story.title} <a href={story.url}>{story.url}</a></li>
                </div>
            )
        
       } else {
        return null
        
       }
};

export default Story;