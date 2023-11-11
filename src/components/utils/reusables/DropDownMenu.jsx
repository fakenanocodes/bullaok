import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import Stack from '@mui/material/Stack';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { scrollToTop } from '../../../actions/utils';
import DropdownIcon from '../icons/DropdownIcon';

export default function MenuListComposition({ item }) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const navigate = useNavigate();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <div
          id="composition-button"
          ref={anchorRef}
          onClick={() => setOpen(true)}
          onMouseOver={handleToggle}
          onMouseOut={handleToggle}
          className="relative flex items-center gap-2 cursor-pointer"
        >
          <p className="font-semibold text-white text-sm">{item?.title}</p>
          <DropdownIcon />
        </div>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
          onMouseOver={() => setOpen(true)}
          onMouseOut={() => setOpen(false)}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                    style={{
                      marginTop: '2rem',
                      color: '#5B0858',
                      minWidth: '12rem',
                      fontSize: '1.25rem',
                    }}
                  >
                    {item?.list?.map((list, idx) => (
                      <MenuItem
                        key={idx}
                        onClick={() => {
                          scrollToTop();
                          navigate(`${list?.route}`);
                        }}
                      >
                        {list?.name}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}
