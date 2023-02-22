import styled from "styled-components";
import Checkbox from "@mui/material/Checkbox";
import { Todo } from "./App";

const Container = styled.div`
  text-align: center;
  border: 2px black solid;
  border-radius: 10px;
  box-shadow: 1px 1px 5px #000;
  background-color: #f4f4f5;
  width: 250px;
  margin: 20px;
  padding: 10px;
  white-space: pre-wrap;
`;

const TodoText = styled.div`
  display: inline-block;
  font-size: 34px;
  width: 250px;
  overflow-wrap: break-word;
`;

const DateText = styled.div`
  font-size: 20px;
  color: #696969;
`;

const Delete = styled.button`
  font-size: 20px;
  margin: 10px;
  border: 2px black solid;
  border-radius: 10px;
  background-color: #d3d3d3;
  &:hover {
    color: #fa8072;
    background-color: #696969;
    cursor: pointer;
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const List = ({
  todos,
  setTodos,
}: {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}) => {
  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((_: any, i: number) => i !== id));
  };

  const handleOnChange = (id: number) => {
    setTodos((todos) =>
      todos.map((e, i: any) => {
        if (i === id) return { ...e, isChecked: !e.isChecked };
        return e;
      })
    );
  };

  return (
    <ListContainer>
      {todos.map((content: Todo, id: any) => (
        <Todoitem
          key={id}
          content={content}
          handleDeleteTodo={() => handleDeleteTodo(id)}
          handleOnChange={() => handleOnChange(id)}
        />
      ))}
    </ListContainer>
  );
};

const Todoitem = ({
  content,
  handleDeleteTodo,
  handleOnChange,
}: {
  content: Todo;
  handleDeleteTodo: () => void;
  handleOnChange: () => void;
}) => {
  return (
    <Container>
      <div>
        {/* 回傳打勾 */}

        <div>
          <Checkbox
            {...label}
            onChange={handleOnChange}
            checked={content.isChecked}
            // value={isChecked}
            defaultChecked
            color="default"
          />
        </div>

        {/* 回傳要做的事 */}

        <TodoText
          style={{
            textDecoration: content.isChecked ? "line-through" : "",
          }}
        >
          {content.newTodo}
        </TodoText>

        {/* 回傳要做的日期 */}
        <DateText>
          <div>{content.date}</div>
        </DateText>
        <div>
          <Delete onClick={handleDeleteTodo}>刪除</Delete>
        </div>
      </div>
    </Container>
  );
};

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default List;
