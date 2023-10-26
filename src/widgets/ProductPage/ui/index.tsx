export const ProductPageStyles = {
    maxWidth: '1540px',
    margin: '20px auto 20px',
    bgcolor: 'secondary.main',
    padding: {
        md: '50px 60px',
        sm: '30px 40px',
        xs: '40px 20px',
    },
    borderRadius: '12px',
    minHeight: '100vh'
}
export const CarouselImageStyles = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    borderRadius: '4px',
    overflow: 'hidden'
}
export const ModalImagesStyles = {
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, 0)',
    margin: '20px 0',
    width: '80vw',
    bgcolor: '#2B3253',
    border: '2px solid #000',
    boxShadow: 24,
    borderRadius: '12px',
    p: 4,
    padding: { md: '32px !important', sm: '16px !important', xs: '8px !important' },
    overflowY: 'auto',
    maxHeight: '90vh'
}
export const EconomyStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bgcolor: "primary.main",
    color: "white",
    p: "10px 16px",
    borderRadius: 4
}
export const CarouselWrapperStyles = {
    flex: { md: '0 0 30%' },
    height: '100%',
    maxWidth: '100%'
}
export const RatingWrapperStyles = {
    bgcolor: 'primary.main',
    p: '8px 12px',
    borderRadius: '16px',
    direction: 'row',
    alignItems: 'center',
    gap: 0.5
}

export const RatingStyles = {
    fontWeight: 700,
    fontSize: '20px',
    marginTop: '4px'
}
export const OldPriceStyles = {
    textDecoration: 'line-through',
    opacity: 0.7
}
export const PriceStyles = {
    fontWeight: 600,
    marginLeft: '4px',
    marginTop: '-4px'
}