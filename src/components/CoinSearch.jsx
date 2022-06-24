import React from "react";
import {AiOutlineStar} from 'react-icons/ai'

const CoinSearch = ({ coins }) => {
  return (
    <div>
      <div>
        <h1>Pesquisa Crypto</h1>
        <form>
          <input type="text" placeholder="Pesquise uma moeda" />
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Moeda</th>
            <th></th>
            <th>Preço</th>
            <th>24h</th>
            <th>24h Volume</th>
            <th>Mkt</th>
            <th>Últimos 7 dias</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr>
              <td><AiOutlineStar/></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearch;
