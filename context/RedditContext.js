import { createContext, useState, useEffect } from "react";

export const RedditContext = createContext()

export const RedditProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [selectedPost, setSelectedPost] = useState(null);
      
    useEffect(() =>{
        const user = ''
        setCurrentUser(user);

     }, [])

    return(
        <RedditContext.Provider value={{currentUser, selectedPost, setSelectedPost}}>{children}</RedditContext.Provider>
            
    )
    }