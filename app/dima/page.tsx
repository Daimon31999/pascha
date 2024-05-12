import MyImg from "../_components/MyImg";

export default function Page() {
  return (
    <>
      {/* <div className="flex flex-col items-center justify-center">
        <Image
          src={dimaPic}
          alt="Dima"
          width={640}
          height={640}
          placeholder="blur"
          className="w-full md:w-1/2"
        />
      </div> */}
      <MyImg
        pic="dima"
        alt="Dima"
        width={640}
        height={640}
        placeholder="blur"
      />
    </>
  );
}
