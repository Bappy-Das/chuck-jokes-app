// import React from 'react';
// import './Button.scss'

// const Button = (props) => {
//     return (
//         <button
//           className="button-main"
//           style={{color:"props.color"}}
//         >
//           {props.label}
//         </button>
//     );
// };

// export default Button;

import React from 'react';

const buttonStyle = {
  margin: '10px 0'
};

const Button = ({ label, handleClick }) => (
  <button
    className="btn btn-default"
    style={buttonStyle}
    onClick={handleClick}
  >
    {label}
  </button>
);

export default Button;