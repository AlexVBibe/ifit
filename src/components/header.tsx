import React, { FC, ReactElement, useState } from 'react';

type IHeader = {
}

export const Header: FC<IHeader> = ({/* destructured props */ }): ReactElement => {
    const [click, setClick] = useState(0);
    /* function body */
    return (
        <div>
            <p>Click: {click}</p>
            <button onClick={() => setClick(click + 1)}>
                Click Me!
            </button>
        </div>
    )
};