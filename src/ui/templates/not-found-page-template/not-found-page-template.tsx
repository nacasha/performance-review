import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { Text } from '@fluentui/react';
import { useBreadcrumb } from '@nacasha/fluentui-kit.ui.navbar';

import { PageContainer } from 'src/ui/elements/page-container';

export const NotFoundPageTemplate: FC = () => {
  useBreadcrumb([
    { key: 'not-found', text: 'Not Found', isCurrentItem: true },
  ]);

  return (
    <PageContainer>
      <Helmet>
        <title>Not Found</title>
      </Helmet>

      <Text variant="large">
        <strong>404 Not Found</strong>
      </Text>
      <Text>We Cannot Find the Data You&rsquo;re Searching For</Text>
    </PageContainer>
  );
};
