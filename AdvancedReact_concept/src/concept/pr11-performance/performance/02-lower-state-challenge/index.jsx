import { useState } from "react";
import List from "./List";
import Form from "./Form";
import { data } from "../../../../data";
const LowerStateChallenge = () => {
  const [people, setPeople] = useState(data);


  const addPerson = (name) => {
    const fakeId = Date.now();
    const newPerson = { id: fakeId, name };
    setPeople([...people, newPerson]);
  };
  return (
    <section>
      <Form addPerson={addPerson} />
      <List people={people} />
    </section>
  );
};
export default LowerStateChallenge;
