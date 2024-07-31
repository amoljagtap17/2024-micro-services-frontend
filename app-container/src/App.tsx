import { Container, Grid } from '@mui/material';
import { createGlobalState } from './app/utils';

type IContainerGlobalState = {
  name: string;
};

const useContainerState = createGlobalState<IContainerGlobalState>(
  'app-container',
  { name: 'John Doe' },
);

export function App() {
  const { data } = useContainerState();

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={4}>
          Home | {data?.name}
        </Grid>
      </Grid>
    </Container>
  );
}
