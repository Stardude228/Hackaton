import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function sModal(props) {

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <Modal 
      onOpen={handleOpen} 
      open={open}
      onClose={handleClose} 
      aria-labelledby="simple-modal-title" 
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        <Container className="m-0 p-0">
          <Row style={{height:'100vh'}} className="align-items-center justify-content-center">
            <Col md={8}>
              <Card className="shadow">
                <CardBody>
                  <form>
                      <h2 id="simple-modal-title">Login</h2>
                    <Label className="mt-3" htmlFor="email">
                      Enter your email:
                    </Label>                 
                    <Input 
                      id="email"
                      name="email"                    
                    />
                    <Label className="mt-3" htmlFor="password">
                      Enter your password:
                    </Label>
                    <Input 
                      id="password"
                      name="password"
                    />
                    <ButtonGroup className="w-100 mt-3">
                      <Button color='primary' type="submit">Submit</Button>
                      <Button type="reset">Cancel</Button>
                    </ButtonGroup>
                    <p className="text-center mt-3">Ты че не зарегался? {' '} </p>
                  </form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Modal>
  );
}