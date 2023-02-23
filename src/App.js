import { useState } from "react";
import { services } from "./servicesdata/servicesdata";
import "./App.css";

function App() {
  const [checkedState, setCheckedState] = useState(
    new Array(services.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    const lastCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(lastCheckedState);

    const totalPrice = lastCheckedState.reduce((sum, currentState, index) => {
      if (currentState === true) {
        return sum + services[index].price;
      }
      return sum;
    }, 0);

    setTotal(totalPrice);
  };

  return (
    <div className="App">
      <div className="main-container">
        <h3 className="form-title">¿Què vols fer?</h3>
        <ul className="services-list">
          {services.map(({ name, price }, index) => {
            return (
              <li key={index}>
                <div className="services-list-item">
                  <div className="left-section">
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={name}
                      value={name}
                      checked={checkedState[index]}
                      onChange={() => handleOnChange(index)}
                    />
                    <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                  </div>
                  <div className="right-section">{price} €</div>
                </div>
              </li>
            );
          })}

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
