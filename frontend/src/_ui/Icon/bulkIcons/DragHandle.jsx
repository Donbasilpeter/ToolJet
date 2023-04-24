import React from 'react';

const DragHandle = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg
    width={width}
    height={width}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M10.5022 11.25C10.5022 11.9404 9.94255 12.5 9.2522 12.5C8.56184 12.5 8.0022 11.9404 8.0022 11.25C8.0022 10.5596 8.56184 10 9.2522 10C9.94255 10 10.5022 10.5596 10.5022 11.25Z"
      fill={fill}
    />
    <path
      opacity="0.4"
      d="M10.5022 6.25C10.5022 6.94036 9.94255 7.5 9.2522 7.5C8.56184 7.5 8.0022 6.94036 8.0022 6.25C8.0022 5.55964 8.56184 5 9.2522 5C9.94255 5 10.5022 5.55964 10.5022 6.25Z"
      fill={fill}
    />
    <path
      opacity="0.4"
      d="M10.5022 16.25C10.5022 16.9404 9.94255 17.5 9.2522 17.5C8.56184 17.5 8.0022 16.9404 8.0022 16.25C8.0022 15.5596 8.56184 15 9.2522 15C9.94255 15 10.5022 15.5596 10.5022 16.25Z"
      fill={fill}
    />
    <path
      d="M15.9977 11.25C15.9977 11.9404 15.4381 12.5 14.7477 12.5C14.0574 12.5 13.4977 11.9404 13.4977 11.25C13.4977 10.5596 14.0574 10 14.7477 10C15.4381 10 15.9977 10.5596 15.9977 11.25Z"
      fill={fill}
    />
    <path
      opacity="0.4"
      d="M15.9977 6.25C15.9977 6.94036 15.4381 7.5 14.7477 7.5C14.0574 7.5 13.4977 6.94036 13.4977 6.25C13.4977 5.55964 14.0574 5 14.7477 5C15.4381 5 15.9977 5.55964 15.9977 6.25Z"
      fill={fill}
    />
    <path
      opacity="0.4"
      d="M15.9977 16.25C15.9977 16.9404 15.4381 17.5 14.7477 17.5C14.0574 17.5 13.4977 16.9404 13.4977 16.25C13.4977 15.5596 14.0574 15 14.7477 15C15.4381 15 15.9977 15.5596 15.9977 16.25Z"
      fill={fill}
    />
  </svg>
);

export default DragHandle;
