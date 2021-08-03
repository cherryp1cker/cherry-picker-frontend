import React, { useState } from 'react';

// Material-UI
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

// Other Components
import Modal from '@/components/common/templates/Modal';
import RadioButtonGroup from '@/components/common/RadioButtonGroup';
import RadioButton from '@/components/common/RadioButton';
import Divider from '@/components/common/Divider';

// containers
import SearchByLocationContainer from '@/containers/search/SearchByLocationContainer';
import SearchByInfoContainer from '@/containers/search/SearchByInfoContainer';

const CONTAINERS = {
    'LOCATION': <SearchByLocationContainer />,
    'INFO': <SearchByInfoContainer />,
};

const SearchFilterModalContainer = (props) => {
    const { isOpen } = props;
    const [selectedFilter, setSelectedFilter] = useState('LOCATION');
    const onSelectFilter = (e) => setSelectedFilter(e.target.value);
    const selectedFilterContainer = CONTAINERS[selectedFilter];

    return (
        <Modal
            className="search-filter-modal"
            isOpen={isOpen}
        >
            <MuiDialogContent>
                <RadioButtonGroup
                    onClickButton={onSelectFilter}
                    defaultValue="LOCATION"
                >
                    <RadioButton
                        value="LOCATION"
                        labelText="위치로 찾기"
                        labelColor="#485F57"
                    />
                    <RadioButton
                        value="INFO"
                        labelText="정보로 찾기"
                        labelColor="#485F57"
                    />
                </RadioButtonGroup>
                <Divider text="FILTER" textColor="#ADBB96" />
                {selectedFilterContainer}
            </MuiDialogContent>
        </Modal>
    );
};

export default SearchFilterModalContainer;
