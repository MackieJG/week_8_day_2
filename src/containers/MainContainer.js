import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import StorySelect from "../components/StorySelect";

const MainContainer = () => {

    const [ stories, setStories ] = useState( [] )
    const [allNews, setAllNews] = useState( [] )
    

    useEffect( () => {
        fetch( 'https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(res => res.json())
        .then( data => { 
            const storyPromises = data.slice(0,20).map(storyId => {
                return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json` ).then(response => response.json());
            });
    
            Promise.all(storyPromises)
                .then(stories => {
                    setStories(stories);
                    setAllNews(stories);
                })
        } )         
    }, [])

    const filteredResults = (searchTerm) => {
        const filteredNews = allNews.filter((story) => {
            return story.title.includes(searchTerm)
        })

        setStories(filteredNews);
    }
    return (
        <div>
            <h1>Stories Page</h1>
            <SearchBar stories={stories} filteredResults={filteredResults}/>
            <ul>
                <StorySelect stories={stories}/>
            </ul>
        </div>
    )
}

export default MainContainer;