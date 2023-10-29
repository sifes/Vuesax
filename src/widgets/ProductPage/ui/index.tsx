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
export const ListTextKeyStyles: TypographyProps<"span", { component?: "span" | undefined; }> = {
    fontWeight: 300,
    fontSize: '24px',
    textTransform: 'capitalize',
}
export const ListTextValueStyles: TypographyProps<"span", { component?: "span" | undefined; }> = {
    fontWeight: 500,
    fontSize: '24px',
    textTransform: 'capitalize',
}
export const ListItemStyles = {
    paddingLeft: 0
}
export const ListItemTextStyles = {
    flex: '0 0 130px'
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
    flex: { md: '0 0 30%' },
    height: '100%',
    maxHeight: '500px',
    maxWidth: '50%'
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