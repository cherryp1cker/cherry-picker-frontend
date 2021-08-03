import React from 'react';
import './SearchFilterModal.scoped.scss';

// Material-UI
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from '@material-ui/core/Collapse';


import Modal from '@/components/common/templates/Modal';

const MENU_TYPE = ['양식', '한식', '일식', '중식', '퓨전', '기타'];

const Page = (props) => {
    const { isOpen } = props;
    const [open01, setOpen01] = React.useState(false);
    const handleClick = () => {
        setOpen01(!open01);
      };

    return (
        <Modal
            className="search-filter-modal"
            isOpen={isOpen}
        >
            <MuiDialogContent>
                <FormControl>
                    <RadioGroup
                        row
                        onChange={(e) => { console.log(e.target.value); }}
                    >
                        <FormControlLabel
                            value="location"
                            control={<Radio />}
                            label="위치로 찾기"
                            labelPlacement="end"
                        />
                        <FormControlLabel
                            value="info"
                            control={<Radio />}
                            label="정보로 찾기"
                            labelPlacement="end"
                        />
                    </RadioGroup>
                </FormControl>
                <div>
                    FILTER
                </div>
                <div>
                    {MENU_TYPE.map((type, index) => (
                        <button key={index}>{type}</button>
                    ))}
                </div>
                <ListItem button onClick={handleClick}>
                    {/* <ListItemText primary="Inbox" /> */}
                    {open01 ? <span>닫기</span> : <span>열기</span>}
                </ListItem>
                <Collapse in={open01} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button>
                            {/* <ListItemText primary="Starred" /> */}
                            {MENU_TYPE.map((type, index) => (
                                <button key={index}>{type}</button>
                            ))}
                        </ListItem>
                    </List>
                </Collapse>
            </MuiDialogContent>
        </Modal>
    );
};

export default Page;
