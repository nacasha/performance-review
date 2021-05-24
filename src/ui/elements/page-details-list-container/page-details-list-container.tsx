import { FC } from 'react';
import { Stack } from '@fluentui/react';

export const PageDetailsListContainer: FC = ({ children }) => (
  <Stack
    tokens={{ padding: 20 }}
    style={{
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    }}
  >
    {children}
  </Stack>
);
