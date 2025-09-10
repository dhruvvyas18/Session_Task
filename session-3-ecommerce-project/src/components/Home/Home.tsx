import type { ProductType } from "../../common/types/commonTypes";
import CardItem from "../UI/Card";

function Home() {
  const products: ProductType[] = [
    {
      id: "1",
      image:
        "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-KZ-EDX-Pro-crystal-01_459c4189-ee97-4c56-8b95-f9e8b1c6f00a.jpg?v=1739774744&width=500",
      description: "In-Ears With 1 Dynamic Driver",
      name: "KZ - EDX Pro",
      price: 1299,
      rating: 4.4,
      altImage:
        "https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-KZ-EDX-Pro-X-Cyan-01.jpg",
      discountPrice: 849,
      tag: "New",
    },
    {
      id: "2",
      image:
        "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-KZ-EDX-Pro-crystal-01_459c4189-ee97-4c56-8b95-f9e8b1c6f00a.jpg?v=1739774744&width=500",
      description: "In-Ears With 1 Dynamic Driver",
      name: "KZ - EDX Pro",
      price: 1299,
      rating: 4.4,
      altImage:
        "https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-KZ-EDX-Pro-X-Cyan-01.jpg",
      discountPrice: 849,
      tag: "New",
    },
    {
      id: "3",
      image:
        "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-KZ-EDX-Pro-crystal-01_459c4189-ee97-4c56-8b95-f9e8b1c6f00a.jpg?v=1739774744&width=500",
      description: "In-Ears With 1 Dynamic Driver",
      name: "KZ - EDX Pro",
      price: 1299,
      rating: 4.4,
      altImage:
        "https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-KZ-EDX-Pro-X-Cyan-01.jpg",
      discountPrice: 849,
      tag: "New",
    },
    {
      id: "4",
      image:
        "https://www.headphonezone.in/cdn/shop/products/Headphone-Zone-KZ-EDX-Pro-crystal-01_459c4189-ee97-4c56-8b95-f9e8b1c6f00a.jpg?v=1739774744&width=500",
      description: "In-Ears With 1 Dynamic Driver",
      name: "KZ - EDX Pro",
      price: 1299,
      rating: 4.4,
      altImage:
        "https://www.headphonezone.in/cdn/shop/files/Headphone-Zone-KZ-EDX-Pro-X-Cyan-01.jpg",
      discountPrice: 849,
      tag: "New",
    },
  ];
  return (
    <div className="tw:container-md tw:w-full container mx-auto tw:px-11 tw:gap-3  tw:flex tw:flex-wrap tw:mt-4">
      {products.map((data) => (
        <CardItem product={data} />
      ))}
    </div>
  );
}

export default Home;
