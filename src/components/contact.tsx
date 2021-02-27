import React, { useState } from "react";
import {
    Container,
    Header,
    Form,
    Modal,
    Button
  } from "semantic-ui-react";
import { useAddInfoMutation, namedOperations } from "./types/operations";

export function AddContact() {
    const [addInfo, setAddInfo] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [Number, setNumber] = useState("");
    const [emailSent, setEmailSent] = useState(false);    
    
    const [AddInfoMutation] = useAddInfoMutation({
      refetchQueries: [namedOperations.Mutation.addInfo],
    });

    const AddInfo = () => {
        setAddInfo(false)
        const post = {
          name: name,
          email: email,
          Number: Number
        };
        AddInfoMutation({ variables : { var : post}})
        
      };
      
    const sendInfo = (
      <Modal
      onClose={()=> setAddInfo(false)}
      onOpen={()=> setAddInfo(true)}
      open={ addInfo }
      >
        <Modal.Header>Subscribe to our Newsletter!</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Form>
              <Form.Field>
                <label>Name</label>
                <input
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label>Email</label>
                <input
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Field>
              <Form.Field>
                <label>Number</label>
                <input
                  placeholder="Number"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </Form.Field>
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button
            content="Submit"
            labelPosition="right"
            icon="checkmark"
            onClick={AddInfo}
            positive
          />
        </Modal.Actions>
      </Modal>
    );
  
    return (
        <Container text style={{ marginTop : "10em" }}>
            <div>
                {sendInfo}
                <Header as="h2">Thank you!! {name}, for Subscribing our Newsletter. Soon, you will get a confirmation email.</Header>
            </div>
        </Container>
    )
}