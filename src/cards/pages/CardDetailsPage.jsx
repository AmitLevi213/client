import { useEffect } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";
import CardHead from "../components/card/CardHead";

const CardDetailsPage = () => {
  const { id } = useParams();
  const {
    value: { card },
    handleGetCardFromClient,
  } = useCards();

  useEffect(() => {
    handleGetCardFromClient(id);
  }, [handleGetCardFromClient, id]);

  return (
    <Container maxWidth="lg">
      <PageHeader
        title="Business Details"
        subtitle="Here you can find all the information about the business you are looking for."
      />
      <Grid container spacing={2} justifyContent="center">
        <Grid item md={8} xs={12}>
          {card && (
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box mb={3}>
                <CardHead image={card.image} />
              </Box>
              <Box>
                <Typography variant="h4" color="textSecondary" gutterBottom>
                  {card.title}
                </Typography>
                <Typography variant="h6" color="textSecondary" paragraph>
                  {card.subtitle}
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  {card.description}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" paragraph>
                  Phone: {card.phone}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" paragraph>
                  Email: {card.email}
                </Typography>
              </Box>
            </Box>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CardDetailsPage;
