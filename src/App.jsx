import "./App.css";
import city from "./assets/city.jpg";
import ListRender from "./components/ListRender.jsx";
import ManageData from "./components/ManageData.jsx";
import ConditionalRender from "./components/ConditionalRender";

function App() {
  return (
    <div className="App">
      <h1>Seção 3</h1>

      <div>
        {/* Imagem localizada na pasta public */}
        <img src="/img1.jpg" alt="Paisagem" />

        {/* Imagem importada de src/assets */}
        <img src={city} alt="Cidade" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender />
    </div>
  );
}

export default App;