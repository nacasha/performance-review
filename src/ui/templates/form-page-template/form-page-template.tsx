import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { Text } from '@fluentui/react';
import { useBreadcrumb } from '@nacasha/fluentui-kit.ui.navbar';

import { PageContainer } from 'src/ui/elements/page-container';

export type IFormPageTemplateProps = {
  title: string;
  breadcrumb: string[];
};

export const FormPageTemplate: FC<IFormPageTemplateProps> = ({
  children,
  title,
  breadcrumb,
}) => {
  useBreadcrumb(
    breadcrumb.map((breadcrumbItem, index) => ({
      key: breadcrumbItem,
      text: breadcrumbItem,
      isCurrentItem: index === breadcrumb.length - 1,
    })),
  );

  return (
    <PageContainer centered>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Text variant="xxLarge" style={{ marginBottom: 15 }}>
        {title}
      </Text>

      {children}
    </PageContainer>
  );
};
