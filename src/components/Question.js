import Options from "./Options";
import { useQuiz } from "../context/QuizContext";

export default function Question() {
  // console.log(question);
  const { questions, index } = useQuiz();
  const question = questions.at(index);

  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}
