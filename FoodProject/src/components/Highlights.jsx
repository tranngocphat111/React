import { Clock, MapPin, Star } from "lucide-react";
export default function Highlights() {
    const features = [
        {
          icon: Clock,
          title: "Tươi ngon mỗi ngày",
          desc: "Chúng tôi chuẩn bị nguyên liệu tươi sống mỗi ngày để đảm bảo chất lượng tốt nhất.",
        },
        {
          icon: MapPin,
          title: "Đặt hàng dễ dàng",
          desc: "Chọn món ăn yêu thích và đặt hàng trực tuyến hoặc qua điện thoại.",
        },
        {
          icon: Star,
          title: "Nhà hàng hàng đầu",
          desc: "Được khách hàng đánh giá là nhà hàng tốt nhất trong thành phố.",
        },
      ]
  return (
    <section className="bg-primary_yellow px-6 py-16 text-primary_brown text-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <div key={index} className="space-y-4">
            <feature.icon className="h-14 w-14 mx-auto text-primary_brown" />
            <h3 className="font-semibold text-2xl">{feature.title}</h3>
            <p className=" leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
