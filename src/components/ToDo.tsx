import React from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { Categories, IToDo, toDoState } from "../atoms";

const ToDoLi = styled.li`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #fff;
  &:last-child {
    border-bottom: 0;
  }
`;

const Text = styled.p`
  font-size: min(16px, 3.3vw);
`;

const BtnWrap = styled.div`
  button {
    border: 0;
    background: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.textColor};
    padding: 0 10px;
    line-height: 30px;
    margin-right: 5px;
    border-radius: 5px;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      background: ${(props) => props.theme.accentColor};
      color: ${(props) => props.theme.bgColor};
    }
  }
`;

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = { text, id, category: name as any };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  const deleteToDo = (event: React.MouseEvent) => {
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      return [
        ...oldToDos.slice(0, targetIndex),
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };
  return (
    <ToDoLi>
      <Text>{text}</Text>
      <BtnWrap>
        {category !== Categories.DOING && (
          <button name={Categories.DOING} onClick={onClick}>
            할 일
          </button>
        )}
        {category !== Categories.TO_DO && (
          <button name={Categories.TO_DO} onClick={onClick}>
            진행중
          </button>
        )}
        {category !== Categories.DONE && (
          <button name={Categories.DONE} onClick={onClick}>
            완료
          </button>
        )}
        <button onClick={deleteToDo}>
          <FaTrashAlt />
        </button>
      </BtnWrap>
    </ToDoLi>
  );
}

export default ToDo;
