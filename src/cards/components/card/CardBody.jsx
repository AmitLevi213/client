import { Box, CardContent, CardHeader, Divider, Typography } from '@mui/material';

const CardBody = ({ card }) => {
    const { title, subtitle, phone, address: { street, houseNumber, city }, bizNumber } = card;

    return (
        <CardContent>
            <CardHeader title={title} subheader={subtitle} sx={{ p: 0, md: 1 }} />
            <Divider />
            <Box mt={1}>
                <Typography variant="body2" color="text.secondary">
                    <Typography variant="subtitle2" component="strong">Phone:{" "}</Typography>
                    {phone}
                </Typography>
                
                <Typography variant="body2" color="text.secondary">
                    <Typography variant="subtitle2" component="strong">Address:{" "}</Typography>
                    {street}  {houseNumber}  {city}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    <Typography variant="subtitle2" component="strong">Card Number:{" "}</Typography>
                    {bizNumber}
                </Typography>
            </Box>
        </CardContent>
    )
}

export default CardBody