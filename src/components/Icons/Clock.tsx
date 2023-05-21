import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface ClockProps {
  width: number;
  height?: number;
  color: string;
}

const Clock = (props: ClockProps) => {
  const height = props.height ? props.height : (props.width / 17) * 19;

  return (
    <Svg width={props.width} height={height} viewBox="0 0 17 19" fill="none">
      <Path
        d="M8.64844 18.6094C9.78385 18.6094 10.849 18.3932 11.8438 17.9609C12.8385 17.5339 13.7135 16.9401 14.4688 16.1797C15.2292 15.4245 15.8255 14.5495 16.2578 13.5547C16.6901 12.5599 16.9062 11.4948 16.9062 10.3594C16.9062 9.22917 16.6901 8.16667 16.2578 7.17188C15.8255 6.17708 15.2292 5.29948 14.4688 4.53906C13.7135 3.77865 12.8359 3.1849 11.8359 2.75781C10.8411 2.32552 9.77865 2.10938 8.64844 2.10938C7.51823 2.10938 6.45312 2.32552 5.45312 2.75781C4.45833 3.1849 3.58073 3.77865 2.82031 4.53906C2.0651 5.29948 1.47135 6.17708 1.03906 7.17188C0.611979 8.16667 0.398438 9.22917 0.398438 10.3594C0.398438 11.4948 0.611979 12.5599 1.03906 13.5547C1.47135 14.5495 2.06771 15.4245 2.82812 16.1797C3.58854 16.9401 4.46615 17.5339 5.46094 17.9609C6.45573 18.3932 7.51823 18.6094 8.64844 18.6094ZM8.64844 11.8594C8.23698 11.8594 7.88542 11.7135 7.59375 11.4219C7.30729 11.1302 7.16406 10.7786 7.16406 10.3672C7.16406 10.1068 7.22917 9.86979 7.35938 9.65625C7.48958 9.4375 7.67448 9.2526 7.91406 9.10156V5.53125C7.91406 5.32812 7.98438 5.15625 8.125 5.01562C8.26562 4.875 8.4401 4.80469 8.64844 4.80469C8.85677 4.80469 9.03125 4.875 9.17188 5.01562C9.3125 5.15625 9.38281 5.32812 9.38281 5.53125V9.10938C9.6224 9.25 9.80729 9.42708 9.9375 9.64062C10.0729 9.85417 10.1406 10.0964 10.1406 10.3672C10.1406 10.7839 9.99479 11.138 9.70312 11.4297C9.41667 11.7161 9.0651 11.8594 8.64844 11.8594ZM7.63281 2.44531L9.66406 2.45312V1.33594C9.66406 1.04948 9.5651 0.809896 9.36719 0.617188C9.16927 0.419271 8.92969 0.320312 8.64844 0.320312C8.3776 0.320312 8.14062 0.419271 7.9375 0.617188C7.73438 0.809896 7.63281 1.04948 7.63281 1.33594V2.44531ZM13.875 4.35938L15.2109 5.86719L16.0625 5.02344C16.2917 4.79427 16.4062 4.54167 16.4062 4.26562C16.4062 3.99479 16.3125 3.76562 16.125 3.57812C15.9427 3.39062 15.7135 3.29688 15.4375 3.29688C15.1354 3.29688 14.875 3.40104 14.6562 3.60938L13.875 4.35938Z"
        fill={props.color}
        fill-opacity="0.6"
      />
    </Svg>
  );
};

export default Clock;