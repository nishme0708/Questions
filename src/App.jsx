import Questions from './data';
import { useState } from 'react';
import Question from './Question';
const App = () => {
  const [questions, setQuestions] = useState(Questions);
  return (
    <main>
      <section className="container">
      {questions.map((question) => {
        return <Question key={question.id} {...question}></Question>;
      })}
      </section>
    </main>
  );
};
export default App;
