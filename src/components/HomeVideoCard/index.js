import {Link} from 'react-router-dom'
import NxtWatchThemeContext from '../../context/NxtWatchThemeContext'
import {ListItemContainer,} from './styledComponents'
import './index.css'

const HomeVideoCard = props => {
    const {videoCardDetails} = props 
    const {title, thumbnailUrl, viewCount, publishedAt, name, profileImgUrl, id} = videoCardDetails
    
            return (
                <NxtWatchThemeContext.Consumer>
                {value => {
                    const {isDark} = value 
                    const bgColor = isDark ? '#f8fafc' : '#0f0f0f'

                    return (
                        <Link to = {`/videos/${id}`}>
                            <ListItemContainer bgColor={bgColor}>
                            <img src={thumbnailUrl} className="" alt="video thumbnail" />
                            <div>
                                <img src={profileImgUrl} alt="channel logo" />
                                <p>{name}</p>
                                <p>{title}</p>
                                <div>
                                    <p>{viewCount}</p>
                                    <p>{publishedAt}</p>
                                </div>
                            </div>
                        </ListItemContainer>
                        </Link>
                        
                    )
                }}
                </NxtWatchThemeContext.Consumer>
                    
            )
}

export default HomeVideoCard