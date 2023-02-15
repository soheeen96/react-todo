import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { newCategoryState, addCategoryState } from "../atoms";
import { FaPlus } from "react-icons/fa";

const NewCategoryForm = styled.form`
  width: 100%;
  margin: 2% 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  input {
    background: none;
    border: 2px solid ${(props) => props.theme.tabBg};
    padding: 8px 10px;
    width: calc(100% - 60px);
    color: ${(props) => props.theme.tabBg};
    &::placeholder {
      color: ${(props) => props.theme.tabBg};
    }
  }
  button {
    width: 55px;
    border: 0;
    background: ${(props) => props.theme.tabBg};
    color: #fff;
  }
`;

interface ICategory {
  category: string;
}

function NewCategory() {
  const [newCategoryActive, setNewCategoryActive] =
    useRecoilState(addCategoryState);
  const [newCategory, setNewCategory] = useRecoilState(newCategoryState);
  const { register, handleSubmit, setValue } = useForm<ICategory>();

  const onValid = ({ category }: ICategory) => {
    setNewCategory((allCategories) => {
      return [...allCategories, category];
    });
    setValue("category", "");
    setNewCategoryActive(false);
  };

  const handleAddCategoryDelete = () => {
    setNewCategoryActive(false);
  };

  return (
    <>
      <NewCategoryForm onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          {...register("category", { required: true })}
          placeholder="카테고리 추가하기"
        />
        <button onClick={handleAddCategoryDelete}>
          <FaPlus />
        </button>
      </NewCategoryForm>
    </>
  );
}

export default NewCategory;
