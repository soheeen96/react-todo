import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { categoryState, toDoState } from "../atoms";
import { FaPlus } from "react-icons/fa";

const CreateForm = styled.form`
  border-top: 2px solid ${(props) => props.theme.accentColor}50;
  padding-top: 2%;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  input {
    background: none;
    border: 2px solid ${(props) => props.theme.accentColor};
    padding: 15px 10px;
    font-size: min(18px, 3.4vw);
    width: calc(100% - 60px);
    color: ${(props) => props.theme.accentColor};
    &::placeholder {
      color: ${(props) => props.theme.accentColor};
      font-size: min(18px, 3.4vw);
    }
  }
  button {
    width: 55px;
    border: 0;
    background: ${(props) => props.theme.accentColor};
    color: #fff;
  }
`;

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };
  return (
    <CreateForm onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "할 일을 적어주세요",
        })}
        placeholder="추가하기"
      />
      <button>
        <FaPlus />
      </button>
    </CreateForm>
  );
}

export default CreateToDo;
