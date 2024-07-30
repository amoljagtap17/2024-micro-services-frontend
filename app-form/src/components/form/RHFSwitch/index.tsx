import { FormControlLabel, Switch } from '@mui/material';
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

interface IRHFSwitchProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
}

export function RHFSwitch<T extends FieldValues>({
  name,
  label,
}: IRHFSwitchProps<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControlLabel
          control={<Switch {...field} checked={field.value} />}
          label={label}
        />
      )}
    />
  );
}
