import React, { Component } from 'react';
import './Card.css';
import DropdownMenu from './card-buttons/DropdownMenu';
import FavoriteButton from './card-buttons/FavoriteButton';
import Grid from '@material-ui/core/Grid';

class Card extends Component {
    render() {
        return (
            <div className="card-container"> 
                {/* check if values exist before outputting them*/}   
                {this.props.imageURL && (   
                    <div className="image-container">
                        <img src={this.props.imageURL} alt='Card Image'/>  
                    </div>
                    )
                } 
                {this.props.videoURL && (   
                    <div className="video-container">
                        <video controls>
                            <source src={this.props.videoURL} type="video/mp4"/>
                            <source src={this.props.videoURL} type="video/ogg"/>
                             Your browser does not support HTML video.
                        </video>
                    </div>
                    )
                }               
                <div className="card-content">
                    {this.props.title && (   
                        <p className="card-title truncate-title large-font">{this.props.title}</p>
                        )
                    }  
                    {this.props.relativeDate && (     
                        <p className="card-date small-font">{this.props.relativeDate}</p>
                        )
                    }  
                    {this.props.body && (  
                        <p className="card-body small-font">{this.props.body}</p>
                        )
                    }   

                    {/* card buttons container */}
                    <Grid container>
                        <Grid item xs={6} sm={6} className="star-button-position">
                        {this.props.showFavorite === true  && ( <FavoriteButton/>)}
                        </Grid>          
                        
                        <Grid item xs={6} sm={6} className="menu-position">
                        {this.props.showMenu === true  && (  <DropdownMenu></DropdownMenu>)}
                        </Grid>        
                    </Grid> 
                </div>
            </div>
        )
    }
}

export default Card;