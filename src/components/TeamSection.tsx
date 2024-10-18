import React from "react";
import { TeamProps } from "../typescript/component";

type Data = {
  our_team: TeamProps;
};

type OurTeam = {
  data: Data;
};

const TeamSection = ({ data: { our_team } }: OurTeam) => {
  return (
    <div className="about-team-section">
      <div className="team-head-section">
        {our_team.title_h2 ? (
          <h2 {...our_team.$?.title_h2}>{our_team.title_h2}</h2>
        ) : (
          ""
        )}
        {our_team.description ? (
          <p {...our_team.$?.description}>{our_team.description}</p>
        ) : (
          ""
        )}
      </div>
      <div className="team-content">
        {our_team.employees.map((employee, index) => {
          return (
            <div className="team-details" key={index}>
              {employee.image && (
                <img
                  {...employee.image.$?.url}
                  alt={employee.image.title}
                  src={employee.image.url}
                />
              )}
              <div className="team-details">
                {employee.name && (
                  <h3 {...employee.$?.name}>{employee.name}</h3>
                )}
                {employee.designation && (
                  <p {...employee.$?.designation}>{employee.designation}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamSection;
