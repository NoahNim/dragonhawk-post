import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Center,
  Box,
  useDisclosure,
  Tooltip,
} from "@chakra-ui/react";
import EditNewsForm from "./EditNewsForm/EditNewsForm";
import { EditIcon } from "@chakra-ui/icons";

const EditNewsItem = (props) => {
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
