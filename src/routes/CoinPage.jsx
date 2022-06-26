import React, { useEffect, useState } from "react";
import axios from "axios";
import { Sparklines, SparklinesLine } from "react-sparklines";

const CoinPage = () => {
  const [coin, setCoin] = useState({});

  const url =
    "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&sparkline=true";

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data);
      console.log(response.data);
    });
  }, [url]);

  return (
    <div>
      <div>
        <img src={coin.image?.large} alt="/" />
        <div>
          <p>{coin?.name} preço</p>
          <p>({coin.symbol?.toUpperCase()}) / USD</p>
        </div>
      </div>

      <div>
        <div>
          <div>
            {coin.market_data?.current_price ? (
              <p>${coin.market_data.current_price.usd.toLocaleString()}</p>
            ) : null}
            <p>7 dias</p>
          </div>
          <div>
            <Sparklines data={coin.market_data?.sparkline_7d.price}>
              <SparklinesLine color="teal" />
            </Sparklines>
          </div>
          <div>
            <div>
              <p>Valor de mercado</p>
              {coin.market_data?.market_cap ? (
                <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
              ) : null}
            </div>
            <div>
              <p>Volume (24h)</p>
              {coin.market_data?.market_cap ? (
                <p>${coin.market_data.total_volume.usd.toLocaleString()}</p>
              ) : null}
            </div>
          </div>

          <div>
            <div>
              <p>Alta de 24h</p>
              {coin.market_data?.market_cap ? (
                <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinPage;
