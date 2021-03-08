import React from 'react';

import './custom-button.styles.scss';

export const CustomButton = ({children, ...otherProps}) => (
    <div className="custom-button" {...otherProps} >
        {children}
    </div>
);
