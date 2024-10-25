import { StaticImageData } from "next/image";

export type dataCardType = {
    id: string;
    name: string;
    country: string;
    type: string;
    image: StaticImageData;
}