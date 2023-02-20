import * as React from 'react';
import Svg, {G, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgHand = props => (
  <Svg
    width={28}
    height={31}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className=""
    {...props}>
    <G filter="url(#a)">
      <Path
        d="M15.91 4.65c0-.835-.321-1.637-.895-2.227a3.014 3.014 0 0 0-2.163-.923c-.811 0-1.59.332-2.163.923a3.198 3.198 0 0 0-.896 2.227v6.835l-1.396-.787a2.734 2.734 0 0 0-1.841-.307 2.786 2.786 0 0 0-1.62.95 2.936 2.936 0 0 0-.684 1.787 2.947 2.947 0 0 0 .556 1.833l5.495 7.539h11.603l1.244-10.216-7.24-2.1V4.65Zm4.997 9.166-.795 6.584h-8.79L6.44 13.69a.802.802 0 0 1 .02-1.036.748.748 0 0 1 1-.118l4.373 2.498V4.65c0-.278.108-.546.3-.742.19-.197.45-.308.72-.308.27 0 .53.11.721.308.191.196.299.464.299.742v7.088l7.035 2.079Z"
        fill="currentColor"
      />
    </G>
    <Defs></Defs>
  </Svg>
);
export default SvgHand;
