import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "mui-image";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import theme from './theme';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 0,
};
function Modalx({ foto }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button
          style={{ color: "white" }}
          sx={{
            textOrientation: "sideways",
            writingMode: "vertical-rl",
            //   transform: "rotate(-90deg)",
            padding: "4px",
            left:'-4px'
          }}
          onClick={handleOpen}
        >
          <CalendarMonthIcon
            sx={{ color: theme.palette.secondary.main, margin: "4px" }}
          />
        </Button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Image src={foto} />
            </Box>
          </Fade>
        </Modal>
      </div>
    </ThemeProvider>
  );
}

export default Modalx;
