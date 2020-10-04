import React from "react";
import { Styled } from "./WatIsWat.styles";
import TabBar from "../../components/TabBar/TabBar";
import Energie from "../../components/WatIsWatItems/Energie";

interface Tab {
  title: string;
  component: React.FC;
}

const tabs: Tab[] = [
  { title: "Energie", component: Energie },
  { title: "Water", component: Energie },
  { title: "Eiwitten", component: Energie },
  { title: "Vetten", component: Energie },
  { title: "Cholestrol", component: Energie },
  { title: "Koolhydraten", component: Energie },
  { title: "Voedingsvezels", component: Energie },
  { title: "Vitamines", component: Energie },
  { title: "Mineralen", component: Energie },
  { title: "Alcohol", component: Energie },
];

const WatIsWat: React.FC = () => {
  const onTabSelect = (index: number) => {
    console.log(tabs[index].title);
  };

  return (
    <Styled.Root>
      <TabBar items={tabs.map((x) => x.title)} onItemSelect={onTabSelect} />
      <Styled.Center>
        <Styled.ItemsContainer>
          <Energie />
        </Styled.ItemsContainer>
      </Styled.Center>
    </Styled.Root>
  );
};

export default WatIsWat;
