"use client";

const Button = ({ label, onClick, disabled, danger, small, icon: Icon }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        relative
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-lg
        hover:opacity-80
        transition
        w-full
        flex
        items-center
        justify-center
        gap-2
        ${!danger ? "bg-blue-500" : "bg-rose-700"}
        ${!danger ? "border-blue-500" : "border-rose-700"}
        ${!danger ? "text-light" : "text-white"}
        ${small ? "text-sm" : "text-base"}
        ${small ? "py-1" : "py-3"}
        ${small ? "font-light" : "font-medium"}
        ${small ? "border-[1px]" : "border-2"}
      `}
    >
      {Icon && <Icon size={24} className="" />}
      {label}
    </button>
  );
};

export default Button;
