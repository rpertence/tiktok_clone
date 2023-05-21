import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface SaveProps {
  width: number;
  height?: number;
  color: string;
}

const Save = (props: SaveProps) => {
  const height = props.height ? props.height : (props.width / 23) * 24;

  return (
    <Svg width={props.width} height={height} viewBox="0 0 23 24" fill="none">
      <Path
        d="M0.5 1.98512C0.5 0.888766 1.39543 0 2.5 0H20.5C21.6046 0 22.5 0.888767 22.5 1.98512V23.0058C22.5 23.7891 21.6289 24.2637 20.9631 23.8432L12.0369 18.2051C11.7093 17.9982 11.2907 17.9982 10.9631 18.2051L2.03688 23.8432C1.37115 24.2637 0.5 23.7891 0.5 23.0058V1.98512Z"
        fill={props.color}
      />
    </Svg>
  );
};

export default Save;
