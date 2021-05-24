import { Spinner, SpinnerSize, Stack } from '@fluentui/react';

export const PageSpinner = () => (
  <Stack tokens={{ padding: 30 }} horizontalAlign="center">
    <Spinner size={SpinnerSize.large} label="Loading ..." />
  </Stack>
);
