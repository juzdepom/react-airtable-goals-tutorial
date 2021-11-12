import React, { useEffect, useState } from "react";
import Airtable from "airtable";
import Goal from "./components/Goal";
import styled from "styled-components";
import { GlobalStyle } from "./styles/Global.style";
import { apiKey, baseId } from "./airtableIds";




// base id appqfpGEd5sP5aLXx
const base = new Airtable({ apiKey: apiKey }).base(baseId);

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 4rem;
  margin: 1rem 0;
`;

function App() {

  //assign the data to states
  const [goals, setGoals] = useState([]);
  const [updates, setUpdates] = useState([]);

  //this method pulls in the data
  useEffect(() => {
    //pull in the 'goals' table view data
    base("goals")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => { 
        // console.log(records)
        setGoals(records);
        fetchNextPage();
      });
    //pull in the 'updates' table view data
    base("updates")
      .select({ view: "Grid view" })
      .eachPage((records, fetchNextPage) => {
        setUpdates(records);
        fetchNextPage();
      });
  }, []);

  return (
    <>
      <GlobalStyle />
      <StyledH1>My Goals</StyledH1>
      {/* map through the 'goals' data and display */}
      {goals.map((goal) => (
        <Goal
          key={goal.id}
          goal={goal}
          // filter through the 'updates' data
          updates={updates.filter(
            (update) => update.fields.goalid[0] === goal.id
          )}
        />
      ))}
    </>
  );
}

export default App;
