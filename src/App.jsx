import Footer from "./assets/Molecules/Footer";
import Highlight from "./assets/Molecules/Highlight";
import ImageContainer from "./assets/Molecules/ImageContainer";
import Nav from "./assets/Molecules/Nav";
import "./App.css";

function App() {
  return (
    <div>
      <section className="nav-section">
        <Nav />
      </section>
      <div className="content">
        <section className="highlight-section">
          <div className="highlight-left">
            <Highlight />
          </div>
          <div className="highlight-right">
            <ImageContainer />
          </div>
        </section>
        <section className="footer-section">
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default App;
