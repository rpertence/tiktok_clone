import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface HeartProps {
  width: number;
  height?: number;
  color: string;
}

const Heart = (props: HeartProps) => {
  const height = props.height ? props.height : (props.width / 29) * 26;

  return (
    <Svg width={props.width} height={height} viewBox="0 0 29 26" fill="none">
      <Path
        d="M28.5 7.99184C28.5 16.4448 20.05 22.9693 16.2796 25.4599C15.1881 26.1808 13.8123 26.1799 12.7215 25.4579C8.95167 22.9625 0.5 16.4274 0.5 7.99184C0.5 6.31449 1.01362 4.67966 1.96812 3.31893C2.92261 1.95819 4.26958 0.940539 5.81823 0.410115C7.36688 -0.120309 9.03869 -0.13661 10.5969 0.363521C12.155 0.863651 13.5205 1.85486 14.5 3.19674C15.4795 1.85486 16.845 0.863651 18.4031 0.363521C19.9613 -0.13661 21.6331 -0.120309 23.1818 0.410115C24.7304 0.940539 26.0774 1.95819 27.0319 3.31893C27.9864 4.67966 28.5 6.31449 28.5 7.99184Z"
        fill={props.color}
      />
    </Svg>
  );
};

export default Heart;
