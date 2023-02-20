import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgMore = props => (
  <Svg
    width={18}
    height={6}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      d="M9 .75A2.257 2.257 0 0 1 11.25 3 2.257 2.257 0 0 1 9 5.25 2.257 2.257 0 0 1 6.75 3 2.257 2.257 0 0 1 9 .75Zm-6.75 0A2.257 2.257 0 0 1 4.5 3a2.257 2.257 0 0 1-2.25 2.25A2.257 2.257 0 0 1 0 3 2.257 2.257 0 0 1 2.25.75Zm13.5 0A2.257 2.257 0 0 1 18 3a2.257 2.257 0 0 1-2.25 2.25A2.257 2.257 0 0 1 13.5 3 2.257 2.257 0 0 1 15.75.75Z"
      fill="currentColor"
    />
  </Svg>
);
export default SvgMore;
