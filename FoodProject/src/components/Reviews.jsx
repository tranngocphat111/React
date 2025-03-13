import React from "react";
import { Star } from "lucide-react";

const Reviews = () => {
  const ratings = [
    { stars: 5, percentage: 89 },
    { stars: 4, percentage: 11 },
    { stars: 3, percentage: 0 },
    { stars: 2, percentage: 0 },
    { stars: 1, percentage: 0 },
  ];

  const reviews = [
    {
      "id": 1,
      "author": "Lê Văn Hữu Thái",
      "rating": 5,
      "date": "01/10/2025",
      "comment": "Chiếc hamburger ngon nhất tôi từng ăn! Bánh mì mềm, thịt bò mọng nước, phô mai tan chảy – hoàn hảo!"
    },
    {
      "id": 2,
      "author": "Trần Ngọc Phát",
      "rating": 4,
      "date": "02/10/2025",
      "comment": "Vị sốt đậm đà kết hợp với thịt nướng thơm phức, ăn kèm khoai tây chiên giòn rụm, quá tuyệt!"
    },
    {
      "id": 3,
      "author": "Nguyễn Tấn Nghị",
      "rating": 3,
      "date": "03/10/2025",
      "comment": "Burger khá ổn, nhưng bánh hơi khô. Nếu có thêm chút sốt thì ngon hơn."
    }
  ]
  

  return (
    <>
      <h2 className="text-3xl font-semibold text-primary_yellow drop-shadow-default mt-12 mb-6">
        Đánh giá của khách hàng
      </h2>
      <div className="min-h-screen ">
        <div className=" mx-auto">
          <div className="mb-12">
            <div className="flex items-baseline gap-2">
              <h1 className="text-6xl font-bold text-primary_yellow">4.9</h1>
              <span className="text-primary_yellow">/5</span>
            </div>

            <div className="space-y-3 mt-6">
              {ratings.map((rating) => (
                <div key={rating.stars} className="flex items-center gap-4">
                  <span className="text-primary_yellow w-4">
                    {rating.stars}
                  </span>
                  <Star className="w-4 h-4 text-primary_yellow" />
                  <div className="flex-1 h-2 bg-primary_brown/30 rounded-full">
                    <div
                      className="h-full bg-primary_yellow rounded-full"
                      style={{ width: `${rating.percentage}%` }}
                    />
                  </div>
                  <span className="text-primary_yellow w-12">
                    {rating.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Reviews List */}
          <div className="space-y-8">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="bg-primary_brown/20 p-6 rounded-lg drop-shadow-default"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary_yellow flex items-center justify-center">
                      <span className="text-primary_brown font-semibold">
                        {review.author.charAt(0)}
                      </span>
                    </div>
                    <span className="text-primary_yellow font-medium">
                      {review.author}
                    </span>
                  </div>
                  <span className="text-white text-sm">{review.date}</span>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary_yellow text-primary_yellow"
                    />
                  ))}
                </div>

                <p className="text-white">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
