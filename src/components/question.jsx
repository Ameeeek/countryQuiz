import { newQuestion } from "country-quiz";
import { useEffect, useState, useRef } from "react";
import JSConfetti from "js-confetti";
import swal from "sweetalert";
function Question() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [option, setOption] = useState([]);
  const [request, setRequest] = useState(false);
  const jsConfetti = new JSConfetti();
  const quiz = newQuestion("capital-to-country", 3);
  const list = [
    {
      ...quiz,
    },
  ];

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
  function change() {
    console.log(list);
    buttonEl.current.fontSize = "12rem";
  }
  return (
    <div className=" flex  flex-col text-center item-center  justify-center">
      <div className="answer rounded-xl p-8 popBold z-20 flex bg-white flex-col item-center justify-centers text-center">
        <div className="z-20 sm:text-lg p-2 text-4xl flex justify-between text-left  uppercase">
          <p className="biru ">{question} is the capital of</p>
          <button className="bg-orange-300 sm:p-2 sm:text-base     hover:text-black text-white popBold p-4 rounded-md">
            Next
          </button>
        </div>
        {option.map((options) => {
          return (
            <div className="z-10 sm:z-1 ">
              <button
                value={options}
                onClick={(e) => {
                  let vlueBaru = e.target.value;
                  console.log(vlueBaru);
                  if (vlueBaru == answer) {
                    setRequest(true);
                    jsConfetti.addConfetti();
                    swal({
                      title: "benar",
                      text: "jawaban mu benar!!",
                      icon: "success",
                    });
                  } else {
                    setRequest(true);
                    swal({
                      title: "salah kocak",
                      text: "coba lagi!!",
                      icon: "error",
                    });
                  }
                }}
                id="tanya"
                className="text-2xl py-12 sm:text-lg sm:py-4 sm:w-8/12 w-full h-auto tanya rounded-xl hover:bg-orange-300"
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
