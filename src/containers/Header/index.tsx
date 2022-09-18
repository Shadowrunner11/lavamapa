import { Box, Link, Typography } from '@mui/material';
import Banner from '../../assets/banner.jpg';
import Logo from '../../assets/logoLava.png';
import Image from 'mui-image';
import { makeStyles } from 'tss-react/mui';
import { memo } from 'react';

const Header = () => {
  const {classes} = useStyles();

  return (
    <Box component='header' className={classes.container}>
      <Link href='//www.lavaperu.com'>
        <Image height={100} width={100} src={Logo} />
        <Typography>LABORATORIO DE VANGUARDIA PEDAGOGICA</Typography>
      </Link>
      <Typography variant='h1' color='primary'>MAPA HUMANISTA</Typography>
    </Box>
  );
};

const useStyles = makeStyles({name: 'Header'})(() => ({
  container: {
    backgroundImage   : `url(${Banner})`,
    backgroundPosition: 'center',
    backgroundRepeat  : 'no-repeat',
    backgroundSize    : 'cover',
    height            : 360
  }
}));

export default memo(Header);