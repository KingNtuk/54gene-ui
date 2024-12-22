import React from 'react';

const Button = (props) => {
  const {
    title,
    bgColor,
    onClickHandler,
    onClick,
    color,
    borderColor,
    width,
    height,
    fontSize,
    padding,
  } = props;
  return (
    <button
      style={{
        padding: padding || 12,
        border:
          borderColor ||
          `1px solid ${bgColor === `#F2E14F` ? bgColor : `#1D2498`}`,
        fontSize: fontSize || 14,
        color: color || '#1D2498',
        background: bgColor,
        marginLeft: 0,
        fontWeight: 'bold',
        width: width || 150,
        height: height || 50,
      }}
      onClick={onClick || onClickHandler}
    >
      {title}
    </button>
  );
};

export default Button;
