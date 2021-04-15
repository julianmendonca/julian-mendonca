import React from "react";
import PropTypes from "prop-types";
import "./workcard.scss";

const WorkCard = (props) => {
  return (
    <div className="work-card">
      <div className="work-company">
        <img alt="Company Logo" className="work-image" src={props.image}></img>
        <h4>{props.companyName}</h4>
        <p>{props.duration}</p>
      </div>
      <div className="work-info">
        <span>Missions</span>
        <ul className="work-missions">
          {props.missions.map((mission) => (
            <li className="responsability">{mission}</li>
          ))}
        </ul>
        <span>Requirements</span>
        <ul className="work-requirements">
          {props.requirements.map((requirement) => (
            <li className="requirement">{requirement}</li>
          ))}
        </ul>
        <p className="work-reward">{props.reward}</p>
      </div>
    </div>
  );
};

WorkCard.propTypes = {
  companyName: PropTypes.string,
  image: PropTypes.string,
  missions: PropTypes.array,
  requirements: PropTypes.array,
  duration: PropTypes.string,
  reward: PropTypes.string,
};

export default WorkCard;
