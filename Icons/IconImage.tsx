import { Svg, Path, Defs, LinearGradient } from "react-native-svg";

export const IconImage = () => {
  return (
    <Svg width="25" height="25" viewBox="0 0 32 32" fill="none">
      <Path
        d="M13.0381 4.36347C13.8676 2.92682 15.5891 2.32625 17.099 2.85757C17.858 3.11076 18.531 3.63186 18.9625 4.37932L28.5751 21.0289C30.1366 23.7334 29.21 27.1916 26.5055 28.7531C25.9646 29.0653 25.2729 28.88 24.9606 28.3391L15.9958 12.8115L7.04001 28.3233C6.72774 28.8642 6.03609 29.0495 5.49518 28.7372C2.79069 27.1758 1.86405 23.7175 3.42549 21.013L13.0381 4.36347Z"
        fill="url(#paint0_linear_1738_4540)"
      />
      <Path
        d="M16.0116 28.9034C17.8853 28.9034 19.4043 27.3844 19.4043 25.5107C19.4043 23.637 17.8853 22.118 16.0116 22.118C14.1379 22.118 12.6189 23.637 12.6189 25.5107C12.6189 27.3844 14.1379 28.9034 16.0116 28.9034Z"
        fill="url(#paint1_linear_1738_4540)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_1738_4540"
          x1="29.3337"
          y1="28.9047"
          x2="-2.31647"
          y2="19.5782"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#06C149" />
          <stop offset="1" stop-color="#1ADF61" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_1738_4540"
          x1="29.3337"
          y1="28.9047"
          x2="-2.31647"
          y2="19.5782"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#06C149" />
          <stop offset="1" stop-color="#1ADF61" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};
