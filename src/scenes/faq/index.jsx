
import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {tokens} from "../../theme"

function FAQ () {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          How can Chatterchum help my child improve their speech skills at home?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our app can help your child by engaging in activities that promote speech and language development, such as reading together, talking about daily activities, playing games that involve conversation, and modeling clear speech.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What causes delayed speech in children?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
        
       Delayed speech can have various causes, including genetic factors, developmental delays, hearing impairment, neurological conditions, and environmental factors.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What role does early intervention play in improving speech delays?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Early intervention is crucial for addressing speech delays as it can help prevent further delays and improve long-term outcomes. Speech therapy, behavioral interventions, and parent training programs are common components of early intervention
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          Is delayed speech a sign of a more significant developmental issue?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Not necessarily. Many children with delayed speech catch up to their peers with appropriate intervention and support. However, delayed speech can sometimes be a sign of an underlying developmental issue that requires further evaluation.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          What happens when my child continually fails to keep up with ChatterChum lessons?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          As a parent, you have the right to advocate for your child's needs in school. This may involve working with teachers, administrators, and special education professionals to develop an Individualized Education Program (IEP) or 504 plan tailored to your child's speech and language goals.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
