import React, { useContext } from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
import ThemeContext from "./ThemeContext";

function Home({ snacks, drinks }) {
  const { isChecked } = useContext(ThemeContext);
  return (
    <section className="col-md-8">
      <Card className={isChecked ? "light" : "dark"}>
        <CardBody className="text-center">
          <CardTitle>
            <p className="font-weight-bold">
              Welcome to Silicon Valley's Premier Dive Cafe!
            </p>
          </CardTitle>
          <p>
            Choose from {snacks.length} food or {drinks.length} drinks options.
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;