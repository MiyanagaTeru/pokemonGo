import React from 'react'
import Footer from './Footer'
import SaveData from '../containers/SaveData'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <SaveData />
  </div>
)

export default App
