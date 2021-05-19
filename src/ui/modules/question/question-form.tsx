import { Card } from '@nacasha/fluentui-kit.ui.card';
import { FC } from 'react';
import { FormActionCard, FormProvider, TextFieldController } from '@nacasha/fluentui-kit.lib.react-hook-form';
import { object, string, SchemaOf } from 'yup';
import { Stack } from '@fluentui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export type IQuestionFormValues = {
  description: string;
};

export type IQuestionFormProps = {
  onSubmit: (values: IQuestionFormValues) => Promise<void>;
  defaultValues?: Partial<IQuestionFormValues>;
};

const defaultValues: Partial<IQuestionFormValues> = {
  description: '',
};

const schema: SchemaOf<Partial<IQuestionFormValues>> = object().shape({
  description: string().required('Description is Required'),
});

export const QuestionForm: FC<IQuestionFormProps> = ({
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
              name="description"
              componentProps={{ label: 'Description', required: true }}
            />
          </Stack>
        </Card>

        <FormActionCard />
      </Stack>
    </FormProvider>
  );
};
