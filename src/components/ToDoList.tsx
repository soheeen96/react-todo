import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { toDoSelector } from "../atoms";
import Category from "./Category";
import CreateToDo from "./CreateToDo";
import NewCategory from "./NewCategory";
import ToDo from "./ToDo";

const CreateToDoWrap = styled.ul`
  margin-top: 4%;
  background: ${(props) => props.theme.boxColor};
  padding: 0 20px;
`;

function ToDoList() {
  const toDos = useRecoilValue(toDoSelector);
  return (
    <div>
      <Category />
      <NewCategory />

      <CreateToDo />
      <CreateToDoWrap>
        {toDos?.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </CreateToDoWrap>
    </div>
  );
}

export default ToDoList;
