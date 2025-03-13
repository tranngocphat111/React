import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLng } from "leaflet";
import "leaflet/dist/leaflet.css";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Giả lập gọi API (Delay 1.5 giây)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form đã được gửi:", formData);
    setIsLoading(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-primary-linear flex flex-col items-center justify-start p-4 relative overflow-hidden mb-10">
      <div className="w-full max-w-6xl relative z-10 mt-24">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary_yellow">
            Liên Hệ Với Chúng Tôi
          </h1>
          <p className="mt-4 text-gray-300 text-lg lg:text-xl text-center max-w-3xl mx-auto">
            Chúng tôi luôn sẵn sàng lắng nghe và phục vụ bạn. Đừng ngần ngại
            liên hệ với chúng tôi để nhận được sự hỗ trợ tốt nhất.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form liên hệ */}
          <div className="bg-gray-900/80 backdrop-blur-xl rounded-xl p-8 shadow-lg border border-primary_yellow/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Họ và tên"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                      focus:ring-2 focus:ring-primary_yellow focus:border-transparent text-gray-200 
                      placeholder-gray-500"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                      focus:ring-2 focus:ring-primary_yellow focus:border-transparent text-gray-200 
                      placeholder-gray-500"
                    required
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Tiêu đề"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                    focus:ring-2 focus:ring-primary_yellow focus:border-transparent text-gray-200 
                    placeholder-gray-500"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Nội dung tin nhắn"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg 
                    focus:ring-2 focus:ring-primary_yellow focus:border-transparent text-gray-200 
                    placeholder-gray-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary_yellow text-gray-900 font-semibold py-3 rounded-lg 
                  transition-all duration-300 ease-in-out hover:bg-primary_yellow/90
                  disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <Loader2 className="h-5 w-5 animate-spin" />
                  </div>
                ) : (
                  <span className="inline-flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Gửi tin nhắn
                  </span>
                )}
              </button>
            </form>
          </div>

          {/* Thông tin liên hệ và bản đồ */}
          <div className="space-y-8">
            <div className="bg-gray-900/80 backdrop-blur-xl rounded-xl p-8 shadow-lg border border-primary_yellow/20 space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary_yellow/10 rounded-lg">
                  <Phone className="w-6 h-6 text-primary_yellow" />
                </div>
                <div>
                  <h3 className="text-primary_yellow font-semibold">
                    Điện thoại
                  </h3>
                  <p className="text-gray-400">+84 123 456 789</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary_yellow/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary_yellow" />
                </div>
                <div>
                  <h3 className="text-primary_yellow font-semibold">Email</h3>
                  <p className="text-gray-400">info@amazingfood.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary_yellow/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary_yellow" />
                </div>
                <div>
                  <h3 className="text-primary_yellow font-semibold">Địa chỉ</h3>
                  <p className="text-gray-400">
                    123 Nguyễn Huệ, Quận 1, TP.HCM
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary_yellow/10 rounded-lg">
                  <Clock className="w-6 h-6 text-primary_yellow" />
                </div>
                <div>
                  <h3 className="text-primary_yellow font-semibold">
                    Giờ mở cửa
                  </h3>
                  <p className="text-gray-400">T2-CN: 8:00 - 22:00</p>
                </div>
              </div>
            </div>

            {/* Bản đồ với Leaflet */}
            <div className="h-[300px] bg-gray-900/80 backdrop-blur-xl rounded-xl overflow-hidden shadow-lg border border-primary_yellow/20">
              <MapContainer
                center={new LatLng(10.762622, 106.660172)}
                zoom={15}
                style={{ width: "100%", height: "100%" }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={new LatLng(10.762622, 106.660172)}>
                  <Popup>
                    Amazing Food
                    <br /> 123 Nguyễn Huệ, Quận 1, TP.HCM
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;