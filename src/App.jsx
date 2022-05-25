import Question from "./components/question";
import bg from "./img/background.png";
import Header from "./components/header";
function App() {
   
    return (
        <>
            <img
                src={bg}
                className="h-screen sm:h-screen sm:w-screen w-screen z-0  object-cover absolute"
            />
            <div className="min-h-screen xl:p-12 2xl:p-12 md:p-10 p-6 lg:p-10 flex flex-col item-center justify-center">
                <Header />
                <Question  />
            </div>
        </>
    );
}

export default App;
