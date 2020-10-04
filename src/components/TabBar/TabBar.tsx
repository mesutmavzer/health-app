import React, { useState, useRef, useEffect } from "react";
import { Styled } from "./TabBar.styles";
import { useSpring } from "react-spring";
import ReactResizeDetector, { withResizeDetector } from "react-resize-detector";

interface Props {
  width?: number;
  targetRef?: any;
  items: string[];
  initialIndex?: number;
  onItemSelect: (index: number) => void;
}

const TabBar: React.FC<Props> = ({
  width = 0,
  targetRef,
  items,
  initialIndex = 0,
  onItemSelect,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(initialIndex);
  const [totalTabWidth, setTotalTabWidth] = useState(0);
  const [animationProps, setAnimationValues] = useSpring(() => ({
    left: 0,
    width: 0,
  }));
  const initialTab = useRef<HTMLDivElement | null>(null);

  const onTabClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setAnimationValues({
      left: event.currentTarget.offsetLeft,
      width: event.currentTarget.offsetWidth,
      immediate: false,
    });
    onItemSelect(index);
  };

  const onResize = (width: number) => {
    setTotalTabWidth(width);
  };

  useEffect(() => {
    if (initialTab.current) {
      setAnimationValues({
        left: initialTab.current.offsetLeft,
        width: initialTab.current.offsetWidth,
        immediate: true,
      });
    }
  }, []);

  return (
    <Styled.Root center={width > totalTabWidth} ref={targetRef}>
      <div>
        <ReactResizeDetector handleWidth onResize={onResize}>
          {(size: { targetRef: any }) => (
            <Styled.TabsContainer ref={size.targetRef}>
              {items.map((x, i) => (
                <Styled.Tab
                  key={x}
                  onClick={(event) => onTabClick(event, i)}
                  ref={initialIndex === i ? initialTab : undefined}
                >
                  {x}
                </Styled.Tab>
              ))}
            </Styled.TabsContainer>
          )}
        </ReactResizeDetector>
        <Styled.SelectorContainer>
          <Styled.Selector style={animationProps} />
        </Styled.SelectorContainer>
      </div>
    </Styled.Root>
  );
};

export default withResizeDetector(TabBar);
