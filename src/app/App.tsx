import React from 'react'
import List from '../features/list/List'
import Search from '../features/search/Search'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.component}>
      <header className="App-header">
        <Search />
        <List />
      </header>
    </div>
  )
}

export default App
