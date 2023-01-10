import React from 'react';

const Story = ({story}) => {

    
       if (story.url) {
            return(
                <>
                <li>{story.title}</li>
                <li><a href={story.url}>{story.url}</a></li>
                </>
            )
        
       } else {
        return null
        
       }
};

export default Story;