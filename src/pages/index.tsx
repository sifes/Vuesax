import { Box, Typography, styled } from "@mui/material";

const BackgroundImage = styled(Box)(({ theme }) => ({
  width: '491px',
  padding: '0 0 17.5% 0',
  minHeight: '0px',
  background: "url(/mac.png)",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));


export default function Home() {
  return (
    <Box sx={{ display: 'flex', height: 1, width: 1, justifyContent: 'center', alignItems: 'center', bgcolor: 'background' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
        <Typography variant="caption" component={'span'} sx={{}}>Favorite brands</Typography>
        <Typography component={'span'} variant="h3" sx={{ bgcolor: 'Background', width: 'max-content' }}>An exciting place</Typography>
        <Typography variant="h3" component={'div'} sx={{ width: '550px' }} >for the whole family to shop.</Typography>
      </Box>
      <BackgroundImage />
    </Box >
  )
}
