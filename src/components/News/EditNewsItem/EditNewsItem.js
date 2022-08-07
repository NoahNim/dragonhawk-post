import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Center,
  Box,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import EditNewsForm from "./EditNewsForm/EditNewsForm";

const EditNewsItem = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center>
      <Box>
        <Button
          backgroundColor="#84F0C7"
          onClick={onOpen}
          fontSize="8px"
          width="20px"
          height="20px"
        >
          Edit News
        </Button>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          backgroundColor="#A47449"
          overflow="scroll"
        >
          <ModalOverlay />
          <Center>
            <ModalContent
              backgroundColor="#F1BF98"
              display="flex"
              flexDirection="column"
              borderRadius="6px"
              width="350px"
              height="575px"
            >
              <Center></Center>

              <ModalCloseButton />
              <Center>
                <ModalBody overflow="scroll">
                  <EditNewsForm
                    onClose={onClose}
                    headline={props.headline}
                    content={props.content}
                    newsId={props.newsId}
                    userId={props.userId}
                  />
                </ModalBody>
              </Center>
            </ModalContent>
          </Center>
        </Modal>
      </Box>
    </Center>
  );
};

export default EditNewsItem;
