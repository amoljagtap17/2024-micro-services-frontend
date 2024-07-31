import { Container, Grid } from '@mui/material';

export function App() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          Home
        </Grid>
      </Grid>
    </Container>
  );
}
