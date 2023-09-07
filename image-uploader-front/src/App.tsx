import "./App.scss";
import ImagePlacer from "./components/ImagePlacer";

function App() {

    return (
        <>
            <section className="container">
                <div className="inner">
                  <div className="top-texts">
                    <h1 className="main-title">
                      Upload your image
                    </h1>
                    <p className="main-subtitle">
                      File should be Jpeg, Png,...
                    </p>
                  </div>
                  <ImagePlacer/>
                  <div className="bottom-items">
                    <p>
                      Or
                    </p>
                    <button className="btn btn--primary">
                      Choose a file
                    </button>
                  </div>
                </div>
            </section>
        </>
    );
}

export default App;
