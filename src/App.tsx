import List from "./List";
import { useState } from "react";
import styled from "styled-components";

const Page = styled.div`
  min-height: 100vh;
  background-color: #e2e8f0;
`;
export const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 54px;
`;

const InputTodo = styled.input.attrs((props) => ({
  // we can define static props
  type: "text",
}))`
  width: 250px;
  font-size: 24px;
  margin: 10px;
  border: 2px black solid;
  border-radius: 10px;
`;

const InputDate = styled.input.attrs((props) => ({
  // we can define static props
  type: "date",
}))`
  width: 250px;
  font-size: 24px;
  margin: 10px;
  border: 2px black solid;
  border-radius: 10px;
`;

const InputSend = styled.input.attrs((props) => ({
  // we can define static props
  type: "submit",
}))`
  width: 250px;
  font-size: 24px;
  margin: 10px;
  border: 2px black solid;
  border-radius: 10px;
  &:hover {
    color: #fa8072;
    background-color: #696969;
    cursor: pointer;
  }
`;

const Todo = styled.div`
  font-size: 20px;
`;

const Date = styled.div`
  font-size: 20px;
`;

const Line = styled.div`
  border-bottom: 1px solid #9ca3af;
  padding: 5px;
`;

export type Todo = {
  id?: number;
  date: string;
  newTodo: string;
  isChecked: boolean;
};

const App: React.FC = () => {
  const [newTodo, setNewTodo] = useState("");
  const [date, setDate] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleTodo(e: React.ChangeEvent<HTMLInputElement>) {
    setNewTodo(e.target.value);
  }

  function handleDate(e: React.ChangeEvent<HTMLInputElement>) {
    setDate(e.target.value);
  }

  const handleButtonClick = () => {
    if (newTodo === "" || date === "") return;
    setTodos([
      {
        // id,
        date, // date: date,
        newTodo, // newTodo: newTodo,
        isChecked: false,
      },
      ...todos,
    ]);
    setNewTodo("");
    setDate("");
    // id++;
  };

  return (
    <Page>
      <Container>
        <Title>Todo List</Title>

        <Todo>Todo</Todo>
        <div>
          <InputTodo
            type="text"
            value={newTodo}
            onChange={(e) => handleTodo(e)}
            placeholder="輸入"
          />
        </div>
        <Date>Date</Date>
        <div>
          {" "}
          <InputDate
            type="date"
            value={date}
            onChange={(e) => handleDate(e)}
            required
          />
        </div>
        <div>
          <InputSend type="submit" value="確認" onClick={handleButtonClick} />
        </div>
        <Line></Line>
      </Container>
      <List todos={todos} setTodos={setTodos} />
    </Page>
  );
};

export default App;
