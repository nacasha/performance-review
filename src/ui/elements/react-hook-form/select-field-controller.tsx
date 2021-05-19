import { Controller, ControllerProps, useFormContext } from 'react-hook-form';
import { FC } from 'react';
import { Dropdown, IDropdownProps } from '@fluentui/react';

export type ISelectFieldControllerProps = Omit<ControllerProps, 'render' | 'control'> & {
  componentProps: IDropdownProps;
};

export const SelectFieldController: FC<ISelectFieldControllerProps> = ({
  componentProps,
  ...controllerProps
}) => {
  const { control, formState: { errors, isSubmitting } } = useFormContext();

  return (
    <Controller
      {...controllerProps}
      control={control}
      render={({ field }) => {
        const selectedOption = componentProps.options.find((option) => option.key === field.value);
        const selectedKey = selectedOption ? selectedOption.key : undefined;

        const handleChange: IDropdownProps['onChange'] = (ev, option) => {
          if (option) {
            (ev.target as any).value = option.key;
            field.onChange(ev);
          }
        };

        return (
          <Dropdown
            {...componentProps}
            {...field}
            selectedKey={selectedKey}
            errorMessage={errors[controllerProps.name]?.message}
            disabled={isSubmitting}
            onChange={handleChange}
          />
        );
      }}
    />
  );
};
