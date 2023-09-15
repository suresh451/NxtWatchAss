import {Link} from 'react-router-dom'
import NxtWatchThemeContext from '../../context/NxtWatchThemeContext' 
import {GameListItem, GameHead,GameImage,} from './styledComponents'

const GameItem = props => {
    const {gameDetails} = props
    const {title, thumbnailUrl, viewCount, id} = gameDetails

    return (
        <NxtWatchThemeContext.Consumer>
        {value => {
            const {isDark} = value 
            const textColor = isDark ? '#f9f9f9' : '#231f20'

            return (
                <Link to ={`/videos/${id}`}>
                    <GameListItem>
                    <GameImage src={thumbnailUrl} alt="video thumbnail" />
                    <div>
                        <GameHead color={textColor}>{title}</GameHead>
                        <p>{viewCount} watching worldwide</p>
                    </div>
                </GameListItem>
                </Link>
                
            )
        }}
        </NxtWatchThemeContext.Consumer>
    )
}

export default GameItem