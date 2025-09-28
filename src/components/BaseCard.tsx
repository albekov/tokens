import { Grid, Paper, Text } from "@mantine/core";

interface BaseCardProps {
  title: string;
  mainText: string | number;
  secondaryText?: string;
  borderColor?: string;
  span?: number;
}

export function BaseCard({
  title,
  mainText,
  secondaryText,
  borderColor,
  span = 12,
}: BaseCardProps) {
  return (
    <Grid.Col span={span}>
      <Paper shadow="xs" p="md" withBorder ta="center" style={{ borderColor }}>
        <Text size="xs" c="dimmed">
          {title}
        </Text>
        <Text size="xl" fw={700}>
          {mainText}
        </Text>
        {secondaryText && (
          <Text size="sm" c="dimmed">
            {secondaryText}
          </Text>
        )}
      </Paper>
    </Grid.Col>
  );
}
