import "./App.css";
import city from "./assets/city.jpg";
import ListRender from "./components/ListRender.jsx";
import ManageData from "./components/ManageData.jsx";
import ConditionalRender from "./components/ConditionalRender";
import ShowUserName from "./components/ShowUserName";
import CarDetails from "./components/CarDetails";
import Fragment from "./components/Fragment";

function App() {
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
    { id: 2, brand: "KIA", color: "Branco", km: 200000 },
    { id: 3, brand: "Renault", color: "Azul", km: 32000 },
  ];

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
      <ShowUserName name="Matheus" />
      <Fragment/>

      {/* destructuring
      <CarDetails brand="Ford" color="Azul" km={10000} />

      {/* reaproveitamento */}
      {/* <CarDetails brand="VW" color="Vermelho" km={535} />
      <CarDetails brand="Fiat" color="Branco" km={0} /> */} 

      {/* loop com array de obj */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}
    </div>
  );
}

export default App;