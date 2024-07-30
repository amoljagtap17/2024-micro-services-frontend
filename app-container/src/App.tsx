// @ts-ignore
// const ChartApp = lazy(() => import('appChart/App'));
import ChartApp from '@app-chart/App';
// @ts-ignore
import { App as FormApp } from '@app-form/App';
// @ts-ignore
import GridApp from '@app-grid/App';
import { Container, Grid, Stack } from '@mui/material';

export function App() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          <FormApp />
        </Grid>
        <Grid item xs={12} lg={8}>
          <Stack>
            <ChartApp />
            <GridApp />
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
