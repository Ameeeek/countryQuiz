import Question from "./components/question";
import bg from "./img/background.png";
import Header from "./components/header";
function App() {
   
    return (
        <>
            <img
                src={bg}
                className="h-screen w-screen z-0  object-cover absolute"
            />
            <div className="min-h-screen p-12 flex flex-col item-center justify-center">
                <Header />
                <Question classname="" />
            </div>
        </>
    );
}

export default App;
