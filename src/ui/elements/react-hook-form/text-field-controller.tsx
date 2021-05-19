import { Controller, ControllerProps, useFormContext } from 'react-hook-form';
import { FC } from 'react';
import { ITextFieldProps, TextField } from '@fluentui/react';

export type ITextFieldControllerProps = Omit<ControllerProps, 'render' | 'control'> & {
  componentProps?: ITextFieldProps;
};

export const TextFieldController: FC<ITextFieldControllerProps> = ({
  componentProps,
  ...controllerProps
}) => {
  const { control, formState: { errors, isSubmitting } } = useFormContext();

  return (
    <Controller
      {...controllerProps}
      control={control}
      // Remove ref that causing error when 'defaultValues' is exist
      render={({ field: { ref, ...fieldProps } }) => (
        <TextField
          {...componentProps}
          {...fieldProps}
          errorMessage={errors[controllerProps.name]?.message}
          disabled={isSubmitting}
        />
      )}
    />
  );
};
