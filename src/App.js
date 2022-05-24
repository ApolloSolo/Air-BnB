import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import homeData from "./homeData";

//const place1 = "https://images.unsplash.com/photo-1525596662741-e94ff9f26de1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YWlyJTIwYm5ifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500"
const star =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/252px-Red_star.svg.png";

function App() {
  const cardElements = homeData.map((data) => {
    return (
      <Card
      key={data.id}
      star={star}
      data={data}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="card-container">{cardElements}</div>
    </div>
  );
}

export default App;
