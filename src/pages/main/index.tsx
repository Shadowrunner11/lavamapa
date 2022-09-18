import { Box } from '@mui/material';
import Header from '../../containers/Header';
import NavigationBar from '../../components/NavigationBar';
import { makeStyles } from 'tss-react/mui';
import MapChart from '../../containers/Map';

const Main = () => {
  const {classes} = useStyles();

  return(
    <Box className={classes.root}>
      <Header />
      <NavigationBar />
      <MapChart/>
    </Box>
  );
};

const useStyles = makeStyles({name: 'Root'})(
  ({palette}) => ({
    root: {
      backgroundColor: palette.background.default,
      minHeight      : '100vh'
    }
  })
);

export default Main;