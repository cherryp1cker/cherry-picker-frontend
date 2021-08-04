import React from 'react';

// Other Components
import CollapseContainer from '@/components/common/templates/CollapseContainer';
import SeekBar from '@/components/common/SeekBar'

const MENU_TYPE = ['양식', '한식', '일식', '중식', '퓨전', '기타'];

const SearchByInfoContainer = (props) => {
    return (
        <>
            <CollapseContainer headerText="음식 종류">
                {MENU_TYPE.map((type, index) => (
                    <button key={index}>{type}</button>
                ))}
            </CollapseContainer>
            <CollapseContainer headerText="지역">
                {MENU_TYPE.map((type, index) => (
                    <button key={index}>{type}</button>
                ))}
            </CollapseContainer>
            <CollapseContainer headerText="가격대">
                <SeekBar />
            </CollapseContainer>
        </>
    );
};

export default SearchByInfoContainer;
