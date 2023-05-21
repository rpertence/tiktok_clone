import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface DiscoverProps {
  width: number;
  height?: number;
  color: string;
}

const Discover = (props: DiscoverProps) => {
  const height = props.height ?? props.width;

  return (
    <Svg width={props.width} height={height} viewBox="0 0 21 21" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.75 10.5C0.75 4.98606 5.23606 0.5 10.75 0.5C16.2639 0.5 20.75 4.98606 20.75 10.5C20.75 16.0139 16.2639 20.5 10.75 20.5C5.23606 20.5 0.75 16.0139 0.75 10.5ZM13.5476 11.5832L15.8014 5.94856C15.8294 5.87866 15.8363 5.80209 15.8211 5.72834C15.806 5.65459 15.7696 5.5869 15.7163 5.53367C15.6631 5.48043 15.5954 5.44399 15.5217 5.42886C15.4479 5.41373 15.3713 5.42058 15.3014 5.44856L9.66683 7.7024C9.27985 7.85716 8.92834 8.08892 8.63363 8.38363C8.33892 8.67834 8.10716 9.02985 7.9524 9.41683L5.69856 15.0514C5.67058 15.1213 5.66373 15.1979 5.67886 15.2717C5.69399 15.3454 5.73043 15.4131 5.78367 15.4663C5.8369 15.5196 5.90459 15.556 5.97834 15.5711C6.05209 15.5863 6.12866 15.5794 6.19856 15.5514L11.8332 13.2976C12.2202 13.1428 12.5717 12.9111 12.8664 12.6164C13.1611 12.3217 13.3928 11.9702 13.5476 11.5832ZM11.9038 10.5C11.9038 11.1373 11.3873 11.6538 10.75 11.6538C10.1127 11.6538 9.59615 11.1373 9.59615 10.5C9.59615 9.86275 10.1127 9.34615 10.75 9.34615C11.3873 9.34615 11.9038 9.86275 11.9038 10.5Z"
        fill={props.color}
        fill-opacity="0.4"
      />
    </Svg>
  );
};

export default Discover;
