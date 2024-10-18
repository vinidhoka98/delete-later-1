import { Link } from "gatsby";
import React from "react";
import { CardData } from "../typescript/component";

type CardSection = {
  cards: [CardData];
};

type Data = {
  section_with_cards: CardSection;
};

type CardProps = {
  data: Data;
};

const CardSection = ({ data }: CardProps) => {
  return (
    <div className="demo-section">
      {data.section_with_cards.cards.map((card, index) => {
        return (
          <div className="cards" key={index}>
            {card.title_h3 && <h3 {...card.$?.title_h3}>{card.title_h3}</h3>}
            {card.description && (
              <p {...card.$?.description}>{card.description}</p>
            )}
            <div className="card-cta">
              {card.call_to_action.title && card.call_to_action.href ? (
                <a
                  {...card.call_to_action.$?.href}
                  href={card.call_to_action.href}
                  className="btn primary-btn"
                >
                  {card.call_to_action.title}
                </a>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardSection;
