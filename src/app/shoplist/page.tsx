import Image from 'next/image';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Cantilever chair",
      code: "YU023",
      price: "$320",
      image: "/images/s1.png", 
    },
    {
      id: 2,
      name: "Cantilever chair",
      code: "YU024",
      price: "$350",
      image: "/images/s2.png",
      isNew: true,
    },
    {
      id: 3,
      name: "Cantilever chair",
      code: "YU025",
      price: "$300",
      image: "/images/s3.png",
    },
    {
      id: 4,
      name: "Cantilever chair",
      code: "YU026",
      price: "$340",
      image: "/images/s4.png",
    },

    {
        id: 5,
        name: "Cantilever chair",
        code: "YU023",
        price: "$320",
        image: "/images/s5.png", 
      },
      {
        id: 6,
        name: "Cantilever chair",
        code: "YU024",
        price: "$350",
        image: "/images/s6.png",
        isNew: true,
      },
      {
        id: 7,
        name: "Cantilever chair",
        code: "YU025",
        price: "$300",
        image: "/images/s7.png",
      },
      {
        id: 8,
        name: "Cantilever chair",
        code: "YU026",
        price: "$340",
        image: "/images/s8.png",
      },

      
    {
        id: 9,
        name: "Cantilever chair",
        code: "YU023",
        price: "$320",
        image: "/images/s9.png", 
      },
      {
        id: 10,
        name: "Cantilever chair",
        code: "YU024",
        price: "$350",
        image: "/images/s10.png",
        isNew: true,
      },
      {
        id: 11,
        name: "Cantilever chair",
        code: "YU025",
        price: "$300",
        image: "/images/s11.png",
      },
      {
        id: 12,
        name: "Cantilever chair",
        code: "YU026",
        price: "$340",
        image: "/images/s4.png",
      },
  ];

  return (
    <div className="bg-gray-50 py-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">Shop List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden p-4 transition-transform transform hover:scale-105"
          >
            <div className="relative">
              <Image
                src={product.image}
                alt={product.name}
                width={200}
                height={200}
                className="object-contain w-full h-40"
              />
              {product.isNew && (
                <div className="absolute top-2 right-2 bg-pink-500 text-white text-xs px-2 py-1 rounded">
                  new
                </div>
              )}
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-500">Code: {product.code}</p>
              <p className="text-xl font-bold text-gray-900">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
