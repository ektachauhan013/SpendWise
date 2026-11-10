import './App.css'
import {useState} from 'react'
import Header from './components/Header.jsx'
import AddExpense from './components/AddExpense.jsx'
import NoExpense from './components/NoExpense.jsx'
import CategoryCard from './components/CategoryCard.jsx'
import StatsCard from './components/StatsCard.jsx'
import NavBar from './components/NavBar.jsx'
import Expense from './components/Expense.jsx'

function App() {
  const [expenses, setExpenses] = useState([])

  function handleAddExpense(newExpense) {
    setExpenses(prevExpenses => [
        ...prevExpenses,
        newExpense
    ])
  }

  return (
    <>
      <Header />
      <NavBar />
      <NoExpense />
      <AddExpense onAddExpense={handleAddExpense} />
      <CategoryCard
          icon = "fa-solid fa-utensils"
          name = "Food"
          spent = {240}
          total = {500}
      />
      <StatsCard
          icon = "fa-solid fa-wallet"
          name = "Income"
          amount = {5000}
          per = {
            <div></div>
          }
      />
      <Expense
          icon = "fa-solid fa-utensils"
          exp = "Lunch"
          cat = "Food"
          date = "29-10-2026"
          amount = {100}
      />

    </>
  )
}

export default App