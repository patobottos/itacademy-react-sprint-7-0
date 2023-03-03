import { useState } from "react";
import "./App.css";
import { Panell } from "./components/Panell.styled";
import InputsCounter from "./components/inputsCounter";

function App() {
  const [webpage, setWebpage] = useState(false);
  const [seo, setSeo] = useState(false);
  const [ads, setAds] = useState(false);
  const [webPagesNum, setWebPagesNum] = useState(1);
  const [languagesNum, setLanguagesNum] = useState(1);

  const webservices = 500 + webPagesNum * languagesNum * 30;
  const totalPrice =
    (webpage ? webservices : 0) + (seo ? 300 : 0) + (ads ? 200 : 0);

  return (
    <div className="App">
      <div className="main-container">
        <h3 className="form-title">¿Qué quieres hacer?</h3>
        <ul className="services-list">
          <li>
            <input
              type="checkbox"
              name="webpage"
              onChange={(e) => setWebpage(!webpage)}
            />
            <label for="webpage"> Una página web (500€) </label>
            {webpage ? (
              <Panell>
                <label htmlFor="pages">Número de páginas</label>
                <InputsCounter setNumber={setWebPagesNum} />
                <label htmlFor="languages">Número de idiomas</label>
                <InputsCounter setNumber={setLanguagesNum} />
              </Panell>
            ) : (
              ""
            )}
          </li>
          <li>
            <input type="checkbox" name="seo" onChange={(e) => setSeo(!seo)} />
            <label for="seo"> Una consultoria SEO (300€)</label>
          </li>
          <li>
            <input type="checkbox" name="ads" onChange={(e) => setAds(!ads)} />
            <label for="ads"> Una campaña de Google Ads (200€) </label>
          </li>
          <li>
            <div className="total">Preu total: {totalPrice}€</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
