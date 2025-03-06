import { useState } from "react";
import img from "../services/services.jpg";
import Back from "../../components/back";

const Feedback = () => {
  // Khai báo các state cần thiết
  const [feedbacks, setFeedbacks] = useState([]); // Danh sách phản hồi
  const [newFeedback, setNewFeedback] = useState(""); // Phản hồi mới
  const [rating, setRating] = useState(0); // Đánh giá sao
  const [selectedImage, setSelectedImage] = useState(null); // Hình ảnh được chọn
  const [selectedFeedback, setSelectedFeedback] = useState(null); // Phản hồi được chọn để xem chi tiết

  // Hàm xử lý khi đánh giá sao thay đổi
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  // Hàm xử lý thay đổi hình ảnh khi người dùng chọn file
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  // Hàm xử lý khi người dùng submit form
  const handleSubmit = () => {
    if (newFeedback.trim() && rating > 0) {
      setFeedbacks([...feedbacks, { text: newFeedback, rating, image: selectedImage }]); // Thêm phản hồi vào danh sách
      setNewFeedback(""); // Reset phản hồi mới
      setRating(0); // Reset đánh giá
      setSelectedImage(null); // Reset hình ảnh
    } else {
      alert("Please provide both feedback text and a rating."); // Cảnh báo nếu chưa nhập đầy đủ
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">User Feedback</h1>
      <Back name="Feedback" title="Feedback of customer" cover={img} /> {/* Hiển thị header */}

      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Leave Your Feedback</h2>

        {/* Phần chọn sao để đánh giá */}
        <div className="flex mb-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`cursor-pointer text-3xl transition-all duration-300 ${
                star <= rating ? "text-yellow-500 scale-110" : "text-gray-300"
              }`}
              onClick={() => handleRatingChange(star)} // Thay đổi khi người dùng click vào sao
            >
              &#9733; {/* Hiển thị hình sao */}
            </span>
          ))}
        </div>

        {/* Textarea để người dùng nhập phản hồi */}
        <textarea
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 transition duration-300"
          rows="4"
          maxLength="300"
          placeholder="Write your feedback here..."
          value={newFeedback}
          onChange={(e) => setNewFeedback(e.target.value)} // Cập nhật phản hồi khi thay đổi
        />

        {/* Chọn hình ảnh để gửi */}
        <div className="flex items-center gap-4 mt-3">
          <input type="file" className="p-2 border rounded-lg" onChange={handleImageChange} />
          {selectedImage && (
            <img src={selectedImage} alt="Preview" className="w-16 h-16 rounded-lg object-cover border" />
          )}
        </div>

        {/* Nút submit */}
        <button
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition transform hover:scale-105"
          onClick={handleSubmit}
        >
          Submit Feedback
        </button>
      </div>

      {/* Hiển thị danh sách các phản hồi */}
      <div className="max-w-2xl mx-auto mt-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Customer Feedbacks</h2>
        {feedbacks.length === 0 ? (
          <p className="text-gray-500 text-center">No feedbacks yet.</p> // Hiển thị nếu không có phản hồi
        ) : (
          <div className="grid gap-4">
            {feedbacks.map((feedback, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg shadow-md bg-white hover:bg-gray-100 transition duration-300 cursor-pointer"
                onClick={() => setSelectedFeedback(feedback)} // Khi click vào phản hồi, hiển thị chi tiết
              >
                <div className="flex items-center mb-2">
                  <img
                    src={`https://i.pravatar.cc/150?img=${index + 1}`}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full border mr-3"
                  />
                  <span className="text-gray-700 font-medium">User {index + 1}</span>
                </div>
                {/* Hiển thị sao đánh giá */}
                <div className="flex items-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`text-2xl ${star <= feedback.rating ? "text-yellow-500" : "text-gray-300"}`}
                    >
                      &#9733; {/* Hiển thị sao đánh giá */}
                    </span>
                  ))}
                </div>
                <p className="text-gray-600">{feedback.text}</p> {/* Hiển thị nội dung phản hồi */}
                {feedback.image && (
                  <img src={feedback.image} alt="Feedback" className="mt-2 w-24 h-24 object-cover rounded-lg" />
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Chi tiết phản hồi khi click vào */}
      {selectedFeedback && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={() => setSelectedFeedback(null)}>
          <div className="bg-white p-6 rounded-lg shadow-lg w-96" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Detailed Feedback</h2>
            {/* Hiển thị chi tiết phản hồi */}
            <div className="flex items-center mb-3">
              <img
                src={`https://i.pravatar.cc/150?img=${feedbacks.indexOf(selectedFeedback) + 1}`}
                alt="User Avatar"
                className="w-12 h-12 rounded-full border mr-3"
              />
              <span className="text-gray-700 font-medium">User {feedbacks.indexOf(selectedFeedback) + 1}</span>
            </div>
            <div className="flex items-center mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`text-3xl ${star <= selectedFeedback.rating ? "text-yellow-500" : "text-gray-300"}`}
                >
                  &#9733;
                </span>
              ))}
            </div>
            <p className="text-gray-600">{selectedFeedback.text}</p>
            {selectedFeedback.image && (
              <img src={selectedFeedback.image} alt="Feedback" className="mt-3 w-full h-40 object-cover rounded-lg" />
            )}
            {/* Nút đóng chi tiết phản hồi */}
            <button
              className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition transform hover:scale-105"
              onClick={() => setSelectedFeedback(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
