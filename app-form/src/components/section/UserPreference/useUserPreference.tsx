import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const schema = z.object({
  assetType: z.array(z.string()),
  riskLevel: z.string(),
  allocationRange: z.array(z.string()),
  showChart: z.boolean(),
});

export type Schema = z.infer<typeof schema>;

export const defaultValues: Schema = {
  assetType: [],
  riskLevel: '',
  allocationRange: [],
  showChart: false,
};

export function useUserPreference() {
  return useForm<Schema>({
    mode: 'all',
    resolver: zodResolver(schema),
    defaultValues,
  });
}
