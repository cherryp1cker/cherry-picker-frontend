import React from 'react';
import './BellIcon.scoped.scss';

import SvgIcon from "@material-ui/core/SvgIcon";
import IconButton from '@material-ui/core/IconButton';

export default function BellIcon(props) {
    return (
        <IconButton className="bell-icon">
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
                    href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAdVBMVEUAAADPz//J2fnI2PnI2PrJ2PrH1/fJ1vnI2PnJ2fnH1/rG2PjH1/fF2vrH1/rI2frG1vjI2PjF2vTH1/fI2PnI2frJ2frF1PTK2vrP3//I2PrH1/nI2PrG1vjH1/nI1vrJ2fvI2PrH1/nG1vbH1/vI2Pr////BOrbmAAAAJXRSTlMAEFCv389gUN9/wHAgMGDvcHAwQLCfzzAwEO/gz7CgkM+/gHBAd30NbgAAAAFiS0dEJloImLUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQflBxsMLzZr2XiPAAAAy0lEQVQ4y72T2xaCIBBFIakUDbyU2j2t8/+/GC1WCRP0UqvzxGG2wwyMjP1VfJYIYJ4sIvGliVqlQSQDZF4wtlIGzEJxXT7XVYBQQD25BmgIIFC6tkJKE6T0Az/FGqTwHBvPt+h8oIfwPEBq2mL3GaA7XwP0RKM9Csc1OFDA70vhSIETlOdKCuQ4exfbUaB3y3p7iYcuzmu0CIyQwvBaDwhq6qwWobiuaVINbm8NLKwBo21QRgAziVfOzXTHfgw22sNHFpWS0PLGfqs77VEW+2bZ2xkAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDctMjdUMTI6NDc6NTMrMDA6MDCuEcn0AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA3LTI3VDEyOjQ3OjUzKzAwOjAw30xxSAAAAABJRU5ErkJggg=="
                />
            </SvgIcon>
        </IconButton>
    );
};
