import React from "react";
import {
  Button,
  Dialog,
  DialogCloseButton,
  DialogContent,
  DialogHeader,
  Typography,
  useFocusTrap,
  Utility,
} from "@visa/nova-react";

function Modal() {
  const { onKeyNavigation, ref } = useFocusTrap();
  return (
    <>
      <Button onClick={() => ref.current?.showModal()}>Open Modal</Button>
      <Dialog
        aria-describedby="modal-description"
        aria-labelledby="modal-title"
        id="modal"
        ref={ref}
        onKeyDown={(e) => onKeyNavigation(e, ref.current?.open)}
      >
        <DialogContent>
          <DialogHeader id="modal-title">Modal Title</DialogHeader>
          <Typography id={`modal-description`}>
            Modal description goes here. This is a simple modal example using
            VPDS components
          </Typography>
          <Utility
            vAlignItems="center"
            vFlex
            vFlexWrap
            vGap={8}
            vPaddingTop={16}
          >
            <Button>Primary action</Button>
            <Button colorScheme="secondary">Secondary action</Button>
          </Utility>
        </DialogContent>
        <DialogCloseButton onClick={() => ref.current?.close()} />
      </Dialog>
    </>
  );
}

export default Modal;
