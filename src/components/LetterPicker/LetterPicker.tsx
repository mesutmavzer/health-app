import React from "react";
import { Styled } from "./LetterPicker.styles";
import { withResizeDetector } from "react-resize-detector";

const letters: string[] = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

interface LetterPickerProps {
  targetRef?: any;
  width?: number;
  selectedLetter: string;
  onLetterSelect: (letter: string) => void;
}

const LetterPicker: React.FC<LetterPickerProps> = ({
  width = 0,
  targetRef,
  selectedLetter,
  onLetterSelect,
}) => {
  return (
    <Styled.Root center={width > 1000} ref={targetRef}>
      <Styled.LettersContainer>
        {letters.map((x) => (
          <Styled.LetterButton
            onClick={() => onLetterSelect(x)}
            selected={x === selectedLetter}
            key={x}
          >
            {x}
          </Styled.LetterButton>
        ))}
      </Styled.LettersContainer>
    </Styled.Root>
  );
};

export default withResizeDetector(LetterPicker);
