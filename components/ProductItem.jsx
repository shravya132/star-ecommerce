import Link from "next/link";

function ProductItem({ id, name, price, description, imageUrl }) {
  return (
    <>
      <Link href={`/Product/${id}`}>
        <div className="border rounded-3xl bg-gray-100 p-5 cursor-pointer hover:shadow-lg transition">
          <div className="font-extrabold text-2xl mb-1">{name}</div>
          {imageUrl ? (
            <div className="w-full h-64 bg-white rounded-xl overflow-hidden mb-3 flex items-center justify-center">
              <img
                src={imageUrl}
                alt={name}
                className="object-contain w-full h-full"
              />
            </div>
          ) : (
            <div className="w-full h-64 flex items-center justify-center bg-gray-200 rounded-xl mb-3 text-gray-500 italic">
              No image
            </div>
          )}
          <div className="font-bold text-xl">${price}</div>
          <div>{description}</div>
        </div>
      </Link>
    </>
  );
}

export default ProductItem;
