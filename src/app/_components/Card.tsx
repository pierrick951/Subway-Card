import React from "react";
import Image from "next/image";
import { dataCardType } from "../_types/type";
import { useTransform, motion, useMotionValue, useSpring } from "framer-motion";

type content = {
  data: dataCardType;
};
const Card = ({ data }: content) => {
  const { name, image: image, type, country } = data;
  const cardRef = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateY = useTransform(x, [0, 350], [15, -15]);
  const rotateX = useTransform(y, [0, 240], [-15, 15]);
  const rotateYSpring = useSpring(rotateY);
  const rotateXspring = useSpring(rotateX);
  return (
    <div className="flex flex-col lg:flex-row py-10 px-5 gap-10 justify-center items-start">
      <motion.div
        className="h-auto w-auto [perspective:1000px]"
        onMouseMove={(e) => {
          if (!cardRef.current) return;
          const cardRect = cardRef.current.getBoundingClientRect();

          x.set(e.clientX - cardRect.left);
          y.set(e.clientY - cardRect.top);
        }}
        onMouseLeave={() => {
          if (!cardRef.current) return;
          const cardRect = cardRef.current.getBoundingClientRect();
          x.set(cardRect.width / 2);
          y.set(cardRect.height / 2);
        }
        }
        ref={cardRef}
        style={{
          rotateY: rotateYSpring,
          rotateX: rotateXspring,
        }}
      >
        <Image
          className="h-auto w-[350px]   rounded-3xl "
          src={image}
          alt="*"
        />
      </motion.div>
      <div className=" bg-zinc-800/50 border-2 border-purple-300/20 shadow-purple-300/20 rounded-2xl p-5 w-full   md:w-[200px] h-36 flex flex-col justify-between shadow-2xl">
        <div>
          <h2 className="text-3xl font-bold text-zinc-100"> {name}</h2>
          <p className="font-thin font-mono text-zinc-100">{type}</p>
        </div>
        <small className="bg-purple-200/20 font-mono text-zinc-100 rounded-2xl p-1">
          📍{country}
        </small>
      </div>
    </div>
  );
};
export default Card;
