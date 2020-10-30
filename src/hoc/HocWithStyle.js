import { withStyles } from '@material-ui/core/styles';
import MaterialAppBar from '../components/MaterialAppBar/MaterialAppBar'
import myuseStyles from '../components/MaterialAppBar/MaterialAppBarCss';

const StyledComponent = (props)=> {

    const { classes } = props;
    return <MaterialAppBar classes={classes}/>;


}

export default withStyles(myuseStyles)(StyledComponent);