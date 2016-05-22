import React from 'react'
import ViewBookList from '../containers/ViewBookList'
import ViewCartList from '../containers/ViewCartList'
const App = () => (
  <div className="mdl-grid">
    <ViewCartList />
    <ViewBookList />
  </div>
)

export default App