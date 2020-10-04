import React, { useState, useEffect } from "react";
import { Styled } from "./Calorieentabel.styles";
import LetterPicker from "../../components/LetterPicker/LetterPicker";
import ProductsTable from "../../components/ProductsTable/ProductsTable";
import * as API from "../../services/apiclient";
import { Product } from "../../services/types/Product";

const Calorieentabel = () => {
  const [producten, setProducten] = useState<Product[] | undefined>();
  const [selectedLetter, setSelectedLetter] = useState<string>("A");

  useEffect(() => {
    setTimeout(() => {
      API.getProductsByLetter(selectedLetter).then((result) =>
        setProducten(result)
      );
    }, 200);
  }, [selectedLetter]);

  return (
    <Styled.Root>
      <LetterPicker
        selectedLetter={selectedLetter}
        onLetterSelect={setSelectedLetter}
      />
      <ProductsTable producten={producten} />
    </Styled.Root>
  );
};

export default Calorieentabel;
