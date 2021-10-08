import axios from 'axios'

function getAllQuestions() {
  return axios
    .get('/api/question')
    .then(res => res.data)
    .catch(err => console.error(err))
}

export { getAllQuestions }
