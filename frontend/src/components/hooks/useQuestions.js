import { useEffect, useState } from 'react'
import * as API from '../../services/questionApiService'
export default function useQuestions() {
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    API.getAllQuestions().then(erg => setQuestions(erg))
  }, [])

  return { questions }
}
