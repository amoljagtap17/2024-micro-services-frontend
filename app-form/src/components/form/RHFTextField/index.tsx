import { TextField, TextFieldProps } from '@mui/material';
import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';

type IRHFTextFieldProps<T extends FieldValues> = {
  name: Path<T>;
} & Pick<TextFieldProps, 'label'>;

export function RHFTextField<T extends FieldValues>({
  name,
  ...props
}: IRHFTextFieldProps<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          {...props}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
}
