export default function InsideInfor() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto my-5">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-[42px] font-bold text-primary_yellow leading-tight transform hover:scale-105 transition-transform duration-300 drop-shadow-yellow">
            Thông tin dành cho những vị
            <span className="block mt-2"> khách quý của chúng tôi</span>
          </h1>
          <p className="text-gray-300 leading-relaxed text-xl">
            Chúng tôi tự hào mang đến trải nghiệm ẩm thực tuyệt vời nhất.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[
              { value: "3", label: "Ngôi sao Michelin" },
              { value: "1995", label: "Hoạt động từ" },
              { value: "65+", label: "Thành viên nhân viên" },
              { value: "100%", label: "Khách hàng hài lòng" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-primary_yellow">
                  {stat.value}
                </div>
                <div className="text-white">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?auto=format&fit=crop&q=80"
            alt="Chef preparing food"
            className="rounded-lg w-full h-[400px] object-cover shadow-lg mt-10"
          />
        </div>
      </div>
    </section>
  );
}
