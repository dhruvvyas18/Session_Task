import { products } from "../../assets/DummyData";
import CardItem from "../UI/Card";

function Home() {
  return (
    <div className="tw:container-md tw:w-full container mx-auto tw:px-11 tw:gap-3  tw:flex tw:flex-wrap tw:mt-4">
      {products.map((data) => (
        <CardItem key={data.id} product={data} />
      ))}
    </div>
  );
}

export default Home;
