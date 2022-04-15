import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
  ProductCardContainer,
  Img,
  Footer,
  Name,
  Price,
  ButtonStyled,
} from "./product-card.styles.jsx";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <Img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name as="span">{name}</Name>
        <Price as="span">{price}$</Price>
      </Footer>
      <ButtonStyled
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </ButtonStyled>
    </ProductCardContainer>
  );
};

export default ProductCard;
