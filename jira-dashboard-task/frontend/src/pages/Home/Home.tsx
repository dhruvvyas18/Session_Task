import MainHeader from "../../components/Header/MainHeader";
import AllTask from "../Task/AllTask";

function Home() {
  return (
    <div className="tw:h-screen tw:flex tw:flex-col tw:gap-7 tw:w-full tw:bg-slate-100  tw:p-10">
      <MainHeader />
      <AllTask />
    </div>
  );
}

export default Home;
