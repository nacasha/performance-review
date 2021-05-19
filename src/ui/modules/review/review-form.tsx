import { Card } from '@nacasha/fluentui-kit.ui.card';
import { FC } from 'react';
import { object, string, SchemaOf } from 'yup';
import { Stack } from '@fluentui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { FormProvider } from 'src/ui/elements/react-hook-form/form-provider';
import { FormSubmitController } from 'src/ui/elements/react-hook-form/form-submit-controller';
import { TextFieldController } from 'src/ui/elements/react-hook-form/text-field-controller';

export type IReviewFormValues = {
  question: string;
  text: string;
};

export type IReviewFormProps = {
  onSubmit: (values: IReviewFormValues) => Promise<void>;
  defaultValues?: Partial<IReviewFormValues>;
};

const defaultValues: Partial<IReviewFormValues> = {
  question: '',
  text: '',
};

const schema: SchemaOf<Partial<IReviewFormValues>> = object().shape({
  question: string().required('Question is Required'),
  text: string().required('Text is required'),
});

export const ReviewForm: FC<IReviewFormProps> = ({
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
              name="question"
              componentProps={{ label: 'Question', required: true }}
            />
            <TextFieldController
              name="text"
              componentProps={{ label: 'Text', required: true }}
            />
          </Stack>
        </Card>

        <FormSubmitController />
      </Stack>
    </FormProvider>
  );
};
