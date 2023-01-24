import Layout from "@/components/Layout";
import data from "@/utils/data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ProductScreen() {
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">Back to product</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3 ">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
          ></Image>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <h1 className="text-lg">{product.name}</h1>
          </li>
          <li>Category : {product.category}</li>
          <li>Brand : {product.brand}</li>
          <li>
            {product.rating} rating of {product.numReviews} reviews
          </li>
          <li>Description : {product.description}</li>
        </ul>
        <div className="mb-5 block rounded-lg border border-gray-100 shadow-md p-5">
          <div className="mb-2 flex justify-between">
            <div>PRICE</div>
            <div>{product.price}$</div>
          </div>
          <div className="mb-2 flex justify-between">
            <div>Status</div>
            <div>{product.countInStock > 0 ? "In stock" : "Out of stock"}</div>
          </div>
          <button
            className="rounded bg-red-400  py-2 px-4 shadow outline-none hover:bg-red-300  active:bg-red-500 w-full"
            type="button"
          >
            Add to cart
          </button>
        </div>
      </div>
    </Layout>
  );
}
