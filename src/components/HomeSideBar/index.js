import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import NxtWatchThemeContext from '../../context/NxtWatchThemeContext'
import {HomeSideBarContainer,} from './styledComponents'
import './index.css'

class HomeSideBar extends Component {
    renderTabDetails = () => (
        <NxtWatchThemeContext.Consumer>
        {value => {
            const {isDark, changeTab} = value 
            const backgroundColor = isDark ? '#231f20' : '#f8fafc'

            const clickHome = () => {
                changeTab('Home')
            }

            const clickTrending = () => {
                changeTab('Trending')
            }

            const clickGaming = () => {
                changeTab('Gaming')
            }

            const clickSavedVideos = () => {
                changeTab('Saved')
            }

            return (
                <HomeSideBarContainer backgroundColor={backgroundColor}>
                    <ul className="ul-list">
                        <Link to="/">
                            <li key="home" onClick={clickHome}>
                                <AiFillHome />
                                <p>Home</p>
                            </li>
                        </Link>
                        <Link to="/trending">
                            <li key="trending" onClick={clickTrending}>
                            <HiFire />
                            <p>Trending</p>
                        </li>
                        </Link>
                        <Link to="/gaming">
                            <li key="gaming" onClick={clickGaming}>
                            <SiYoutubegaming />
                            <p>Gaming</p>
                        </li>
                        </Link>
                        <Link to="/saved-videos">
                            <li key="saved" onClick={clickSavedVideos}>
                            <CgPlayListAdd />
                            <p>Saved Videos</p>
                        </li>
                        </Link>
                    </ul>
                    <div>
                        <p>CONTACT US</p>
                        <div className="conatct-img-div">
                            <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png" className="conatct-img" alt="facebook logo" />
                            <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png " className="conatct-img" alt="twitter logo" />
                            <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png" className="conatct-img" alt="linked in logo" />
                        </div>
                        <p>Enjoy! Now to see your channels and recommendations!</p>
                    </div>
                </HomeSideBarContainer>
            )
        }}
        </NxtWatchThemeContext.Consumer>
    )

    render () {
        return <>{this.renderTabDetails()}</>
    }
}


export default HomeSideBar