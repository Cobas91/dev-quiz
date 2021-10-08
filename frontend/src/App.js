import Header from './components/Header'
import Homepage from './components/Pages/Homepage'
import useQuestions from './components/hooks/useQuestions'
import { Route, Switch } from 'react-router-dom'
import AddQuestion from './components/Pages/Add-Question'

export default function App() {
  const { questions } = useQuestions()
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Homepage questions={questions} />
        </Route>
        <Route path="/add-question">
          <AddQuestion />
        </Route>
      </Switch>
    </div>
  )
}
