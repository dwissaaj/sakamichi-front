import React from "react";
import getMember from "@/app/utils/getMember";
import MemberCard from "@/app/components/member/MemberCard";
export default async function Page() {
  const member = await getMember();
  return (
    <div className="flex flex-col gap-4 mt-8 justify-center items-center w-full">
      <div>
        <p className="font:md lg:text-5xl font-ltradio font-bold">
          All Members of <span className="text-primary-500">Sakamichi</span>
        </p>
      </div>
      <div className="w-full flex justify-center gap-6">
        {member.documents?.map((item: MemberResponse) => {
          if (!item.galleries || item.galleries.length === 0) return null;
          const latestGallery = item.galleries[0];
          return (
            <MemberCard
              key={item.$id}
              name={item.name}
              kanji={item.nameKanji}
              url={latestGallery.url}
            />
          );
        })}
      </div>
    </div>
  );
}

// {member.documents?.map((item: MemberResponse) => {
//   return (
//     <div key={item.$id}>
//       <p>{item.name}</p>

//       {item.galleries?.map((gallery) => (
//         <div key={gallery.$id}>
//           <p>{gallery.url}</p>
//         </div>
//       ))}
//     </div>
//   );
// })}
