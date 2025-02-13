import GetFunfact from "@/app/utils/member/profile/getFunfact";
import React from "react";

export default async function Page(
  { params }: { params: { "memberid": string; name: string } },
) {
  const id = (await params).memberid;
  const funfactResponse = await GetFunfact(id);
  return (
    <div className="border-2 rounded-md p-2">
      <div>
        <p className="text-2xl lg:text-5xl font-ltradio font-bold">
          Member Funfact & <span className="text-primary-500">Moments</span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div>
          <h2 className="font-sm lg:text-3xl font-bold font-ltradio ">
            Funfact
          </h2>
          {funfactResponse?.funfact?.documents.map((item) =>
            item.funfact.map((fact, index) => <li key={index}>{fact}</li>)
          )}
        </div>
        <div>
          <h2 className="font-sm lg:text-3xl font-bold font-ltradio ">
            Variety Moment
          </h2>
          {funfactResponse?.funfact?.documents.map((item) =>
            item.variety.map((fact, index) => <li key={index}>{fact}</li>)
          )}
        </div>
      </div>
    </div>
  );
}
