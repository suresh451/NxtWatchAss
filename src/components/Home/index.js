import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Header from '../Header'
import HomeSideBar from '../HomeSideBar'
import HomeVideoCard from '../HomeVideoCard'
import NxtWatchThemeContext from '../../context/NxtWatchThemeContext'
import {BannerDiv, HomeDiv,FailureHeading,FailureContainer,FailureButton,FailureImg,} from './styledComponents'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    homeVideos: [],
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
    flexDisplay:'flex'

  }

  componentDidMount() {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    const {searchInput} = this.state
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    console.log(response)
    if (response.ok === true) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.videos.map(product => ({
        title: product.title,
        id: product.id,
        thumbnailUrl: product.thumbnail_url,
        viewCount:product.view_count,
        publishedAt:product.published_at,
        profileImgUrl: product.channel.profile_image_url,
        name: product.channel.name
        
      }))
      this.setState({
        homeVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  removeBanner =() => {
    this.setState({flexDisplay: 'none'})
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  getSearchResults = () => {
    this.getHomeVideos()
  }


  renderHomeVideosList = () => {
    const {homeVideos} = this.state
    const noVideos = homeVideos.length === 0

    return noVideos ? (<div>
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png" alt="no videos" />
                <h1>No Search Results Found</h1>
                <p>Try different key words or remove search filter </p>
                <button type="button" onClick={this.getHomeVideos}>
                    Retry
                </button>
            </div>) : (<ul className="ul-list">
            {homeVideos.map(eachVideo => (
        <HomeVideoCard videoCardDetails={eachVideo} key={eachVideo.id} />
      ))}
            </ul>)
      
  }

  renderHomeFailureView = () => (
    <NxtWatchThemeContext.Consumer>
        {value => {
            const {isDark} = value
            const headingColor = isDark ? '#f9f9f9' : '#1e293b'

            const failureImgUrl = isDark 
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png' 

            return (
                <FailureContainer>
                    <FailureImg src={failureImgUrl} className="" alt="failure view" />
                    <FailureHeading headingColor={headingColor}>Oops! Something Went Wrong</FailureHeading>
                    <p>We are having some trouble to complete your request. Please try again.</p>
                    <FailureButton type="button" onClick={this.getHomeVideos}>
                        Retry
                    </FailureButton>
                </FailureContainer>
            )
        }}
    </NxtWatchThemeContext.Consumer>
  )

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderHomeVideos = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderHomeVideosList()
      case apiStatusConstants.failure:
        return this.renderHomeFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render () {
    const {searchInput, flexDisplay} = this.state
    return (
      <NxtWatchThemeContext.Consumer>
      {value => {
        const {isDark} = value

        const bgColor = isDark ? '#181818' : '#f9f9f9'
        const textColor = isDark ? 'white' : '#181818'
        const bannerItem = flexDisplay === 'flex' ? 'flex' : 'none'

        return (
            <>
          <Header />
          <div className="home-div">
          <HomeSideBar />
          <HomeDiv data-testid="home" bgColor={bgColor} textColor={textColor}>
            <BannerDiv data-testid="banner" bannerItem={bannerItem} >
              <div>
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" className="" alt="nxt watch logo" />
                <p>Buy Nxt Watch Premium <br /> UPI</p>
                <button type="button">GET IT NOW</button>
              </div>
              <div>
                <button type="button" data-testid="close">
                <AiOutlineClose onClick={this.removeBanner} />
                </button>
              </div>
            </BannerDiv>
            <div>
              <input type="search" placeholder="search" onChange={this.onChangeSearch} value={searchInput} />
              <button data-testid="searchButton" onClick={this.getSearchResults} type="button">
                <AiOutlineSearch />
              </button>
            </div>
            {this.renderHomeVideos()}
          </HomeDiv>
          </div>
        </>
        )
      }}
      </NxtWatchThemeContext.Consumer>
        
    )
  }
}

export default Home