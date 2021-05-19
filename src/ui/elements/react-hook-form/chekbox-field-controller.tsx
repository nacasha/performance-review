import { Checkbox, ICheckboxProps, Stack, Text } from '@fluentui/react';
import { Controller, ControllerProps, useFormContext } from 'react-hook-form';
import { FC } from 'react';

export type ICheckboxFieldControllerProps = Omit<ControllerProps, 'render' | 'control'> & {
  componentProps?: ICheckboxProps;
};

export const CheckboxFieldController: FC<ICheckboxFieldControllerProps> = ({
  componentProps,
  ...controllerProps
}) => {
  const { control, formState: { errors, isSubmitting } } = useFormContext();

  const errorMessage = errors[controllerProps.name]?.message;

  return (
    <Stack tokens={{ childrenGap: 7, padding: '5px 0' }}>
      <Controller
        {...controllerProps}
        control={control}
        render={({ field }) => (
          <Checkbox
            {...componentProps}
            {...field}
            disabled={isSubmitting}
          />
        )}
      />
      {errorMessage && (
      <Text variant="small" style={{ color: 'rgb(164, 38, 44)' }}>
        {errorMessage}
      </Text>
      )}
    </Stack>
  );
};
