import React from 'react';
import './AppWrapper.scoped.scss';

// Material-UI
import Container from '@material-ui/core/Container';

// 스크린 내 화면을 반응형으로 정렬
// PC 화면에서는 2개 Breakpoint, 모바일에서는 Full-screen
const AppWrapper = (props) => {
    return (
        <Container
            maxWidth="lg" // default
            className="template-app-wrapper"
        >
            {props.children}
        </Container>
    );
};

export default AppWrapper;
