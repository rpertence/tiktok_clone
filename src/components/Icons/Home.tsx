import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface HomeProps {
  width: number;
  height?: number;
  color: string;
}

const Home = (props: HomeProps) => {
  const height = props.height ?? (props.width / 22) * 19;
  return (
    <Svg width={props.width} height={height} viewBox="0 0 22 19" fill="none">
      <Path
        d="M11.5556 0.210955C11.2359 -0.0703185 10.7641 -0.0703183 10.4444 0.210955L0.799845 8.69577C0.198041 9.22521 0.562831 10.2373 1.35545 10.2373H2.74713L3.93224 17.5356C4.06946 18.3806 4.78181 19 5.6165 19H10.1463V12.428C10.1463 12.186 10.3374 11.9899 10.5731 11.9899H11.4269C11.6626 11.9899 11.8537 12.186 11.8537 12.428V19H16.3835C17.2182 19 17.9305 18.3806 18.0678 17.5356L19.2529 10.2373H20.6445C21.4372 10.2373 21.802 9.22521 21.2002 8.69577L11.5556 0.210955Z"
        fill={props.color}
      />
    </Svg>
  );
};

export default Home;
