import { Featured, Header, Navbar } from "../../components";
import "./home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by Property type</h1>
        
      </div>
    </div>
  );
}

export default Home;
