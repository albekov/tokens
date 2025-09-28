import { Container, Grid } from "@mantine/core";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Container style={{ padding: "1rem" }}>
      <Grid>{children}</Grid>
    </Container>
  );
}
