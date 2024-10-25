"use client";
import dynamic from "next/dynamic";
import Loading from "./loading";
import { dataCardType } from "./_types/type";
import Button from "./_components/Button";
import { dataCard } from "./data";
import { useState } from "react";

export default function Home() {
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const DynamicComp = dynamic(
    () => sleep(1800).then(() => import("./_components/Card")),
    {
      loading: () => <Loading />,
    }
  );

  const [card, setCard] = useState<dataCardType | null>(dataCard[0] || null);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="  text-5xl lg:text-8xl font-bold  py-5 text-zinc-100  capitalize">
        <span>Items</span>

        <span className="animate-pulse">*</span>
      </h1>

      <div className="flex flex-row flex-wrap gap-3 px-2">
        {dataCard.map((data) => {
          const handleClick = () => {
            const foundData = dataCard.find((item) => item.id === data.id);
            setCard(foundData || null);
          };
          return (
            <div key={data.id}>
              <Button click={handleClick} text={data.name} />
            </div>
          );
        })}
      </div>
      {card && <DynamicComp data={card} />}
    </div>
  );
}
