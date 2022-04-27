import React, { ReactNode } from 'react';

import styled from '@emotion/styled';

import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';

interface Props {
  sx?: SxProps<Theme> | undefined;
  children: ReactNode;
}

const BackgroundStripe = styled.button`
  position: relative;
  background: repeating-linear-gradient(
    -45deg,
    rgba(139, 198, 202, 0.3),
    rgba(139, 198, 202, 0.3) 10px,
    #fff 0,
    #fff 20px
  );
  padding: 1em;
  color: #65513f;
  border: none;
`;

/**
 * 背景ストライプのテープ風。MUIのBoxでラップしておりsxPropを受ける。
 * @param  sx
 */
export const StripeTape: React.FC<Props> = ({ children, sx }) => {
  return (
    <Box sx={sx}>
      <BackgroundStripe>{children}</BackgroundStripe>
    </Box>
  );
};

export default StripeTape;
