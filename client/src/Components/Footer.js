import { Container, Box, Link, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '20vh', textAlign: 'center', width: "90rem" }}>
      {/* Adding the theme for the footer */}
      <Box component="footer" sx={{
        py: 6, px: 2, mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}>
        {/* Displaying the footer */}
        <Container maxWidth="sm">
          <Typography variant="body1">
            CODE-ITO
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {'Copyright © '}
            {/* The copyright leads to the github */}
            <Link color="inherit" href='https://github.com/357-project/357-project-for-real-2'>
              SOENXCLUSIVE
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
export default Footer;
