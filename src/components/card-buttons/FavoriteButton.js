import React, {Component} from 'react';
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import IconButton from '@material-ui/core/IconButton';
  
class FavoriteButton extends Component {
    // isFavorite state initialization
    state = {
        isFavorite: false
    } 
    // change isFavorite value
    toggleFavorite = (state) => {
        this.setState({
            isFavorite: !this.state.isFavorite
        })
    };

    render() {
        return (
            <div>  
                <IconButton  
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={this.toggleFavorite}
                >
                    {/* display star icon according to isFavorite value */}
                    {this.state.isFavorite ? ( <StarIcon />  ) : ( <StarOutlineIcon />  )}
                </IconButton>
            </div>
        );
    }
}

export default FavoriteButton;

