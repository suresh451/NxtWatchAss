import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import HomeSideBar from '../HomeSideBar'
import TrendingItem from '../TrendingItem'
import NxtWatchThemeContext from '../../context/NxtWatchThemeContext'
import {TrendingContainer,TrendingDiv,FailureHeading,FailureContainer,FailureButton,FailureImg,} from './styledComponents'



const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Trending extends Component {
  state = {
    trendingVideos: [],
    apiStatus: apiStatusConstants.initial,

  }

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = 'https://apis.ccbp.in/videos/trending'
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
      console.log(fetchedData)
      const updatedData = fetchedData.videos.map(trending => ({
        title: trending.title,
        id: trending.id,
        thumbnailUrl: trending.thumbnail_url,
        viewCount:trending.view_count,
        publishedAt:trending.published_at,
        profileImageUrl: trending.channel.profile_image_url,
        name: trending.channel.name,
      }))
      this.setState({
        trendingVideos: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }



  renderGameVideosList = () => {
    const {trendingVideos} = this.state
    const noVideos = trendingVideos.length === 0

    return noVideos ? (<div>
                <img src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png" alt="no videos" />
                <h1>No Search Results Found</h1>
                <p>Try different key words or remove search results</p>
                <button type="button" onClick={this.getTrendingVideos}>
                    Retry
                </button>
            </div>) : (<ul className="ul-list">
            {trendingVideos.map(eachTrending => (
        <TrendingItem trendingDetails={eachTrending} key={eachTrending.id} />
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
                    <FailureButton type="button" onClick={this.getTrendingVideos}>
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

  renderTrendingVideosView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGameVideosList()
      case apiStatusConstants.failure:
        return this.renderHomeFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render () {
    return (
      <NxtWatchThemeContext.Consumer>
      {value => {
        const {isDark} = value

        const bgColor = isDark ? '#0f0f0f' : '#f9f9f9'
        
        

        return (
          <TrendingContainer data-testid="trending">
          <Header />
          <TrendingDiv bgColor={bgColor}>
          <HomeSideBar />
          <div>
            <div>
              <div>
                <HiFire size={40}/>
                <h1>Trending</h1>
              </div>
            </div>
            {this.renderTrendingVideosView()}
          </div>
          </TrendingDiv>
        </TrendingContainer>
        )
      }}
      </NxtWatchThemeContext.Consumer>
        
    )
  }
}

export default Trending