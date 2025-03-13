import { Star } from "lucide-react";
import { data } from "../data"

export default function TopReviews() {
  const reviews = [
    {
      id: 1,
      name: "Hữu Thái",
      avatar: "https://i.pravatar.cc/150?img=1",
      review:
        "Trải nghiệm ẩm thực tuyệt vời nhất mà tôi từng có trong nhiều năm qua. Món ăn tuyệt hảo và dịch vụ vô cùng xuất sắc.",
    },
    {
      id: 2,
      name: "Ngọc Phát",
      avatar: "https://i.pravatar.cc/150?img=2",
      review:
        "Trải nghiệm ẩm thực tuyệt vời nhất mà tôi từng có trong nhiều năm qua. Món ăn tuyệt hảo và dịch vụ vô cùng xuất sắc.",
    },
    {
      id: 3,
      name: "Tấn Nghị",
      avatar: "https://i.pravatar.cc/150?img=3",
      review:
        "Trải nghiệm ẩm thực tuyệt vời nhất mà tôi từng có trong nhiều năm qua. Món ăn tuyệt hảo và dịch vụ vô cùng xuất sắc.",
    },
  ];
  return (
    <section className="bg-primary_yellow px-6 py-16 text-white text-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-primary_brown mb-12">
          Đánh giá của khách hàng
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-primary_linear p-8 rounded-lg"
            >
              <div className="flex justify-center gap-2 mb-4">
                {[...Array(5)].map((_, star) => (
                  <Star
                    key={star}
                    className="h-5 w-5 fill-primary_yellow text-primary_yellow"
                  />
                ))}
              </div>
              <p className="text-gray-200 leading-relaxed mb-4">
                {review.review}
              </p>
              <div className="flex items-center justify-center gap-3">
                <img
                  src={review.avatar}
                  alt="Customer"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold  text-left">{review.name}</div>
                  <div className="text-sm text-gray-300">
                    Nhà phê bình ẩm thực
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
