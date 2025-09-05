import General from "./components/General";
import Eduction from "./components/Eduction";
import Experience from "./components/Experience";
import "./App.css";

function App() {
    return (
        <div className="app">
            <h1>CV Maker</h1>
            <General /> 
            <Eduction />
            <Experience />
        </div>  
    )
}

export default App;