import HomeComponent from "./components/home/home";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center m-8 gap-4 font-ltradio">
      <div className="flex flex-col items-center">
        <p className="font-md lg:text-5xl  font-bold">
          <span className="text-primary-500">Sakamichi</span> Group Fansite
        </p>
        <p className="font-semibold font-sm lg:text-2xl text-white/50">
          Lets support our girls! Shop at their website
        </p>
      </div>
      <HomeComponent />
    </div>
  );
}
