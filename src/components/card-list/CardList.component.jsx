import Card from "../card/Card.component";

import "./card-list.styles.css";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster) => (
      <Card monster={monster} />
    ))}
  </div>
);
export default CardList;
