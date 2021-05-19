import { Card } from '@nacasha/fluentui-kit.ui.card';
import { DefaultButton, Spinner, Stack, Text } from '@fluentui/react';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

export const FormSubmitController: FC = () => {
  const { formState: { isSubmitting } } = useFormContext();

  return (
    <Card>
      <Stack
        tokens={{ childrenGap: 15 }}
        verticalAlign="center"
        horizontal
      >
        <DefaultButton
          type="submit"
          iconProps={{ iconName: 'Save' }}
          disabled={isSubmitting}
        >
          Save
        </DefaultButton>

        {isSubmitting && (
        <Stack
          tokens={{ childrenGap: 10 }}
          verticalAlign="center"
          horizontal
        >
          <Spinner />
          <Text>Saving ...</Text>
        </Stack>
        )}
      </Stack>
    </Card>
  );
};
