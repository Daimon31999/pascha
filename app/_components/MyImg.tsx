import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

import dimaPic from "./assets/dima.jpg";
import iliaPic from "./assets/ilia.jpg";
import maxPic from "./assets/max.png";
import anPic from "./assets/an.jpg";

type MyImgProps = Omit<ImageProps, "src"> & {
  pic: "dima" | "ilia" | "max" | "an";
};

export default function MyImg(props: MyImgProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={
          props.pic === "dima"
            ? dimaPic
            : props.pic === "ilia"
            ? iliaPic
            : props.pic === "max"
            ? maxPic
            : anPic
        }
        alt={props.alt}
        placeholder="blur"
        width={props.width}
        height={props.height}
        className={cn("w-full md:w-1/2 rounded-xl", props.className)}
      />
    </div>
  );
}
