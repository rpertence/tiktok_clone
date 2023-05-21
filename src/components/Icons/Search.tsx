import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface SearchProps {
  width: number;
  height?: number;
  color: string;
}

const Search = (props: SearchProps) => {
  const height = props.height ? props.height : (props.width / 18) * 19;

  return (
    <Svg width={props.width} height={height} viewBox="0 0 18 19" fill="none">
      <Path
        d="M0.0214844 8.15137C0.0214844 12.2383 3.33496 15.5518 7.42188 15.5518C8.78418 15.5518 10.041 15.1738 11.1133 14.5234L14.6465 18.0566C14.9893 18.3994 15.4463 18.5664 15.9209 18.5664C16.9404 18.5664 17.6963 17.793 17.6963 16.791C17.6963 16.3164 17.5293 15.877 17.1865 15.5254L13.6885 12.0186C14.4092 10.9111 14.8311 9.58398 14.8311 8.15137C14.8311 4.05566 11.5176 0.742188 7.42188 0.742188C3.33496 0.742188 0.0214844 4.05566 0.0214844 8.15137ZM2.52637 8.15137C2.52637 5.44434 4.72363 3.25586 7.42188 3.25586C10.1289 3.25586 12.3262 5.44434 12.3262 8.15137C12.3262 10.8584 10.1289 13.0469 7.42188 13.0469C4.72363 13.0469 2.52637 10.8584 2.52637 8.15137Z"
        fill={props.color}
      />
    </Svg>
  );
};

export default Search;
