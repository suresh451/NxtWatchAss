import {Link} from 'react-router-dom'
import NxtWatchThemeContext from '../../context/NxtWatchThemeContext'

import {TrendingListItem,} from './styledComponents'

const TrendingItem = props => {
    const {trendingDetails} = props 
    const {title, thumbnailUrl, viewCount, publishedAt, name, profileImageUrl, id} = trendingDetails 

    return (
        <NxtWatchThemeContext.Consumer>
        {value => {
            const {isDark} = value 
            const bgColor = isDark ? '#f8fafc' : '#0f0f0f'

            return (
                <Link to= {`/videos/${id}`}>
                    <TrendingListItem bgColor={bgColor}>
                            <img src={thumbnailUrl} className="" alt="video thumbnail" />
                            <div>
                                <img src={profileImageUrl} alt="channel logo" />
                                <p>{name}</p>
                                <p>{title}</p>
                                <div>
                                    <p>{viewCount}</p>
                                    <p>{publishedAt}</p>
                                </div>
                            </div>
                        </TrendingListItem>
                </Link>
                    
            )
            
        }}
        </NxtWatchThemeContext.Consumer>
    )
}

export default TrendingItem