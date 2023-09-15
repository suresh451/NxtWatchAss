import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {BsMoon, BsBrightnessHigh} from 'react-icons/bs'
import NxtWatchThemeContext from '../../context/NxtWatchThemeContext'

import './index.css'

const Header = props => (
    <NxtWatchThemeContext.Consumer>
    {value => {
        const {isDark, changeTheme} = value

        const onChangeTheme = () => {
            changeTheme()
        }

        const onClickLogout = () => {
            const {history} = props
            Cookies.remove('jwt_token')
            history.replace("/login")
        }

        const logoImgUrl = isDark ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png' : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        return (
            <div className="header-div">
                <Link to="/">
                    <img src={logoImgUrl} alt="website logo" className="header-logo" />
                </Link>
                
                <div className="inner-div">
                    <button type="button" data-testid="theme" onClick={onChangeTheme}>
                        {isDark ? (<BsBrightnessHigh size={25} color="white" />) : (<BsMoon size={25} />)}
                    </button>
                    <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png" className="header-profile" alt="profile" />
                    <Popup
                        modal
                        trigger={
                        <button type="button" className="trigger-button">
                            Logout
                        </button>
                        }
                    >
                        {close => (
                            <div>
                                <p>Are you sure, you want to logout?</p>
                                <div>
                                    <button
                                    type="button"
                                    className="trigger-button"
                                    onClick={() => close()}
                                    data-testid="closeButton"
                                    >
                                    Cancel
                                    </button>
                                    <button
                                    type="button"
                                    className="trigger-button"
                                    onClick={onClickLogout}
                                    >
                                    Confirm
                                    </button>
                                </div>
                            </div>
                        )}
                    </Popup>
                </div>
            </div>
        )
    }}
    </NxtWatchThemeContext.Consumer>

    
)

export default withRouter(Header)