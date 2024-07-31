// import { DevTool } from '@hookform/devtools';
import { FormProvider } from 'react-hook-form';
import { UserPreferenceForm } from './UserPreferenceForm';
import { useUserPreference } from './useUserPreference';

export function UserPreference() {
  const methods = useUserPreference();

  return (
    <FormProvider {...methods}>
      <UserPreferenceForm />
      {/* <DevTool control={methods.control} /> */}
    </FormProvider>
  );
}
