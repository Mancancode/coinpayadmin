import React from 'react'
import './modal.css'
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';

import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';

const styles = (theme) => ({
  root: {
    margin: 20,
    padding: theme.spacing(1),
    width: '100%',
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(0),
    top: theme.spacing(2),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(13),
    Width: 120,
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);
  
export default function Modal() {
  const [open, setOpen] = React.useState(false);
  const [select, setSelect] = React.useState('');

  const handleChange = (event) => {
    setSelect(Number(event.target.value) || '');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        edit
      </Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Pending Transaction
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <h1> From: OYEKACHI BEST </h1>
            <h3>Memo ID: 000127 </h3>
            <h3>Other Details: SEND VIA BANK TRANSFER</h3>
            <h3>Dated: 09/05/2021</h3> 
             </Typography>
          <Typography id="customized-dialog-title"   gutterBottom>
            <div >
            <h2>   BTC :  0.002345 </h2>
            <h2>    USD :  $2,000</h2>
            <h2>    NGN : 1,000,000</h2>
            </div>
            <h3>Adress: </h3> 
          </Typography>
          <Typography gutterBottom>
            Payment Status:
          </Typography>
              <InputLabel htmlFor="demo-dialog-native">Select</InputLabel>
              <Select
                native
                value={select}
                onChange={handleChange}
                input={<Input id="demo-dialog-native" />}
              >
                <option aria-label="None" value="" />
                <option className='pending' value={10}>Pending</option>
                <option className='complited'  value={20}>Completed</option>
                <option className='declined' value={20}>Declined</option>

              </Select>

              <Typography gutterBottom>
                Status :
          </Typography>
            
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Save changes
          </Button>
        </DialogActions>
      </Dialog>

            
        </div>
    );
}
