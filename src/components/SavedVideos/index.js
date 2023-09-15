import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import HomeSideBar from '../HomeSideBar'
import TrendingItem from '../TrendingItem'
import NxtWatchThemeContext from '../../context/NxtWatchThemeContext'
import {SavedVideosDiv,SavedVideosContainer,} from './styledComponents'


const SavedVideos = () => (
    <NxtWatchThemeContext.Consumer>
    {value => {
        const {isDark, savedVideos} = value

        const bgColor = isDark ? '#0f0f0f' : '#f9f9f9'

        return (
            <>
                <Header />
                <SavedVideosContainer>
                <HomeSideBar />
                <SavedVideosDiv data-testid="savedVideos" bgColor={bgColor}>
                    <div>
                        <CgPlayListAdd />
                        <h1>Saved Videos</h1>
                    </div>
                    {savedVideos.length > 0 ? (
                        <ul>
                            {savedVideos.map(eachVideo => (
                                <TrendingItem trendingDetails={eachVideo} key={eachVideo.id} />
                            ))}
                        </ul>
                    ) : (
                        <div>
                            <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png" alt="no saved videos" />
                            <h1>No Saved Videos Found</h1>
                            <p>Save your videos by clicking a button</p>
                        </div>
                    )}
                </SavedVideosDiv>
                </SavedVideosContainer>
            </>
        )
    }}
    </NxtWatchThemeContext.Consumer>
)

export default SavedVideos