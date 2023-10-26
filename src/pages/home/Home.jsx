import { Featured, FeaturedProperties, Footer, Header, MailList, Navbar, PropertyList } from "../../components";
import "./home.css";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browse by Property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Home Guests Love !</h1>
        <FeaturedProperties />

        <MailList />
        <Footer />

      </div>
    </div>
  );
}

export default Home;
