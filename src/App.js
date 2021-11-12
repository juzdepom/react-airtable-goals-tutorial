import React, { useEffect, useState } from "react";
import Airtable from "airtable";
import { baseId, apiKey } from './airtableIds'


// base id appqfpGEd5sP5aLXx
const base = new Airtable({ apiKey: apiKey }).base(baseId);

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
    <div>
    </div>
  );
}

export default App;
