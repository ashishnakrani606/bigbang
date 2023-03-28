import React from "react";

function Button({children, color, outline, name, onClick, size, className, secondary }) {
  return (
    <>
      <button
        className={`btn transition-all duration-500 whitespace-nowrap text-xs px-2 py-[6px] rounded-lg leading-normal  
          ${secondary == "true" ? "text-blacklight dark:text-white" : "text-white"}
          ${
            color == "yellow"
              ? "bg-secondary-yellow !text-blacklight  hover:bg-[#ffe380] dark:hover:bg-[#ffeeb3]"
              : "" || color == "grey"
              ? "bg-primary-purple !text-blacklight hover:bg-[#eef2f6] dark:hover:bg-[#404040]"
              : "" || color == "greydark"
              ? "bg-gray-1 hover:bg-black dark:hover:bg-[#333333]"
              : "" || color == "blue"
              ? "text-blacklight bg-primary-blue"
              : "" || color == "red"              
              ? "bg-red-300"
              : "" || color == "bluedark"
              ? " bg-blue-1 text-white hover:bg-[#367bd4]"
              : "" || color == "secondary-red"
              ? "bg-secondary-red hover:bg-[#ff3333] dark:hover:bg-[#ff6666]"
              : "" || color == "winered"
              ? "bg-secondary-redb "
              : "" || color == "redlight"
              ? "bg-secondary-red/70 text-white hover:bg-[#fa6b6e]"
              : "" || color == "lightgrey"
              ? "bg-black/5 dark:bg-white/5 text-blacklight dark:text-white hover:bg-[#e3e6e8] dark:hover:!bg-[#404040]"
              : "" || color == "lightgreen"
              ? "text-black bg-secondary-greenb hover:bg-[#a4eba9]"
              : "" || color == "primarygreen"
              ? "bg-primary-greenb hover:!bg-[#26a05b] dark:hover:!bg-[#25a75d]"
              : "" || color == "green"
              ? " bg-primary-green hover:!bg-[#1c7d46] dark:hover:!bg-[#25a75d]"
              : "" || color == "teal"
              ? "text-blacklight bg-secondary-greena hover:bg-[#89dcbe] dark:hover:bg-[#b0e8d3]"
              : "" || color == "blacklight"
              ? "text-white bg-blacklight dark:bg-secondary-purpleb dark:text-blacklight dark:hover:bg-[#b8b8e6] hover:bg-opacity-90"
              : "" || color == "purple"
              ? "bg-secondary-purplea text-white dark:!text-blacklight hover:bg-[#8395fb] dark:hover:!bg-[#b5c0fd]"
              : ""
          } 
          ${outline == "true" ? `border !bg-transparent` : ""}
          ${
            outline == "true" && color == "red"
              ? "border-secondary-red !text-secondary-red"
              : "" || (outline == "true" && color == "grey")
              ? "border-black/10 text-blacklight dark:!border-white/10 dark:!text-white"
              : "" || (outline == "true" && color == "blacklight")
              ? "border-black/20 text-blacklight dark:!border-white/20 dark:!text-white"
              : ""
          }
          ${
            size == "large"
              ? "px-3 !py-2 leading-[20px]"
              : "" || size == "medium"
              ? "px-2 !py-1 text-sm"
              : "" || size == "small"
              ? "px-2 !py-[5px]"
              : ""
          } 
          ${className}       
        `}
        onClick={onClick}
      >
        {children}
        {name}
      </button>
    </>
  );
}

export default Button;
