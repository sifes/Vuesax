import { Box, Button, Container, Stack, Typography, styled } from "@mui/material";
import Image from "next/image";
const BackgroundImage = styled(Box)(({ theme }) => ({
  width: '491px',
  padding: '0 0 28% 0',
  minHeight: '0px',
  backgroundSize: 'cover',
  background: "url(https://cdn.discordapp.com/attachments/1044329413505974342/1166796466241675346/blade15hero.0.jpg?ex=654bcae3&is=653955e3&hm=2830786b1ec51b5a2a3fdfb6f88896b79e6d7a1b86c3f58dafa34a174e420f94&)",
  backgroundPosition: 'center',
}));


export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#465cc2', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
      <Stack sx={{}} direction={'row'}  >
        <Stack sx={{ bgcolor: '#', borderRadius: '12px', maxWidth: '567px', padding: '20px', marginTop: '-24px' }} direction={'column'} gap={3} justifyContent={'center'} >
          <Typography variant={'h2'} fontWeight={500} color={'black'}>Browse Almost Million Products For Your Needs</Typography>
          <Typography variant={'body1'} color={'text.secondary'} fontWeight={500} sx={{ marginBottom: '24px', }}>We're more than an online store, we're your shopping partner. Explore, shop, and experience convenience like never before. Join us on this exciting shopping journey today!
          </Typography>
          <Button variant={'contained'} sx={{ maxWidth: 'fit-content' }} size="large">Shop Now</Button>
        </Stack>
        <Stack sx={{ height: 1 }}  >
          <img src={'/home.png'} alt="Home" />
        </Stack>
      </Stack >
    </Box>
  )
}
