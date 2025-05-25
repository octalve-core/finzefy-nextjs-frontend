import React from "react";

interface AuthHeaderTextProps {
  title: string | React.ReactNode;
  subText: string | React.ReactNode;
  centerTitle?: boolean;
  centerSubText?: boolean;
  className?: string;
  titleClassName?: string;
  subTextClassName?: string;
}

export const AuthHeaderText: React.FC<AuthHeaderTextProps> = ({
  title,
  subText,
  centerTitle = false,
  centerSubText = false,
  className = "",
  titleClassName = "",
  subTextClassName = "",
}) => {
  return (
    <div
      className={`flex flex-col gap-2.5 ${
        centerTitle && centerSubText ? "items-center" : "items-start"
      } ${className}`}
    >
      <h2
        className={`${
          centerTitle ? "text-center" : ""
        } ${titleClassName} font-nunito font-bold text-[26px] leading-[100%] tracking-[0%] text-center text-[#2D2D2D]`}
      >
        {title}
      </h2>
      <p
        className={`${
          centerSubText ? "text-center" : ""
        } ${subTextClassName} font-nunito font-normal text-[16px] leading-[100%] tracking-[0%] text-[#7F7F7F]`}
      >
        {subText}
      </p>
    </div>
  );
};
