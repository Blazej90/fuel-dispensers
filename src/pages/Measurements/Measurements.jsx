import React, { useState } from "react";
import styles from "./Measurements.module.css";
import {
  updateCalculatedAmount,
  calculateDifference,
  formatNumber,
} from "../../calculations/calculationHelpers";

function Measurements() {
  const [price, setPrice] = useState("");
  const [volume, setVolume] = useState("");
  const [calculatedAmount, setCalculatedAmount] = useState("");
  const [readAmount, setReadAmount] = useState("");
  const [difference, setDifference] = useState("");

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    const formattedPrice = formatNumber(newPrice.replace(" zł", ""));
    setPrice(formattedPrice);
    const newCalculatedAmount = updateCalculatedAmount(formattedPrice, volume);
    setCalculatedAmount(newCalculatedAmount);
    setDifference(calculateDifference(readAmount, newCalculatedAmount));
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    const newCalculatedAmount = updateCalculatedAmount(price, newVolume);
    setCalculatedAmount(newCalculatedAmount);
    setDifference(calculateDifference(readAmount, newCalculatedAmount));
  };

  const handleReadAmountChange = (e) => {
    const newReadAmount = e.target.value;
    const formattedReadAmount = formatNumber(newReadAmount.replace(" zł", ""));
    setReadAmount(formattedReadAmount);
    setDifference(calculateDifference(formattedReadAmount, calculatedAmount));
  };

  return (
    <div className={styles.measurements}>
      <h3>Measurements</h3>
      <table className={styles.table}>
        <tbody>
          <tr>
            <th>Nr odmierzacza</th>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <th>Nr przepływomierza</th>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <th>Rodzaj paliwa</th>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <th>Cena [zł]</th>
            <td>
              <input type="text" value={price} onChange={handlePriceChange} />
            </td>
          </tr>
          <tr>
            <th>Należność odczytana z liczydła</th>
            <td>
              <input
                type="text"
                value={readAmount}
                onChange={handleReadAmountChange}
              />
            </td>
          </tr>
          <tr>
            <th>Należność obliczona</th>
            <td>
              <input type="text" value={calculatedAmount} readOnly />
            </td>
          </tr>
          <tr>
            <th>Błąd należności</th>
            <td>
              <input type="text" value={difference} readOnly />
            </td>
          </tr>
          <tr>
            <th>Wskazanie odmierzacza (dm3)</th>
            <td>
              <input type="text" value={volume} onChange={handleVolumeChange} />
            </td>
          </tr>
          <tr>
            <th>Odczyt poprawny (dm3)</th>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <th>Błąd wskazań (%)</th>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <th>Strumień rzeczywisty (QRmax)</th>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <th>Czas pomiaru</th>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <th>Strumień 0,7 QRmax</th>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <th>Wskazanie odmierzacza (dm3)</th>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <th>Odczyt poprawny (dm3)</th>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <th>Błąd wskazań (%)</th>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <th>Czas pomiaru</th>
            <td>
              <input type="text" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Measurements;
