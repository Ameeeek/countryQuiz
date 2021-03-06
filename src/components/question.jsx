import { newQuestion } from "country-quiz";
import { useEffect, useState } from "react";
import JSConfetti from "js-confetti";
function Question() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [option, setOption] = useState([]);
  const [request, setRequest] = useState(false);
  const jsConfetti = new JSConfetti();
  const [is5, setIs5] = useState(false);
  const quiz = newQuestion("capital-to-country", 3);
  const [count, setCount] = useState(1);
  const [benar, setBenar] = useState(0);
  console.log(count);
  useEffect(() => {
    if (setRequest) {
      setQuestion(quiz.question);
      setAnswer(quiz.answer);
      setOption(quiz.options);
      setRequest(false);
    }
    setQuestion(quiz.question);
    setAnswer(quiz.answer);
    setOption(quiz.options);
  }, [request]);
  function tryAgain() {
    setCount(1);
    setIs5(false);
    setBenar(0);
  }
  return (
    <div className=" flex  flex-col text-center item-center  justify-center">
      <div className="answer rounded-xl p-8 popBold z-20 flex bg-white flex-col item-center justify-centers text-center">
        {is5 ? (
          <>
            <div>
              <h1 className="biru text-center pb-4 md:pb-8 md:text-center text-lg md:text-4xl">
                Results
              </h1>
              <div className="flex justify-center  ">
                <p className="mt-2 mx-2">You got</p>
                <p className="text-xl md:text-4xl  popmed  text-green-400">
                  {benar}
                </p>{" "}
                <p className="mt-2 mx-2">correct answers</p>
              </div>
              <button
                onClick={tryAgain}
                className="p-2 mt-8 rounded-xl md:rounded-xl border-2 border-amber-500 h-full w-52 popBold "
              >
                try again
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="xl:z-20 lg:text-lg  sm:text-xs text-xs md:text-2xl  p-2 xl:text-4xl  text-center md:text-center  uppercase">
              <p className="biru ">{question} is the capital of</p>
            </div>
            {option.map((options) => {
              return (
                <div className="xl:z-10  sm:z-1 ">
                  <button
                    value={options}
                    onClick={(e) => {
                      let vlueBaru = e.target.value;
                      let vlueBaruu = e.target;
                      console.log(vlueBaruu);
                      console.log(vlueBaru);
                      if (vlueBaru == answer) {
                        setRequest(true);
                        setBenar(benar + 1);
                        setCount(count + 1);
                        jsConfetti.addConfetti();
                        vlueBaruu.style.backgroundColor = "rgb(34 197 94)";
                        setTimeout(() => {
                          vlueBaruu.style.backgroundColor = "white";
                        }, 3000);
                      } else {
                        setRequest(true);
                        vlueBaruu.style.backgroundColor = "red";
                        setCount(count + 1);
                        console.log(count);
                        setTimeout(() => {
                          vlueBaruu.style.backgroundColor = "white";
                        }, 500);
                      }
                      if (count == 5) {
                        setIs5(true);
                      }
                    }}
                    id="tanya"
                    className="xl:text-2xl  xl:py-6 py-4 mt-2 md:mt-2 sm:text-sm  text-xs w-full sm:py-4 sm:w-8/12 xl:w-full xl:h-auto tanya rounded-xl hover:bg-orange-400 border-solid  border-2 border-cyan-600"
                  >
                    {options}
                  </button>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
export default Question;
