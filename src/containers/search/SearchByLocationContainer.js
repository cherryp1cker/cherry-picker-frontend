import React from 'react';

// Other Components
import FullContainer from '@/components/common/templates/FullContainer';
import CollapseContainer from '@/components/common/templates/CollapseContainer';

const AREA_TYPE_01 = ['서울', '경기', '부산', '제주', '충청', '기타'];
const AREA_TYPE_02 = ['강원', '전라', '대구', '-', '-', '-'];

const SearchByLocationContainer = (props) => {
    return (
        <>
            <FullContainer>
                {AREA_TYPE_01.map((type, index) => (
                    <button key={index}>{type}</button>
                ))}
            </FullContainer>
            <CollapseContainer>
                {AREA_TYPE_02.map((type, index) => (
                    <button key={index}>{type}</button>
                ))}
            </CollapseContainer>
        </>
    );
};

export default SearchByLocationContainer;
