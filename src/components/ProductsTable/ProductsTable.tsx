import React from "react";
import { Styled } from "./ProductsTable.styles";
import { Product } from "../../services/types/Product";

interface Props {
  producten?: Product[];
}

const ProductsTable: React.FC<Props> = ({ producten }) => {
  const headerItems: string[] = [
    "Productnaam",
    "Portie(g)",
    "Kcal",
    "Eiwit(g)",
    "Koolhydraten(g)",
    "Water(g)",
  ];
  return (
    <Styled.Root>
      <Styled.Header>
        {headerItems.map((x, i) => (
          <Styled.HeaderItem
            key={x}
            weight={i === 0 ? 1.75 : 1}
            alignEnd={i !== 0}
          >
            {x}
          </Styled.HeaderItem>
        ))}
      </Styled.Header>

      {producten &&
        producten.map((product) => (
          <Styled.ProductRow key={product.id}>
            <Styled.ProductItem weight={1.75} key={product.id}>
              {product.productNaam}
            </Styled.ProductItem>
            <Styled.ProductItem alignEnd>100</Styled.ProductItem>
            <Styled.ProductItem alignEnd>
              {product.energieInKcal}
            </Styled.ProductItem>
            <Styled.ProductItem alignEnd>{product.eiwit}</Styled.ProductItem>
            <Styled.ProductItem alignEnd>
              {product.koolhydraten}
            </Styled.ProductItem>
            <Styled.ProductItem alignEnd>{product.water}</Styled.ProductItem>
          </Styled.ProductRow>
        ))}
    </Styled.Root>
  );
};
export default ProductsTable;
