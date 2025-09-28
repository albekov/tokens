import { Container, Grid, Textarea } from "@mantine/core";

function App() {
  return (
    <Container style={{ padding: "1rem" }}>
      <Grid>
        <Grid.Col span={{ base: 12, md: 9 }}>
          <Textarea autosize minRows={10} />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 3 }}></Grid.Col>
      </Grid>
    </Container>
  );
}

export default App;
