import Link from "next/link";

function ProductItem({ name, price, description, imageUrl }) {
  return (
    <>
      <div className="border rounded-3xl bg-gray-100 p-5">
        <div className="font-extrabold text-2xl">{name}</div>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-64 object-cover rounded-xl mb-3"
          />
        ) : (
          <div className="w-full h-64 flex items-center justify-center bg-gray-200 rounded-xl mb-3 text-gray-500 italic">
            No image
          </div>
        )}
        <div className="font-bold text-xl">{price}</div>
        <div>{description}</div>
      </div>
    </>
  );
}

export default ProductItem;
