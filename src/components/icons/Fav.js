import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgFav = props => (
  <Svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 4a1 1 0 0 0-1 1v14.057l5.419-3.87a1 1 0 0 1 1.162 0L18 19.056V5a1 1 0 0 0-1-1H7ZM4.879 2.879A3 3 0 0 1 7 2h10a3 3 0 0 1 3 3v16a1 1 0 0 1-1.581.814L12 17.229l-6.419 4.585A1 1 0 0 1 4 21V5a3 3 0 0 1 .879-2.121Z"
      fill="currentColor"
    />
  </Svg>
);
export default SvgFav;
