import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

export const HomeIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export const SearchIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5006 11.0006H11.7106L11.4306 10.7306C12.6306 9.33063 13.2506 7.42063 12.9106 5.39063C12.4406 2.61063 10.1206 0.390626 7.32063 0.0506256C3.09063 -0.469374 -0.469374 3.09063 0.0506256 7.32063C0.390626 10.1206 2.61063 12.4406 5.39063 12.9106C7.42063 13.2506 9.33063 12.6306 10.7306 11.4306L11.0006 11.7106V12.5006L15.2506 16.7506C15.6606 17.1606 16.3306 17.1606 16.7406 16.7506C17.1506 16.3406 17.1506 15.6706 16.7406 15.2606L12.5006 11.0006ZM6.50063 11.0006C4.01063 11.0006 2.00063 8.99063 2.00063 6.50063C2.00063 4.01063 4.01063 2.00063 6.50063 2.00063C8.99063 2.00063 11.0006 4.01063 11.0006 6.50063C11.0006 8.99063 8.99063 11.0006 6.50063 11.0006Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export const ShareIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 16H3C2.45 16 2 15.55 2 15V3C2 2.45 2.45 2 3 2H8C8.55 2 9 1.55 9 1C9 0.45 8.55 0 8 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16V10C18 9.45 17.55 9 17 9C16.45 9 16 9.45 16 10V15C16 15.55 15.55 16 15 16ZM11 1C11 1.55 11.45 2 12 2H14.59L5.46 11.13C5.07 11.52 5.07 12.15 5.46 12.54C5.85 12.93 6.48 12.93 6.87 12.54L16 3.41V6C16 6.55 16.45 7 17 7C17.55 7 18 6.55 18 6V1C18 0.45 17.55 0 17 0H12C11.45 0 11 0.45 11 1Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export const MapIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 19 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 0C15.55 0 16 0.45 16 1V3H18C18.55 3 19 3.45 19 4C19 4.55 18.55 5 18 5H16V7C16 7.55 15.55 8 15 8C14.45 8 14 7.55 14 7V5H12C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3H14V1C14 0.45 14.45 0 15 0ZM8 12C9.1 12 10 11.1 10 10C10 8.9 9.1 8 8 8C6.9 8 6 8.9 6 10C6 11.1 6.9 12 8 12ZM10.72 2.47C10.28 2.83 10 3.38 10 4C10 5.1 10.9 6 12 6H13V7C13 8.1 13.9 9 15 9C15.32 9 15.62 8.92 15.89 8.79C15.96 9.24 16 9.71 16 10.2C16 13.38 13.55 17.12 8.66 21.43C8.28 21.76 7.71 21.76 7.33 21.43C2.45 17.12 0 13.38 0 10.2C0 5.22 3.8 2 8 2C8.94 2 9.86 2.16 10.72 2.47Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export const SettingIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon
      {...props}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 15C0 15.55 0.45 16 1 16H6V14H1C0.45 14 0 14.45 0 15ZM0 3C0 3.55 0.45 4 1 4H10V2H1C0.45 2 0 2.45 0 3ZM10 17V16H17C17.55 16 18 15.55 18 15C18 14.45 17.55 14 17 14H10V13C10 12.45 9.55 12 9 12C8.45 12 8 12.45 8 13V17C8 17.55 8.45 18 9 18C9.55 18 10 17.55 10 17ZM4 7V8H1C0.45 8 0 8.45 0 9C0 9.55 0.45 10 1 10H4V11C4 11.55 4.45 12 5 12C5.55 12 6 11.55 6 11V7C6 6.45 5.55 6 5 6C4.45 6 4 6.45 4 7ZM18 9C18 8.45 17.55 8 17 8H8V10H17C17.55 10 18 9.55 18 9ZM13 6C13.55 6 14 5.55 14 5V4H17C17.55 4 18 3.55 18 3C18 2.45 17.55 2 17 2H14V1C14 0.45 13.55 0 13 0C12.45 0 12 0.45 12 1V5C12 5.55 12.45 6 13 6Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};
