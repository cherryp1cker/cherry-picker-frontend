import React from 'react';
import './NaverMap.scoped.scss';

import {
    RenderAfterNavermapsLoaded,
    NaverMap as NaverMapComponent
} from 'react-naver-maps';

const NCP_CLIENT_ID = process.env.NCP_CLIENT_ID;

const mapStyle = {
    width: '100%',
    height: '100%',
};

const NaverMap = (props) => {
    return (
        <RenderAfterNavermapsLoaded
            ncpClientId={NCP_CLIENT_ID}
            error={<p>Maps Load Error</p>}
            loading={<p>Maps Loading...</p>}
        >
            <NaverMapComponent 
                className="naver-map" // not work
                mapDivId='react-naver-map'
                style={mapStyle}
                defaultCenter={{ lat: 37.3595704, lng: 127.105399 }}
                defaultZoom={10}
            />
        </RenderAfterNavermapsLoaded>
    );
};

export default NaverMap;
