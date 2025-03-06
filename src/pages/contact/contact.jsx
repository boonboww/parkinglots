// eslint-disable-next-line no-unused-vars
import React from "react"; // Import React để sử dụng JSX.
import img from "../services/services.jpg"; // Import hình ảnh banner cho phần header.
import Back from "../../components/back"; // Import component "Back" để hiển thị phần header với title và hình ảnh.
import Swal from 'sweetalert2' // Import SweetAlert2 để hiển thị thông báo sau khi người dùng gửi form.

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault(); // Ngừng hành vi mặc định của form (reload trang khi submit).
    
    const formData = new FormData(event.target); // Tạo đối tượng FormData từ form (lấy dữ liệu nhập vào).
    formData.append("access_key", "04b55b57-0b5e-4d50-a1dc-87e9b0c16e44"); // Thêm access key vào formData (để xác thực API).

    const object = Object.fromEntries(formData); // Chuyển formData thành một đối tượng.
    const json = JSON.stringify(object); // Chuyển đối tượng thành chuỗi JSON.

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST", // Sử dụng phương thức POST để gửi dữ liệu đến API.
      headers: {
        "Content-Type": "application/json", // Đặt Content-Type là application/json.
        Accept: "application/json", // Chỉ định server trả về dữ liệu JSON.
      },
      body: json, // Gửi dữ liệu JSON làm body của yêu cầu.
    }).then((res) => res.json()); // Chuyển kết quả trả về từ fetch thành JSON.

    if (res.success) { // Kiểm tra nếu API trả về thành công.
      Swal.fire({
        title: "Success!", // Tiêu đề của thông báo thành công.
        text: "Message is successfully!", // Nội dung thông báo.
        icon: "success", // Loại thông báo (icon success).
      });
    }
  };

  return (
    <>
      <section className="contact mb-8">
        {/* Phần Back component hiển thị tên và ảnh banner */}
        <Back
          name="Contact Us"
          title="Get Helps & Friendly Support"
          cover={img} // Truyền ảnh vào prop cover để hiển thị banner.
        />
        
        <div className="container mx-auto px-4 mt-20">
          <form
            onSubmit={onSubmit} // Gọi hàm onSubmit khi người dùng gửi form.
            className="shadow-lg bg-white p-8 rounded-lg"
          >
            <h4 className="text-xl font-bold mb-4">Fill up The Form</h4> 
            {/* Tiêu đề của form */}
            
            <div className="flex flex-wrap gap-4 mb-4">
              {/* Nhập tên và email */}
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-[calc(50%-0.5rem)]"
              />
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="border border-gray-300 rounded-md px-4 py-2 w-full md:w-[calc(50%-0.5rem)]"
              />
            </div>

            <textarea
              cols="10"
              rows="3"
              name="message"
              placeholder="Message"
              className="border border-gray-300 rounded-md px-4 py-2 w-full mb-4"
            ></textarea>
            {/* Textarea để người dùng nhập tin nhắn */}

            <button className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700">
              Submit Request
            </button>
            {/* Nút submit form */}
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
