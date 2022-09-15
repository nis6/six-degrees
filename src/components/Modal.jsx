import { Box, CloseButton } from "@chakra-ui/react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(128, 128, 128, 0.3);
`;

const ModalRoot = document.getElementById("modal");

const Modal = (props) => {
  return ReactDOM.createPortal(
    <Overlay>
      <Box
        border="black solid 1px"
        width="50vw"
        p="1rem"
        m="1rem"
        borderRadius="1rem"
        borderStyle="double"
        bg="white"
        position="relative"
      >
        <CloseButton
          position="absolute"
          top="0.5rem"
          right="0.5rem"
          p="0"
          m="0"
          zIndex="20"
          onClick={() => {
            props.setInput("");
            props.onClose();
          }}
        />
        {props.children}
      </Box>
    </Overlay>,
    ModalRoot
  );
};

export default Modal;
