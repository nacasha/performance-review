import { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import { useBreadcrumb } from '@nacasha/fluentui-kit.ui.navbar';
import axios from 'axios';

import { NotFoundPageTemplate } from 'src/ui/templates/not-found-page-template';
import { PageContainer } from 'src/ui/elements/page-container';
import { PageSpinner } from 'src/ui/elements/page-spinner';

export type IDetailPageTemplateProps = {
  title: string;
  loading: boolean;
  error: unknown;
  breadcrumb: string[];
};

export const DetailPageTemplate: FC<IDetailPageTemplateProps> = ({
  children,
  title,
  loading,
  error,
  breadcrumb,
}) => {
  if (loading) {
    return <PageSpinner />;
  }

  if (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        return <NotFoundPageTemplate />;
      }
    }
  }

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

      {children}
    </PageContainer>
  );
};
