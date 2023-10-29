import { HomeContentStyles, HomeImageWrapperStyles, HomePageStyles, HomeTextStyles, HomeTitleStyles } from "@/widgets/HomePage/ui";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/legacy/image";
import Link from "next/link";


export default function Home() {
  return (
    <Box sx={HomePageStyles}>
      <Container>
        <Stack direction={{ md: 'row', xs: 'column' }}   >
          <Stack sx={HomeContentStyles} >
            <Typography variant={'h2'} sx={HomeTitleStyles} >Browse Almost Million Products For Your Needs</Typography>
            <Typography variant={'body1'} sx={HomeTextStyles}>
              We&apos;re more than an online store, we&apos;re your shopping partner. Explore, shop, and experience convenience like never before. Join us on this exciting shopping journey today!
            </Typography>
            <Link href={'/products'}>
              <Button variant={'contained'} size="large">Shop Now</Button>
            </Link>
          </Stack>
          <Box sx={HomeImageWrapperStyles}  >
            <Image src={'/home.png'} alt="Home" width={800} height={600} layout="responsive" />
          </Box>
        </Stack >
      </Container>
    </Box>
  )
}
