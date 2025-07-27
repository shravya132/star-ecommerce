import Link from "next/link";

function ProductItem({ name, price, description, imageUrl, category }) {
  return (
    <>
      <div className="border rounded-3xl bg-gray-100 p-5">
        {/*<Link href={`/Product/${id}`}></Link>*/}
        <div className="font-extrabold text-2xl">{name}</div>
        <div className="border text-center h-50">{imageUrl}</div>
        <div className="font-bold text-xl">{price}</div>
        <div>{description}</div>
      </div>
    </>
  );
}

export default ProductItem;
