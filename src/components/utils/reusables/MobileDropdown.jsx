import * as React from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  MenuItem,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../../../actions/utils';
import DropdownIcon from '../icons/DropdownIcon';

export default function MobileDropdown({ item }) {
  const [expanded, setExpanded] = React.useState(false);
  const navigate = useNavigate();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Stack direction="row" spacing={2}>
      <Accordion
        expanded={expanded === 'panel'}
        onChange={handleChange('panel')}
        sx={{ width: '100%', bgcolor: 'transparent', color: 'white' }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id="panel-header"
        >
          <div className="relative flex items-center gap-2 cursor-pointer">
            <p className="font-semibold text-white text-sm">{item?.title}</p>
            <DropdownIcon />
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="column" spacing={2}>
            {item?.list?.map((list, idx) => (
              <MenuItem
                key={idx}
                onClick={() => {
                  scrollToTop();
                  navigate(`${list?.route}`);
                }}
                sx={{ borderBottom: '1px solid #ddd' }} // Add border-bottom style
              >
                {list?.name}
              </MenuItem>
            ))}
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Stack>
  );
}
