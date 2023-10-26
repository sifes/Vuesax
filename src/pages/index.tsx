import { HomeContentStyles, HomePageStyles, TitleStyles } from "@/widgets/shared/ui";
import { Box, Button, Stack, Typography } from "@mui/material";
import Link from "next/link";


export default function Home() {
  return (
    <Box sx={HomePageStyles}>
      <Stack direction={{ md: 'row', xs: 'column' }}  >
        <Stack sx={HomeContentStyles} >
          <Typography variant={'h2'} sx={TitleStyles} >Browse Almost Million Products For Your Needs</Typography>
          <Typography variant={'body1'} color={'text.primary'} fontWeight={500} sx={{ marginBottom: '24px' }}>
            We&apos;re more than an online store, we&apos;re your shopping partner. Explore, shop, and experience convenience like never before. Join us on this exciting shopping journey today!
          </Typography>
          <Link href={'/products'}>
            <Button variant={'contained'} sx={{ maxWidth: 'fit-content' }} size="large">Shop Now</Button>
          </Link>
        </Stack>
        <Stack sx={{ height: 1, display: { md: 'block', xs: 'none' } }}  >
          <img src={'/home.png'} alt="Home" />
        </Stack>
      </Stack >
    </Box>
  )
}
