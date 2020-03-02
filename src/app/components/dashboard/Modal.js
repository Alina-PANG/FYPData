import React from 'react';
import Modal from '@material-ui/core/Modal';


const classes = {
  paper: {
    position: 'absolute',
    width: 400,
    // backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    // boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },
  images:{}
};

class ImgModal extends React.Component {

    render(){
        const tryRequire = (path) => {
            try {
             require(path);
             console.log(path)
             return true;
            } catch (err) {
                console.log("false")
                // console.log(err)
             return false;
            }
          };
        return (
            <div>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.props.open}
                >
                    <div style={classes.paper} >
                        {tryRequire(this.props.modalImg)?(<img style={classes.images} src={require(this.props.modalImg)} alt="modalImage" />):
                                    ( <img style={classes.placeholder} src={require("../../../images/placeholder.png")} alt="modalImage" />)
                                    }
                        {/* <img style={classes.images} src={tryRequire(this.props.modalImg)} alt="modalimage"/> */}
                    </div>
                </Modal>
            </div>
        );
    }
}

export default ImgModal;