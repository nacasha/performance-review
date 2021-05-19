import { Card } from '@nacasha/fluentui-kit.ui.card';
import { FC, useMemo } from 'react';
import { object, string, SchemaOf, mixed, bool } from 'yup';
import { Stack } from '@fluentui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  CheckboxFieldController,
  FormActionCard,
  FormProvider,
  ISelectFieldControllerProps,
  SelectFieldController,
  TextFieldController,
} from '@nacasha/fluentui-kit.lib.react-hook-form';

export type IEmployeeFormValues = {
  fullName: string;
  email: string;
  phoneNumber: string;
  address: string;
  department: string;
  gender: 0 | 1;
  isAdmin: boolean;
};

export type IEmployeeFormProps = {
  onSubmit: (values: IEmployeeFormValues) => Promise<void>;
  defaultValues?: Partial<IEmployeeFormValues>;
};

const defaultValues: Partial<IEmployeeFormValues> = {
  fullName: '',
  email: '',
  phoneNumber: '',
  address: '',
  department: '',
  gender: 0,
  isAdmin: false,
};

const schema: SchemaOf<Partial<IEmployeeFormValues>> = object().shape({
  fullName: string().required('Full Name is Required'),
  gender: mixed().required('Gender is required').oneOf([0, 1]),
  phoneNumber: string().required('Phone Number is required'),
  email: string().required('Address is required'),
  address: string().required('Address is required'),
  department: string().required('Department is required'),
  isAdmin: bool(),
});

export const EmployeeForm: FC<IEmployeeFormProps> = ({
  defaultValues: defaultValuesProps,
  onSubmit,
}) => {
  const formMethods = useForm<any>({
    defaultValues: defaultValuesProps ?? defaultValues,
    resolver: yupResolver(schema),
  });

  const genderSelectOptions = useMemo<ISelectFieldControllerProps['componentProps']['options']>(
    () => [
      { key: 0, text: 'Male' },
      { key: 1, text: 'Female' },
    ],
    [],
  );

  return (
    <FormProvider {...formMethods} onSubmit={onSubmit}>
      <Stack tokens={{ childrenGap: 10 }}>
        <Card>
          <Stack tokens={{ childrenGap: 10 }}>
            <TextFieldController
              name="fullName"
              componentProps={{ label: 'Full Name', required: true }}
            />
            <SelectFieldController
              name="gender"
              componentProps={{ label: 'Gender', options: genderSelectOptions, required: true }}
            />
            <TextFieldController
              name="email"
              componentProps={{ label: 'Email', required: true }}
            />
            <TextFieldController
              name="phoneNumber"
              componentProps={{ label: 'Phone Number', required: true }}
            />
            <TextFieldController
              name="address"
              componentProps={{ label: 'Address', required: true }}
            />
            <TextFieldController
              name="department"
              componentProps={{ label: 'Department', required: true }}
            />
            <CheckboxFieldController
              name="isAdmin"
              componentProps={{ label: 'Is Admin' }}
            />
          </Stack>
        </Card>

        <FormActionCard />
      </Stack>
    </FormProvider>
  );
};
