import React from "react";
import Styles from "./CardList.module.scss";

import Card from "../Card/Card";

const CardList = (props) => {
  const { beers } = props;

  const getCardJsx = (beer) => (
    <div className={Styles.cards} key={beer.id} data-testid="cards">
      <Card beer={beer} />
    </div>
  );

  return <section className={Styles.cards} data-testid="cardList">{beers.map(getCardJsx)}</section>;
};

export default CardList;
