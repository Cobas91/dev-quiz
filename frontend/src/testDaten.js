export default function getTestData() {
  return [
    {
      questionID: '1',
      questionText: 'Wie heißt die Hauptstadt von Deutschland?',
      answers: [
        {
          answerID: 1,
          answerText: 'Berlin',
          isCorrect: true,
        },
        {
          answerID: 2,
          answerText: 'Hamburg',
          isCorrect: false,
        },
        {
          answerID: 3,
          answerText: 'Düsseldorf',
          isCorrect: false,
        },
        {
          answerID: 4,
          answerText: 'Kiel',
          isCorrect: false,
        },
      ],
    },
    {
      questionID: '2',
      questionText: 'Was ist Blau?',
      answers: [
        {
          answerID: 1,
          answerText: 'Ein Baum',
          isCorrect: false,
        },
        {
          answerID: 2,
          answerText: 'Der Himmel',
          isCorrect: true,
        },
        {
          answerID: 3,
          answerText: 'Der Boden',
          isCorrect: false,
        },
        {
          answerID: 4,
          answerText: 'Die Farbe Schwarz',
          isCorrect: false,
        },
      ],
    },
    {
      questionID: '3',
      questionText: 'Was ist 1+1?',
      answers: [
        {
          answerID: 1,
          answerText: '3',
          isCorrect: false,
        },
        {
          answerID: 2,
          answerText: '8',
          isCorrect: false,
        },
        {
          answerID: 3,
          answerText: '0',
          isCorrect: false,
        },
        {
          answerID: 4,
          answerText: '2',
          isCorrect: true,
        },
      ],
    },
  ]
}
