import styled from "styled-components";
import { zoneStyleTitle, zoneStyleWrapper } from "./zoneStyle";
import FilterArticleCompo from "../commomComponents/FilterArticleCompo";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { RootState } from "src/store/store";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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
  margin-left: 20px;
`;

const MarginLeftWrapper = styled.div`
  margin-left: 30px;
  margin-right: 30px;
`;

const FilterResultZone: React.FC = () => {
  let location = useLocation();

  const [chooseTag, setChooseTag] = useState("");

  useEffect(() => {
    setChooseTag(location.state.name);
  }, [location.state.name]);

  const handleChange = (event: SelectChangeEvent) => {
    setChooseTag(event.target.value);
  };

  const selectTag = (state: RootState) => state.tag.value;
  const tag = useAppSelector(selectTag);

  const tagMenuItem = () => {
    return tag.map((item) => (
      <MenuItem key={item.id} value={item.name}>
        {item.name}
      </MenuItem>
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
            value={chooseTag || ""}
            label="Tag"
            onChange={handleChange}
          >
            {tagMenuItem()}
          </Select>
        </FormControl>
      </SeleteWrapper>
      <MarginLeftWrapper>
        <FilterArticleCompo tag={chooseTag} />
      </MarginLeftWrapper>
    </Wrapper>
  );
};

export default FilterResultZone;
