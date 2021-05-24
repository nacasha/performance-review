import { Checkbox, DefaultButton, Stack } from '@fluentui/react';
import { FC } from 'react';
import { FormProvider, TextFieldController } from '@nacasha/fluentui-kit.lib.react-hook-form';
import { object, string, SchemaOf } from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export type ILoginFormValues = {
  email: string;
  password: string;
};

export type ILoginFormProps = {
  onSubmit: (values: ILoginFormValues) => Promise<any>;
  defaultValues?: Partial<ILoginFormValues>;
};

const defaultValues: Partial<ILoginFormValues> = {
  email: '',
  password: '',
};

const schema: SchemaOf<Partial<ILoginFormValues>> = object().shape({
  email: string().required('Username is required'),
  password: string().required('Password is required'),
});

export const LoginForm: FC<ILoginFormProps> = ({
  defaultValues: defaultValuesProps,
  onSubmit,
}) => {
  const formMethods = useForm<any>({
    defaultValues: defaultValuesProps ?? defaultValues,
    resolver: yupResolver(schema),
  });

  const { formState: { isSubmitting } } = formMethods;

  return (
    <FormProvider {...formMethods} onSubmit={onSubmit}>
      <Stack tokens={{ childrenGap: 15 }}>
        <TextFieldController
          name="email"
          componentProps={{ label: 'Username', required: true }}
        />
        <TextFieldController
          name="password"
          componentProps={{
            label: 'Password',
            type: 'password',
            required: true,
          }}
        />
        <Stack
          style={{ paddingTop: 10 }}
          tokens={{ childrenGap: 20 }}
        >
          <Checkbox
            label="Remember me"
            disabled={isSubmitting}
          />
          <DefaultButton
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Loading ...' : 'Login'}
          </DefaultButton>
        </Stack>
      </Stack>
    </FormProvider>
  );
};
