import { Box, Button, Stack, Typography } from "@mui/material";


export default function Home() {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'secondary.main', display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
      <Stack sx={{}} direction={'row'}  >
        <Stack sx={{ bgcolor: '#', borderRadius: '12px', maxWidth: '567px', padding: '20px', marginTop: '-24px' }} direction={'column'} gap={3} justifyContent={'center'} >
          <Typography variant={'h2'} fontWeight={500} color={'text.primary'}>Browse Almost Million Products For Your Needs</Typography>
          <Typography variant={'body1'} color={'text.primary'} fontWeight={500} sx={{ marginBottom: '24px' }}>
            We&apos;re more than an online store, we&apos;re your shopping partner. Explore, shop, and experience convenience like never before. Join us on this exciting shopping journey today!
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
