import React, {useState, useEffect} from 'react';
import './FavoriteButton.css';
  
export default function FavoriteButton () {
    const [isFavorite, setIsFavorite] = useState(false);

    const favoriteHandler = () => {
        setIsFavorite(current => !current)
    }
    
    //get the updated isFavorite state value
    useEffect( () => [isFavorite]);

    return (
        <div>  
            <button onClick={favoriteHandler} className="btn">
              <span className={
                isFavorite ? 'icon icon-filled-star' : 'icon icon-outlined-star'
              }></span>
            </button>
        </div>
    );
    
}


