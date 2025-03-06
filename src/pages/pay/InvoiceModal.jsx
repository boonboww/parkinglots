import { X, Car, Clock, DollarSign, CreditCard, FileText } from "lucide-react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom"; // Dùng để chuyển trang

const InvoiceModal = ({ isOpen, onClose, invoice }) => {
    const navigate = useNavigate(); // Hook điều hướng

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div
                className="bg-orange-950 p-6 rounded-lg shadow-lg w-96 relative m-20"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Nút đóng modal */}
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onClose();
                    }}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                    <X size={20} />
                </button>

                {/* Tiêu đề */}
                <h2 className="text-2xl text-white font-bold mb-4 text-center flex items-center justify-center">
                    <FileText className="mr-2" /> Hóa Đơn Dịch Vụ
                </h2>

                {/* Thông tin bãi giữ xe */}
                <div className="text-white space-y-3 mb-4">
                    <p className="flex items-center">
                        <strong>Mã bãi giữ xe:</strong> {invoice?.parkingLotCode || "PL123"}
                    </p>
                    <p className="flex items-center">
                        <strong>Địa chỉ:</strong> {invoice?.parkingLotAddress || "123 Đường ABC, Quận 1, TP.HCM"}
                    </p>
                </div>

                {/* Nội dung hóa đơn */}
                <div className="text-white space-y-3">
                    <p className="flex items-center">
                        <strong>Mã hóa đơn:</strong> {invoice?.invoiceCode || "Không có"}
                    </p>
                    <p className="flex items-center">
                        <strong>Họ tên:</strong> {invoice?.userName || "Phạm Hữu Thân Thương"}
                    </p>
                    <p className="flex items-center">
                        <Car className="mr-2" /> <strong>Biển số xe:</strong> {invoice?.licensePlate || "Không có"}
                    </p>
                    <p className="flex items-center">
                        <Clock className="mr-2" /> <strong>Giờ vào:</strong> {invoice?.checkInTime || "Không có"}
                    </p>
                    <p className="flex items-center">
                        <Clock className="mr-2" /> <strong>Giờ ra:</strong> {invoice?.checkOutTime || "Không có"}
                    </p>
                    <p className="flex items-center">
                        <Clock className="mr-2" /> <strong>Tổng giờ sử dụng:</strong> {invoice?.hours || 0} giờ
                    </p>
                    <p className="flex items-center">
                        <DollarSign className="mr-2" /> <strong>Phí giữ xe:</strong> {invoice?.parkingFee || 0}đ
                    </p>

                    {/* Hiển thị phí rửa xe nếu có */}
                    {invoice?.carWash && (
                        <p className="flex items-center">
                            <DollarSign className="mr-2" /> <strong>Dịch vụ rửa xe:</strong> {invoice?.carWashFee}đ
                        </p>
                    )}

                    <hr className="border-gray-300 my-3" />

                    {/* Tổng tiền */}
                    <p className="text-lg bg-red-700 text-white py-2 px-3 rounded-md font-semibold flex items-center justify-between">
                        <DollarSign className="mr-2" /> Tổng tiền: <span>{invoice?.totalPrice || 0}đ</span>
                    </p>

                    {/* Phương thức thanh toán */}
                    <p className="flex items-center">
                        <CreditCard className="mr-2" /> <strong>Phương thức thanh toán:</strong> {invoice?.paymentMethod || "Chưa chọn"}
                    </p>
                </div>

                {/* Nút Thanh toán */}
                <button
                    onClick={() => navigate("/pay")} // Điều hướng bằng useNavigate
                    className="mt-4 w-full bg-gray-300 text-gray-800 py-2 rounded-md hover:bg-gray-400 transition"
                >
                    Thanh toán
                </button>
            </div>
        </div>
    );
};

// Kiểm tra props với PropTypes
InvoiceModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    invoice: PropTypes.shape({
        licensePlate: PropTypes.string,
        hours: PropTypes.number,
        parkingFee: PropTypes.number,
        carWash: PropTypes.bool,
        carWashFee: PropTypes.number,
        totalPrice: PropTypes.number,
        paymentMethod: PropTypes.string,
        invoiceCode: PropTypes.string,
        userName: PropTypes.string,
        parkingLotCode: PropTypes.string,
        parkingLotAddress: PropTypes.string,
        checkInTime: PropTypes.string,
        checkOutTime: PropTypes.string,
    }),
};

export default InvoiceModal;
