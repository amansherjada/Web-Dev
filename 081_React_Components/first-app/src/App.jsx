import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <Navbar />
      <Card title="Card 1" description="Description for Card 1"/>
      <Card title="Card 2" description="Description for Card 2"/>
      <Card title="Card 3" description="Description for Card 3"/>
      <Card title="Card 4" description="Description for Card 4"/>
      <Footer/>
    </>
  )
}

export default App