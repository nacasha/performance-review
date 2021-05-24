import { FC } from 'react';
import { Stack } from '@fluentui/react';

export type IPageContainerProps = {
  centered?: boolean;
  commandbar?: boolean;
};

export const PageContainer: FC<IPageContainerProps> = ({
  children,
  centered,
  commandbar,
}) => (
  <Stack
    tokens={{ padding: 20 }}
    style={{
      flex: 1,
      position: 'relative',
      ...(centered && { width: '100%', maxWidth: 700, margin: 'auto' }),
      ...(commandbar && { paddingTop: 70 }),
    }}
  >
    {children}
  </Stack>
);
