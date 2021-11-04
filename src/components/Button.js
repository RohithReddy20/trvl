import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline'];
const SIZES  = ['btn--medium','btn--large'];


export const Button = ({children,fallback, type, onClick, buttonStyle, buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    let ButtonTag = '/sign-up';

    if(fallback){  ButtonTag = fallback; } ;

    return (
        <Link to={`${ButtonTag}`} className="btn-mobile">
            <button
            className={`btn ${type} ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    );
};
