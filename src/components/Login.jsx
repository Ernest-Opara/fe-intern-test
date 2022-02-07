import React, { useState } from "react";
import { FiEye } from "react-icons/fi";
import "./Login.css";
import { Button, Form, Col, Card } from "react-bootstrap";
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import PasswordChecklist from "react-password-checklist";
import { useForm } from "react-hook-form";

export default function FormValidation() {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  })
  
  
    const [open, setOpen] = React.useState(false);
  
    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      };
  
      setOpen(false);
    };
  
    const [shown, setShown] = useState(false);

    const [password, setPassword] = useState("");

    const [setText] = useState('');

    const {
      reset,
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    const onSubmit = (data, e) => {
      e.preventDefault();
      console.log(data);
      setText(`thank you ${data.email} for your message`);
      reset();
    };

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>Sign in</Card.Title>
          <Card.Text>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group as={Col} controlId="formGridEmail" className="inputs">
                <Form.Control
                  type="text"
                  placeholder="Email address"
                  {...register("email", {
                    required: true,
                    pattern:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />
              </Form.Group>
              {errors.email && <p className="text-error">Invalid Email</p>}

              <Form.Group
                as={Col}
                controlId="formGridPassword"
                className="inputs"
              >
                <Form.Control
                  type={shown ? "text" : "password"}
                  placeholder="Password"
                  onChange={e => setPassword(e.target.value)}
                />
                <FiEye className="reveal" onClick={() => setShown(!shown)} />
              </Form.Group>
              <PasswordChecklist
                rules={["minLength",
                        "number","capital"]}
                minLength={4}
                value={password}
            />

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              
              <Stack spacing={2} sx={{ width: '100%' }}/>
              <Button className="button" type="submit" onClick={handleClick}>
                SIGN IN
              </Button>

              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  This is a success message!
                </Alert>
              </Snackbar>
            </Form>

            <div className="password-recovery">
              <a
                className="forgot-password"
                href="https://risevest.com/blog"
                alt="Password Reset"
              >
                I forgot my password
              </a>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
