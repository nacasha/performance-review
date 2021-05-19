import { Card } from '@nacasha/fluentui-kit.ui.card';
import { FC } from 'react';
import { object, string, SchemaOf } from 'yup';
import { Stack } from '@fluentui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormProvider } from 'src/ui/elements/react-hook-form/form-provider';
import { FormSubmitController } from 'src/ui/elements/react-hook-form/form-submit-controller';
import { TextFieldController } from 'src/ui/elements/react-hook-form/text-field-controller';

export type IAssignmentFormValues = {
  reviewer: string;
  reviewee: string;
};

export type IAssignmentFormProps = {
  onSubmit: (values: IAssignmentFormValues) => Promise<void>;
  defaultValues?: Partial<IAssignmentFormValues>;
};

const defaultValues: Partial<IAssignmentFormValues> = {
  reviewer: '',
  reviewee: '',
};

const schema: SchemaOf<Partial<IAssignmentFormValues>> = object().shape({
  reviewer: string().required('Reviewer is Required'),
  reviewee: string().required('Reviewee is required'),
});

export const AssignmentForm: FC<IAssignmentFormProps> = ({
  defaultValues: defaultValuesProps,
  onSubmit,
}) => {
  const formMethods = useForm<any>({
    defaultValues: defaultValuesProps ?? defaultValues,
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...formMethods} onSubmit={onSubmit}>
      <Stack tokens={{ childrenGap: 10 }}>
        <Card>
          <Stack tokens={{ childrenGap: 10 }}>
            <TextFieldController
              name="reviewer"
              componentProps={{ label: 'Reviewer', required: true }}
            />
            <TextFieldController
              name="reviewee"
              componentProps={{ label: 'Reviewee', required: true }}
            />
          </Stack>
        </Card>

        <FormSubmitController />
      </Stack>
    </FormProvider>
  );
};
