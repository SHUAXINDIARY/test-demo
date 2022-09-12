import "./App.css";
import usePage from "./hooks/usePage";

const renderPage = (pageModel:number) => {
  return <h1>页面{pageModel}</h1>
}

function App() {
  const { pageModel } = usePage();
  return (
    <div className="App">
     {renderPage(pageModel)}
    </div>
  );
}

export default App;
