import React from "react";
import StyledGoal from "../styles/StyledGoal";
import StyledCheckBox from "../styles/StyledCheckBox";
import StyledGoalDetails from "../styles/StyledGoalDetails";

const Goal = ({ goal, updates }) => {
  return (
    <StyledGoal>
        {/* DISPLAY CHECKBOX */}
      <StyledCheckBox>
        {" "}
        <input type="checkbox" defaultChecked={goal.fields.complete} disabled />
        <span />
      </StyledCheckBox>
      {/* DISPLAY TITLE */}
      <h2>{goal.fields.title}</h2>
      {/* DISPLAY DETAILS */}
      <StyledGoalDetails>
        <h3>DETAILS</h3>
        <p>{goal.fields.details}</p>
        <h3>UPDATES</h3>
        {/* map through updates */}
        {updates.map((update, index) => (
          <p key={index}>{update.fields.update}</p>
        ))}
      </StyledGoalDetails>
    </StyledGoal>
  );
};

export default Goal;