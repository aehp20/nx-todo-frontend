import { Routes, Route } from "react-router-dom";
import Layout from "../common/Layout";
import NoMatch from "../common/NoMatch";
import List from "./todos/List";
import Create from "./todos/Create";
import Update from "./todos/Update";
import { useI18NContext } from "@nx-todo-frontend/i18n";

export function App() {
  const { setLocale, _, _n, _c, _cn } = useI18NContext();

  const handleES = () => {
    setLocale("es")
  }
  const handleEN = () => {
    setLocale("en")
  }
  const handleFR = () => {
    setLocale("fr")
  }

  return (
    <div>
      <div className="flex flex-col gap-1">
        <div className="flex gap-1">
          <button onClick={handleES}>{_("ES")}</button>
          <button onClick={handleEN}>{_("EN")}</button>
          <button onClick={handleFR}>{_("FR")}</button>
        </div>

        <div>{_("This is my i18n lib")}</div>
        <div>{_("This {object} is a new entity", {object: "RobotR2"})}</div>
        <div>{_("This {object} is a new entity", {object: "RobotR3"})}</div>
        <div>{_("This {object} is a new entity", {object: 1000})}</div>
        <div>{_("Hello")}</div>
        <div>{_("How are you?")}</div>
        <div>{_("Thanks")}</div>

        <div>{_n("I have one car", "I have two cars", 1)}</div>
        <div>{_n("I have one car", "I have two cars", 2)}</div>
        <div>{_n("I have one car", "I have two cars", 0)}</div>
        <div>{_n("{name} and {name2} have one car", "{name} and {name2} have two cars", 1, {name: "Peter", name2: "Sarah"})}</div>
        <div>{_n("{name} and {name2} have one car", "{name} and {name2} have two cars", 2, {name: "Peter", name2: "Sarah"})}</div>

        <div>{_c("ExampleContext", "This message is under a context")}</div>
        <div>{_c("ExampleContext", "This {data} is under a context", {data: "PCU2"})}</div>
        <div>{_c("ExampleContext", "This {object} is under a context", {object: "MachineT2"})}</div>

        <div>{_cn("NewContext", "Document", "Documents", 1)}</div>
        <div>{_cn("NewContext", "Book", "Books", 2)}</div>
        <div>{_cn("NewContext", "My boy {name} has one car", "My boy {name} has many cars", 1, {name: "John"})}</div>
        <div>{_cn("NewContext", "My boy {name} has one car", "My boy {name} has many cars", 2, {name: "John"})}</div>
      </div>

      <h1>TODO LIST APP</h1>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<List />} />
          <Route path="create" element={<Create />} />
          <Route path="update/:id" element={<Update />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
