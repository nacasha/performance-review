import { FC } from 'react';
import { FormProvider as FormProviderHook, FormProviderProps } from 'react-hook-form';

export type IFormProviderProps = FormProviderProps & {
  onSubmit: any;
};

export const FormProvider: FC<IFormProviderProps> = ({
  children,
  onSubmit,
  ...props
}) => (
  <FormProviderHook {...props}>
    <form onSubmit={props.handleSubmit(onSubmit)}>
      <input type="submit" style={{ display: 'none' }} />
      {children}
    </form>
  </FormProviderHook>
);
