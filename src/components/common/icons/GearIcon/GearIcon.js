import React from 'react';
import './GearIcon.scoped.scss';

import SvgIcon from "@material-ui/core/SvgIcon";
import IconButton from '@material-ui/core/IconButton';

export default function BellIcon(props) {
    return (
        <IconButton className="gear-icon">
            <SvgIcon
                {...props}
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                width="32px"
                height="32px"
                viewBox="0 0 32 32"
                enableBackground="new 0 0 32 32"
                xmlSpace="preserve"
            >
                <image
                    id="image0"
                    width="32"
                    height="32"
                    x="0"
                    y="0"
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAk1BMVEUAAADH1/fG2PjH1/fI2PrI2PrG1vbI2frI2PnH1/fH1/rG2PnI2frH1/nG1vnG1vnI2PrH1/nI2PjG1vjI2PrH1/vJ2fnG1vjPz//F1PTI2PnI1vrJ2fnJ2PrJ2fzJ2frF2vrH1/rI2PnJ2frP3//H1/nI2PrH1/fJ1vnJ2vrI2PrK2vrI2PrJ2fvI2fnI2Pr////ic3loAAAAL3RSTlMAQHAg3+9w799gYLCfoLBQkIBwcL9AULAQMK+Qf89QXzDAsM8Q4M+AUI/QMI9/rxDEuk4AAAABYktHRDCu3C3kAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH5QcbDC83HN5IGQAAAVZJREFUOMutU1tbwjAMbdeOgmxid8HJEERB8Xr+/78z6XrZx3gkL20uTU6SUyFuKTJTfKhMXnVnGshndBpgvpj67wCzBIoSuKfQ1STgAVaIil6bmpViEtCg5frWMo41Hi/9ncFT0hTybuxdFxuD+diiYZo+IiV8BJxSd1uC91zQTWm2zWJ4v+PKewMn3Kx4aW1IKv0lAw5tJ1pqdO8MBtI7Ng6Y4UZZrIf4ilp4D+csU++NC81g1KBXyOn25gbhi2r3rg6Gkl8Asckj3+1omj4gzeYiYCh2gkwl3iM0EYtZNCljEaG5BG4zR4Pt4N96+KFNidydC2KDFJ1s4B069KXxIXmVlR+14S2p82fcXxWWpcov4GS7sKy0zv4wXfeyPI8tBFEl7fuCMAPkVaKcxGHCyRI/A+WZDb/oJwE7wvk30J74h2sfQw+U52bntbgmbfh6rbil/ANKlCS9aLpazwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0wNy0yN1QxMjo0Nzo1NCswMDowMGu293oAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMDctMjdUMTI6NDc6NTQrMDA6MDAa60/GAAAAAElFTkSuQmCC"
                />
            </SvgIcon>
        </IconButton>
    );
};
