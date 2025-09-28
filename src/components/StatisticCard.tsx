import { Grid, Paper, Text } from "@mantine/core";

interface StatisticCardProps {
  label: string;
  value: string | number;
}

export function StatisticCard({ label, value }: StatisticCardProps) {
  return (
    <Grid.Col span={6}>
      <Paper shadow="xs" p="md" withBorder ta="center">
        <Text size="xs" c="dimmed">
          {label}
        </Text>
        <Text size="xl" fw={700}>
          {value}
        </Text>
      </Paper>
    </Grid.Col>
  );
}
