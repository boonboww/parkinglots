import { useState } from "react"
import InvoiceModal from "./InvoiceModal"; 
import { Eye } from "lucide-react";


const Payment = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Dữ liệu giả lập của hóa đơn
    const invoiceData = {
        invoiceCode: " HD-001",
        customerName: " Phạm Hữu Thân Thương",
        licensePlate: " 51A-12345",
        hours: 5,
        parkingFee: 50000,
        carWash: true, 
        carWashFee: 30000,
        totalPrice: 80000,
        paymentMethod: " Thanh toán qua MOMO"
    };

    // Thông tin khách hàng
    const entryTime = new Date("2023-10-01T08:00:00");
    const exitTime = new Date("2023-10-01T13:00:00");

    const calculateHours = (entryTime, exitTime) => {
        const diff = Math.abs(exitTime - entryTime);
        return Math.ceil(diff / (1000 * 60 * 60)); // Chuyển đổi từ milliseconds sang hours
    };

    const hoursUsed = calculateHours(entryTime, exitTime);
    const customerInfo = {
        invoiceCode: "HD-001",
        customerName: "Phạm Hữu Thân Thương"
    };

    return (
        <section className="p-8 bg-gray-100 hue-rotate-0">
            <div className="max-w-2xl mx-auto bg-red-200 p-6 rounded-lg shadow-md h-1/4">
                <h2 className="text-2xl font-bold mb-4 text-center">Thanh Toán Dịch Vụ</h2>

               
{/* 
                /* Hiển thị mã hóa đơn, họ tên khách hàng, mã bãi giữ xe và địa chỉ bãi giữ xe  */} 
                <div className="mb-4">
                    <p className="text-gray-700"><strong>Mã hóa đơn: </strong> {customerInfo.invoiceCode}</p>
                    <p className="text-gray-700"><strong>Họ tên khách hàng: </strong> {customerInfo.customerName}</p>
                    <p className="text-gray-700"><strong>Mã bãi giữ xe: </strong> {invoiceData.parkingLotCode}</p>
                    <p className="text-gray-700"><strong>Địa chỉ bãi giữ xe: </strong> {invoiceData.parkingLotAddress}</p>
                    <p className="text-gray-700"><strong>Số giờ sử dụng: </strong> {hoursUsed}</p>
                    
                </div>

                <p className="text-gray-700">Vui lòng kiểm tra hóa đơn trước khi thanh toán.</p>

                <div 
                    onClick={() => setIsModalOpen(true)}
                    className="mt-4 flex items-center justify-center bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 w-full"
                >
                    <Eye className="mr-2" /> Xem Chi Tiết Hóa Đơn
                      
                </div>

                {/* Hiển thị modal khi mở */}
                <InvoiceModal 
                    isOpen={isModalOpen} 
                    onClose={() => setIsModalOpen(false)} 
                    invoice={{ ...invoiceData, ...customerInfo }} 
                />
            </div>
        </section>
    );
};

export default Payment;
