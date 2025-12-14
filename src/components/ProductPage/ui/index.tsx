import { TypographyProps } from "@mui/material"

export const ProductPageStyles = {
    maxWidth: '1540px',
    margin: '20px auto 20px',
    bgcolor: 'secondary.main',
    position: 'relative',
    padding: {
        md: '40px 60px',
        sm: '70px 30px',
        xs: '70px 20px',
    },
    borderRadius: '12px',
    minHeight: '100vh'
}

export const EconomyStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bgcolor: "primary.main",
    color: "white",
    p: {
        md: "10px 14px",
        xs: '8px 8px'
    },
    borderRadius: 4
}

export const RatingWrapperStyles = {
    bgcolor: 'primary.main',
    p: {
        md: '8px 12px',
        xs: '4px 8px'
    },
    borderRadius: '16px',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 0.5
}

// <------------------Content------------------> //
export const ProductContentStyles = {
    flex: '1 1 auto',
    height: '100%',
    gap: 3
}
export const IdStyles = {
    fontWeight: 300,
    fontSize: '14px'
}
export const OldPriceStyles = {
    textDecoration: 'line-through',
    opacity: 0.7
}
export const ArrowBackStyles = {
    position: 'absolute',
    top: '12px',
    right: '12px'
}
export const PriceStyles = {
    fontWeight: 600,
    marginLeft: '4px',
    marginTop: '-4px'
}
export const ButtonStyles = {
    borderRadius: '12px',
    margin: '0 auto'
}
export const RatingStyles = {
    fontWeight: 700,
    fontSize: {
        md: '24px',
        xs: '18px'
    },
    marginTop: '4px'
}
// <------------------List (info)------------------> //
export const ListTextKeyStyles = {
    fontWeight: 400,
    fontSize: { md: '16px', sm: '14px', xs: '13px' },
    textTransform: 'capitalize' as const,
    opacity: 0.7,
    letterSpacing: '0.5px'
}
export const ListTextValueStyles = {
    fontWeight: 600,
    fontSize: { md: '20px', sm: '18px', xs: '16px' },
    textTransform: 'capitalize' as const,
}
export const ListItemStyles = {
    paddingLeft: 0,
    paddingTop: { md: 2, xs: 1.5 },
    paddingBottom: { md: 2, xs: 1.5 }
}
export const ListItemTextStyles = {
    flex: { md: '0 0 180px', xs: '0 0 120px' },
    minWidth: { md: '180px', xs: '120px' }
}
// <------------------Images------------------> //
export const CarouselImageStyles = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    borderRadius: '4px',
    overflow: 'hidden',
    margin: '0 auto'
}
export const CarouselWrapperStyles = {
    flex: { md: '0 0 30%', xs: '1 1 100%' },
    height: '100%',
    maxWidth: { md: '50%', xs: '100%' },
    width: '100%'
}
export const ModalImagesStyles = {
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, 0)',
    margin: '20px 0',
    width: '75vw',
    bgcolor: '#2B3253',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '12px',
    p: 4,
    padding: { md: '32px !important', sm: '16px !important', xs: '8px !important' },
    overflowY: 'auto',
    maxHeight: '80vh'
}