import {
    ChefHat,
    Instagram,
    Facebook,
    Twitter,
    Youtube,
} from "lucide-react";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <>
            {/* Footer */}
            <footer className="bg-primary_brown text-white px-6 py-12">
                <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <ChefHat className="h-6 w-6 text-primary_yellow" />
                            <span className="font-semibold text-xl">
                                Amazing food
                            </span>
                        </div>
                        <p className="text-gray-300 mb-4">
                            Mang những hương vị tuyệt hảo nhất đến bàn ăn của
                            bạn.
                        </p>
                        <div className="flex gap-4">
                            <div className="hover:text-primary_yellow transition-colors">
                                <Instagram className="h-5 w-5" />
                            </div>
                            <div className="hover:text-primary_yellow transition-colors">
                                <Facebook className="h-5 w-5" />
                            </div>
                            <div className="hover:text-primary_yellow transition-colors">
                                <Twitter className="h-5 w-5" />
                            </div>
                            <div className="hover:text-primary_yellow transition-colors">
                                <Youtube className="h-5 w-5" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4 text-primary_yellow">
                            Trang
                        </h3>
                        <div className="space-y-2">
                            <Link to="/">
                                <div className="block text-gray-300 hover:text-primary_yellow transition-colors">
                                    Trang chủ
                                </div>
                            </Link>
                            <Link to="/menu">
                                <div className="block text-gray-300 hover:text-primary_yellow transition-colors">
                                    Thực đơn
                                </div>
                            </Link>

                            <Link to="/about">
                                <div className="block text-gray-300 hover:text-primary_yellow transition-colors">
                                    Giới thiệu
                                </div>
                            </Link>

                            <Link to="/contact">
                                <div className="block text-gray-300 hover:text-primary_yellow transition-colors">
                                    Liên hệ
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4 text-primary_yellow">
                            Liên hệ với chúng tôi
                        </h3>
                        <div className="space-y-2 text-gray-300">
                            <p>56 Trương Định</p>
                            <p>P. Bến Thành, Q.1</p>
                            <p>028 3535 5154</p>
                            <p>amazingfood@gmail.com</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4 text-primary_yellow">
                            Bộ sưu tập
                        </h3>
                        <div className="grid grid-cols-2 gap-2">
                            {[
                                "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
                                "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf",
                                "https://images.unsplash.com/photo-1544025162-d76694265947",
                                "https://images.unsplash.com/photo-1559339352-11d035aa65de",
                            ].map((img, i) => (
                                <img
                                    key={i}
                                    src={`${img}?auto=format&fit=crop&w=100&q=80`}
                                    alt="Bộ sưu tập"
                                    className="w-full h-16 object-cover rounded"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
