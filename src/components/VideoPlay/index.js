import ReactPlayer from 'react-player'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {BiListPlus} from 'react-icons/bi'

import NxtWatchThemeContext from '../../context/NxtWatchThemeContext'

import {ButtonIcon,} from './styledComponents'

const VideoPlay = props => {
    const {videoData, isLiked, isDisLiked, clickLiked, clickDisLiked} = props 

    const clickLike = () => {
        clickLiked()
    }

    const clickDisLike = () => {
        clickDisLiked()
    }

    return (
        <NxtWatchThemeContext.Consumer>
        {value => {
            const {isDark, addVideos, savedVideos } = value 
            const textColor = isDark ? '#64748b' : '#475569'

            let isSaved
            const indexValue = savedVideos.findIndex(eachVideo => eachVideo.id === videoData.id)

            if (indexValue === -1) {
                isSaved = false
            }
            else {
                isSaved = true
            }

            const SaveIconColor = isSaved ? '#3b82f6' : textColor 

            const clickSaved = () => {
                addVideos(videoData)
            }

            return(
                <div>
                    <ReactPlayer url={videoData.videoUrl} controls width="100%" />
                    <p>{videoData.title}</p>
                    <div>
                        <div>
                            <p>{videoData.viewCount} views</p>
                            <p>{videoData.publishedAt}</p>
                        </div>
                        <div>
                            <div>
                                <ButtonIcon type="button" color={isLiked ? '#2563eb': '#64748b'} onClick={clickLike}>
                                    <AiOutlineLike size={25} />
                                    Like
                                </ButtonIcon>
                            </div>
                            <div>
                                <ButtonIcon type="button" color={isDisLiked ? '#2563eb': '#64748b'} onClick={clickDisLike}>
                                    <AiOutlineDislike size={25} />
                                    DisLike
                                </ButtonIcon>
                            </div>
                            <div>
                                <ButtonIcon type="button" color={SaveIconColor} onClick={clickSaved}>
                                    <BiListPlus size={25} />
                                    {isSaved ? 'Saved' : 'Save'}
                                </ButtonIcon>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div>
                        <img src={videoData.profileImageUrl} alt="channel logo" />
                        <div>
                            <p>{videoData.name}</p>
                            <p>{videoData.subscriberCount} Subscribers</p>
                            <p>{videoData.description}</p>
                        </div>
                    </div>
                </div>
            )
        }}
        </NxtWatchThemeContext.Consumer>
    )
}

export default VideoPlay