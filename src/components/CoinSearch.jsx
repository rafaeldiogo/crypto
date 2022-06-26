import React, { useState } from "react";
import CoinItem from "./CoinItem";

const CoinSearch = ({ coins }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <div>
        <h1>Pesquisa Crypto</h1>
        <form>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            placeholder="Pesquise uma moeda"
          />
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
          {coins
            .filter((value) => {
              if (searchText === "") {
                return value;
              } else if (
                value.name.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return value;
              }
            })
            .map((coin) => (
              <CoinItem key={coin.id} coin={coin} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinSearch;
