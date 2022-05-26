import logo from "./ck-butterfly_Shape logo.png";
import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <a
            href="https://cinthiakoutianov.com"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <img src={logo} className="App-logo img-fluid" alt="logo" />
          </a>
        </header>
        <main>
          <Dictionary defaultKeyword="hi" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by
            <a
              href="https://cinthiakoutianov.com"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Cinthia Koutianov
            </a>{" "}
            👩🏻‍💻 It is open-sourced on{" "}
            <a
              href="https://github.com/cinthcreative/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            🐱 and hosted on{" "}
            <a
              href="https://dictionary-projectapp.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>{" "}
            💠
          </small>
        </footer>
      </div>
    </div>
  );
}
