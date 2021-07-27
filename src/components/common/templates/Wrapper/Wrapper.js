import React from 'react';
import './Wrapper.scoped.scss';

// Material-UI
import Container from '@material-ui/core/Container';

// 스크린 내 화면을 반응형으로 정렬
// PC 화면에서는 2개 Breakpoint, 모바일에서는 Full-screen
const Wrapper = (props) => {
    return (
        <Container
            // maxWidth="lg"
            className="template-wrapper"
        >
            {props.children}
        </Container>
    );
};

export default Wrapper;
