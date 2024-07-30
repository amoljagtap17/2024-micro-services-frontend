import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { ElevationScroll } from './ElevationScroll';

export function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ElevationScroll>
        <AppBar position="static">
          <Container maxWidth="lg">
            <Toolbar disableGutters>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                React Innovation
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </Box>
  );
}
