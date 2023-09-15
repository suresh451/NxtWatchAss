import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import VideoDetailsView from './components/VideoDetailsView'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import LoginForm from './components/LoginForm'
import NotFound from './components/NotFound'
import NxtWatchThemeContext from './context/NxtWatchThemeContext'
import './App.css'

// Replace your code here
class App extends Component {
    state = {
        isDark : false,
        activeTab: 'Home',
        savedVideos: []
    }

    changeTab = tab => {
        this.setState({activeTab: tab})
    }

    changeTheme = () => {
        this.setState(prevState => ({
            isDark: !prevState.isDark
        }))
    }

    addVideos = video => {
        const {savedVideos} = this.state 
        const indexValue = savedVideos.findIndex(each => each.id === video.id)

        if (indexValue === -1) {
            this.setState({savedVideos: [...savedVideos, video],})
        }
        else {
            savedVideos.splice(indexValue, 1)
            this.setState({savedVideos})
        }
    }

    removeVideo = id => {
        const {savedVideos} = this.state 
        const newSavedVideos = savedVideos.filter(each => each.id !== id)

        this.setState({savedVideos: newSavedVideos})
    }

    render () {
        const {isDark, activeTab, savedVideos} = this.state
        return (
            <NxtWatchThemeContext.Provider 
                value = {{isDark, activeTab, changeTheme: this.changeTheme, changeTab: this.changeTab, savedVideos, addVideos: this.addVideos}}
            >
                <Switch>
                    <Route exact path="/login" component={LoginForm} />
                    <ProtectedRoute exact path="/" component={Home} />
                    <ProtectedRoute exact path="/videos/:id" component={VideoDetailsView} />
                    <ProtectedRoute exact path="/trending" component={Trending} />
                    <ProtectedRoute exact path="/gaming" component ={Gaming} />
                    <ProtectedRoute exact path="/saved-videos" component= {SavedVideos} />
                    <Route path="/not-found" component ={NotFound} />
                    <Redirect to="not-found" />
                </Switch>
            </NxtWatchThemeContext.Provider>
            
        )
    }
}
    

export default App
