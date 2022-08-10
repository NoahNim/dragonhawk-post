import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Tooltip,
  Center,
  Box,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import NewDisplayName from "./NewDisplayName";

const NewDisplayNameModal = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Center>
      <Box>
        <Box>
          <Tooltip label="Edit">
            <EditIcon
              _hover={{ cursor: "pointer" }}
              color="blue"
              onClick={onOpen}
              margin="5px"
            />
          </Tooltip>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose} backgroundColor="#90E0EF">
          <ModalOverlay />
          <Center>
            <ModalContent
              background="None"
              display="flex"
              flexDirection="row"
              borderRadius="6px"
              width="350px"
              height="190px"
            >
              <ModalBody>
                <NewDisplayName
                  displayName={props.displayName}
                  changeDisplayName={props.changeDisplayName}
                  onClose={onClose}
                />
              </ModalBody>
            </ModalContent>
          </Center>
        </Modal>
      </Box>
    </Center>
  );
};

export default NewDisplayNameModal;
