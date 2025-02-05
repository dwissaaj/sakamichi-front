import SingleCard from "@/app/components/single/singleCard";
import getSingle from "../../utils/getSingle";
import { SingleDataType } from "./single.dto";

export default async function Page() {
  const single = await getSingle();

  return (
    <div className="flex flex-col gap-4 mt-8 justify-center items-center w-full">
      <div>
        <p className="font:md lg:text-5xl font-ltradio font-bold">
          All Song Released by{" "}
          <span className="text-primary-500">Sakamichi</span>
        </p>
      </div>
      <div className="w-full flex justify-center ">
        {single.documents?.map((item: SingleDataType) => (
          <SingleCard
            key={item.$id}
            $id={item.$id}
            name={item.name}
            mainCover={item.mainCover}
          />
        ))}
      </div>
    </div>
  );
}
