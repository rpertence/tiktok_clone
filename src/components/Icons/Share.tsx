import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface ShareProps {
  width: number;
  height?: number;
  color: string;
}

const Share = (props: ShareProps) => {
  const height = props.height ? props.height : (props.width / 27) * 26;

  return (
    <Svg width={props.width} height={height} viewBox="0 0 27 26" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.1193 0.294898C14.4893 -0.335067 13.4122 0.111099 13.4122 1.002V6.58779C7.59571 7.49329 1.32742 10.0869 0.503338 21.0559C0.435408 21.9601 1.4196 22.3127 2.0701 21.6811C3.71358 20.0852 6.75036 18.2449 13.4122 18.2449V24.1736C13.4122 25.0645 14.4893 25.5107 15.1193 24.8807L25.998 14.002C26.779 13.221 26.779 11.9546 25.998 11.1736L15.1193 0.294898Z"
        fill={props.color}
      />
    </Svg>
  );
};

export default Share;
