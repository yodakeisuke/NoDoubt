import { FC } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import ThemeLogo from 'components/parts/ThemeLogo/ThemeLogo';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';

import TextLogo from '/public/textLogo.webp';

export const Header: FC = () => {
  return (
    <AppBar
      className="header"
      position="static"
      color="transparent"
      elevation={0}
      sx={{ px: 1 }}
    >
      <Toolbar variant="dense" disableGutters>
        <Link href="/" passHref>
          <ThemeLogo sx={{ width: '65px', mb: 1, mx: 0.5 }} />
        </Link>
        <Image
          src={TextLogo}
          layout="intrinsic"
          alt="textlogo"
          height="30vw"
          width="120vw"
        />
        <IconButton sx={{ ml: 'auto', pb: 0.3 }}>
          <SettingsIcon color="info" />
        </IconButton>
        <IconButton sx={{ pb: 0.3 }}>
          <LogoutIcon color="info" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
