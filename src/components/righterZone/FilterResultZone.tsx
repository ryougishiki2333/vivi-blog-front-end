import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";
import FilterArticleCompo from "../commomComponents/FilterArticleCompo";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { RootState } from "src/store/store";

const Title = styled.div`
  ${zoneStyleTitle}
`;
const Wrapper = styled.div`
  ${zoneStyleWrapper}
`;
const SeleteWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const FilterResultZone: React.FC = () => {
  const [chooseTag, setChooseTag] = useState("");
  // const [age, setAge] = useState("");
  // const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setChooseTag(event.target.value);
  };

  const selectTag = (state: RootState) => state.tag.value;
  const tag = useAppSelector(selectTag);

  const tagMenuItem = () => {
    return tag.map((item) => (
      <MenuItem value={item.name}>{item.name}</MenuItem>
    ));
  };
  return (
    <Wrapper>
      <SeleteWrapper>
        <FormControl sx={{ width: 200 }}>
          <InputLabel id="demo-simple-select-label">Tag</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={chooseTag}
            label="Tag"
            onChange={handleChange}
          >
            {tagMenuItem()}
          </Select>
        </FormControl>
      </SeleteWrapper>
      <FilterArticleCompo tag={chooseTag} />
    </Wrapper>
  );
};

export default FilterResultZone;
