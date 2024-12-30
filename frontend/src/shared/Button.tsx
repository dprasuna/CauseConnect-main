
import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'submit' | 'button';  // Optional, default is 'button'
  link?: string;  // Optional, if you want the button to act as a link
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = 'button', link }) => {
  return link ? (
    <a href={link} className="inline-block w-full sm:w-auto">
      <button
        type={type}
        className="w-full sm:w-auto bg-yellow-400 text-blue-900 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-300 transition duration-300 text-center"
        onClick={onClick}
      >
        {text}
      </button>
    </a>
  ) : (
    <button
      type={type}
      className="w-full sm:w-auto bg-yellow-400 text-blue-900 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-300 transition duration-300"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
