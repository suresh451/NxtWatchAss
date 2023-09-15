import Header from '../Header'
import HomeSideBar from '../HomeSideBar'
import NxtWatchThemeContext from '../../context/NxtWatchThemeContext'
import {NotFoundDiv,NotFoundCenter,} from './styledComponents'

const NotFound = () => (
    <NxtWatchThemeContext.Consumer>
    {value => {
        const {isDark} = value 
        const bgColor = isDark ? '#181818' : '#f9f9f9'

        const notfoundImgUrl = isDark ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png' 
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

        return (
            <>
                <Header />
                <NotFoundCenter>
                    <HomeSideBar />
                    <NotFoundDiv bgColor={bgColor}>
                        <img src={notfoundImgUrl} alt="not found" />
                        <h1>Page Not Found</h1>
                        <p>we are sorry, the page you requested could not be found.</p>
                    </NotFoundDiv>
                </NotFoundCenter>
            </>
        )
    }}
    </NxtWatchThemeContext.Consumer>
)

export default NotFound