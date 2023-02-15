import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { Categories, categoryState, newCategoryState } from "../atoms";

const SelectTab = styled.select`
  width: 100%;
  padding: 10px;
  background: ${(props) => props.theme.tabBg};
  border: 0;
  font-size: min(20px, 3.8vw);
  color: #fff;

  option {
    font-size: min(18px, 3.3vw);
    font-weight: 400;
  }
`;

function Category() {
  const [category, setCategory] = useRecoilState(categoryState);
  const newCategory = useRecoilValue(newCategoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  return (
    <>
      <SelectTab value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>할 일</option>
        <option value={Categories.DOING}>진행 중</option>
        <option value={Categories.DONE}>완료</option>
        {newCategory.length !== 0 &&
          newCategory.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
      </SelectTab>
    </>
  );
}

export default Category;
