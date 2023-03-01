import { useState } from "react";
import { services } from "./servicesdata/servicesdata";
import { webservicesdetails } from "./servicesdata/webservicedata"
import "./App.css";
import { Panell, WebDetailsInput } from "./components/Panell.styled";

function App() {

  // SERVICES STATES 
  const [checkedState, setCheckedState] = useState(
    new Array(services.length).fill(false)
  );

  // PAGE NUMBER STATE
  const [pagesNumber, setPagesNumber] = useState(1);

  // LANGUAGES NUMBER STATE
  const [languagesNumber, setLanguagesNumber] = useState(1);
 
  // TOTAL PRICE STATE
  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((check, index) =>
      index === position ? !check : check
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce((sum, currentState, index) => {
      if (currentState === true) {
        return sum + services[index].price;
      } 
      return sum;
    }, 0);
     
    const additionalCost = pagesNumber * languagesNumber * 30;

    setTotal(() => {
      return(
        updatedCheckedState[0] ? (totalPrice + additionalCost) : totalPrice
      )
    }
    );
  };

  return (
    <div className="App">
      <div className="main-container">
        <h3 className="form-title">¿Què vols fer?</h3>
        <ul className="services-list">
          <li className="service-web">
            <div className="services-list-item">
              <div className="left-section">
                <input
                  type="checkbox"
                  id={`custom-checkbox-0`}
                  name={services[0].name}
                  value={services[0].name}
                  checked={checkedState[0]}
                  onChange={() => handleOnChange(0)}
                />
                <label htmlFor={`custom-checkbox-0`}>{services[0].name}</label>
              </div>
              <div className="right-section">{services[0].price} €</div>
            </div>

            {/* PANELL EXERCICI 2 */}
            {/*console.log(checkedState[0])*/}
            {checkedState[0] ? (
              <Panell>
              <div className="web-details-item">
                <label className="web-details-tag" htmlFor={"webPagesNum"}>{webservicesdetails[0].name}</label>
                <WebDetailsInput 
                  type="number"
                  min="1"
                  max="30"
                  id="webPagesNum"
                  name="webPagesNum"
                  value={pagesNumber}
                  onChange={e => setPagesNumber(e.target.valueAsNumber)}
                />
              </div>
              <div className="web-details-item">
                <label className="web-details-tag" htmlFor={`webLanguagesNum`}>{webservicesdetails[1].name}</label>
                <WebDetailsInput 
                  type="number"
                  min="1"
                  max="30"
                  id={`webLanguagesNum`}
                  name="webLanguagesNum"
                  value={languagesNumber}
                  onChange={e => setLanguagesNumber(e.target.valueAsNumber)}
                />
              </div>
            </Panell>
            ) : ''
            }
            {/* FINAL PANELL EXERCICI 2 */}
          </li>
           

          <li className="service-seo">
            <div className="services-list-item">
              <div className="left-section">
                <input
                  type="checkbox"
                  id={`custom-checkbox-1`}
                  name={services[1].name}
                  value={services[1].name}
                  checked={checkedState[1]}
                  onChange={() => handleOnChange(1)}
                />
                <label htmlFor={`custom-checkbox-1`}>{services[1].name}</label>
              </div>
              <div className="right-section">{services[1].price} €</div>
            </div>
          </li>

          <li className="service-ads">
            <div className="services-list-item">
              <div className="left-section">
                <input
                  type="checkbox"
                  id={`custom-checkbox-2`}
                  name={services[2].name}
                  value={services[2].name}
                  checked={checkedState[2]}
                  onChange={() => handleOnChange(2)}
                />
                <label htmlFor={`custom-checkbox-2`}>{services[2].name}</label>
              </div>
              <div className="right-section">{services[2].price} €</div>
            </div>
          </li>

          <li>
            <div className="services-list-item">
              <div className="left-section bold">Preu total:</div>
              <div className="right-section bold">{total} €</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
