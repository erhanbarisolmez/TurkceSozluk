import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SvgVoice = props => (
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
      d="M8.182 8.748 12 6.84v10.275l-3.818-1.91V8.748Zm-1.18-1.544 6.907-3.454v16.453l-6.907-3.454H3.409a1.91 1.91 0 0 1-1.909-1.91V9.114a1.91 1.91 0 0 1 1.91-1.91h3.592Zm-.73 1.909H3.41v5.727h2.864V9.113ZM19.33 3.82c1.942 1.932 3.17 4.88 3.17 8.155 0 3.276-1.228 6.223-3.17 8.155l-1.504-1.203c1.666-1.555 2.765-4.076 2.765-6.952 0-2.875-1.099-5.396-2.765-6.951L19.33 3.82Zm-.648 8.155c0-2.3-.893-4.379-2.315-5.784L14.86 7.397c1.155 1.04 1.912 2.695 1.912 4.58 0 1.884-.757 3.539-1.912 4.579l1.506 1.205c1.422-1.406 2.315-3.484 2.315-5.785Z"
      fill="currentColor"
    />
  </Svg>
);
export default SvgVoice;
