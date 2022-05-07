import { newQuestion } from "country-quiz";
import { useEffect, useState } from "react";
import JSConfetti from 'js-confetti'
function Question() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [option, setOption] = useState([]);
    const jsConfetti = new JSConfetti()
    const [result, setResult] = useState(false);
    const quiz = newQuestion("capital-to-country", 3);
    useEffect(() => {
        console.log(quiz);
        setQuestion(quiz.question);
        setAnswer(quiz.answer);
        setOption(quiz.options);
    }, []);

    return (
        <div className=" flex  flex-col text-center item-center justify-center">
            <div className="answer rounded-xl p-8 popBold z-20 flex bg-white flex-col item-center justify-centers text-center">
                <p className="z-20 p-2 text-4xl text-left biru uppercase">
                    {question} is the capital of
                </p>
                {option.map((options) => {
                    return (
                        <div className="z-10 ">
                            <button
                                value={options}
                                onClick={(e) => {
                                    let vlueBaru = e.target.value;
                                    console.log(vlueBaru);
                                    if(vlueBaru == answer){
                                        jsConfetti.addConfetti()
                                    } else{
                                        console.log('salah coek')
                                    }
                                }}
                                id="tanya"
                                className="text-2xl py-12 w-full h-auto tanya rounded-xl hover:bg-orange-300"
                            >
                                {options}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
export default Question;
