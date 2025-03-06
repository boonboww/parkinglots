const ProductTable = () => {
    const products = [
      {
        id: 1,
        name: "Laptop ASUS ROG",
        price: 25000000,
        image: "https://via.placeholder.com/100",
      },
      {
        id: 2,
        name: "Chuột Logitech G Pro",
        price: 1500000,
        image: "https://via.placeholder.com/100",
      },
      {
        id: 3,
        name: "Bàn phím cơ Razer",
        price: 3200000,
        image: "https://via.placeholder.com/100",
      },
    ];
  
    return (
      <div className="overflow-x-auto p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Danh sách sản phẩm</h2>
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-3 px-6 text-left">Hình ảnh</th>
              <th className="py-3 px-6 text-left">Tên sản phẩm</th>
              <th className="py-3 px-6 text-left">Giá</th>
              <th className="py-3 px-6 text-left">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-6">
                  <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-lg" />
                </td>
                <td className="py-3 px-6">{product.name}</td>
                <td className="py-3 px-6 text-green-600 font-bold">{product.price.toLocaleString()} VND</td>
                <td className="py-3 px-6">
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
                    onClick={() => alert(`Mua sản phẩm: ${product.name}`)}
                  >
                    Mua
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ProductTable;
  