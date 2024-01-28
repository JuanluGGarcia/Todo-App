import { FILTERS } from "../../constants/filters";
import { StyleSpanClearComplete, StyledButtonFilter, StyledFiltersContainer } from "./style";

const Filters = ({ tasks, filterActive, setFilterActive}) => {
    return (
        <StyledFiltersContainer>
            <span>XX item left</span>
            <div>
                <StyledButtonFilter
                    $active = {filterActive === FILTERS.ALL}
                    onClick={() => changeFilter(0, setFilterActive)}
                >
                    All
                </StyledButtonFilter>
                
                <StyledButtonFilter
                    $active = {filterActive === FILTERS.ACTIVE}
                    onClick={() => changeFilter(1, setFilterActive)}
                >
                    Active
                </StyledButtonFilter>
                
                <StyledButtonFilter
                    $active = {filterActive === FILTERS.COMPLETED}
                    onClick={() => changeFilter(2, setFilterActive)}
                >
                    Completed
                </StyledButtonFilter>
            </div>
            <StyleSpanClearComplete>Clear Complete</StyleSpanClearComplete>
        </StyledFiltersContainer>
    );
    
};

const changeFilter = (newFilter, setFilterActive) => {
    setFilterActive(newFilter);
};

export default Filters;