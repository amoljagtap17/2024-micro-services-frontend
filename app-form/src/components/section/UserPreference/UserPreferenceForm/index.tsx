import { Box, Button, Stack } from '@mui/material';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { Option } from '../../../../app/utils';
import { RHFCheckbox, RHFRadioGroup, RHFSwitch } from '../../../form';
import { defaultValues, Schema } from '../useUserPreference';

const assetTypeOptions: Option[] = [
  { id: 'cash', label: 'Cash' },
  { id: 'stocks', label: 'Stocks' },
  { id: 'bonds', label: 'Bonds' },
];

const riskLevelOptions: Option[] = [
  { id: 'conservative', label: 'Conservative' },
  { id: 'moderate', label: 'Moderate' },
  { id: 'aggressive', label: 'Aggressive' },
];

export function UserPreferenceForm() {
  const { reset, handleSubmit } = useFormContext<Schema>();

  const onSubmit: SubmitHandler<Schema> = (data) => {
    console.log('data::', data);
  };

  const handleReset = () => {
    reset(defaultValues);
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack sx={{ gap: 2 }}>
        <RHFSwitch<Schema> name="showChart" label="Show Chart" />
        <RHFCheckbox<Schema>
          name="assetType"
          options={assetTypeOptions}
          label="Asset Type"
        />
        <RHFRadioGroup<Schema>
          name="riskLevel"
          options={riskLevelOptions}
          label="Gender"
        />

        <Stack direction="row-reverse" spacing={2}>
          <Button variant="contained" type="submit">
            Save
          </Button>
          <Button onClick={handleReset}>Reset</Button>
        </Stack>
      </Stack>
    </Box>
  );
}
