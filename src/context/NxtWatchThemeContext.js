import React from 'react'

const NxtWatchThemeContext = React.createContext({
  isDark: false,
  activeTab: 'Home',
  savedVideos: [],
  changeTab: () => {},
  changeTheme: () => {},
  addVideos: () => {},
})
export default NxtWatchThemeContext
