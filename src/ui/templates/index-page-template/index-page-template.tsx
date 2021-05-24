import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useBreadcrumb } from '@nacasha/fluentui-kit.ui.navbar';

import { PageContainer } from 'src/ui/elements/page-container';
import { PageDetailsListContainer } from 'src/ui/elements/page-details-list-container';

export type IIndexPageTemplateProps = {
  title: string;
};

export const IndexPageTemplate: FC<IIndexPageTemplateProps> = ({
  children,
  title,
}) => {
  useBreadcrumb([
    { key: title, text: title, isCurrentItem: true },
  ]);

  return (
    <PageContainer>
      <PageDetailsListContainer>
        <Helmet>
          <title>{title}</title>
        </Helmet>

        {children}
      </PageDetailsListContainer>
    </PageContainer>
  );
};
