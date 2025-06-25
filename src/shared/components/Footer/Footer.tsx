import { Facebook, Twitter, Instagram, Youtube, Twitch } from 'lucide-react'
import Logo from '@/shared/components/Logo'

const Footer = () => {
  const socialIcons = [
    { icon: <Facebook size={20} /> },
    { icon: <Twitter size={20} /> },
    { icon: <Instagram size={20} /> },
    { icon: <Youtube size={20} /> },
    { icon: <Twitch size={20} /> }
  ]

  return (
    <footer className="bg-footer-bg pt-10 pb-5 text-center">
      <div className="flex-col-center container pt-0 pb-0">
        {/* Vietnam Flag */}
        <div className="flex-center w-fit gap-2 rounded-full bg-red-600/30 px-4 py-2">
          <div className="size-6">
            <img src="/vn_flag.svg" alt="Vietnam" />
          </div>
          <span className="text-[15px] font-semibold xl:text-base">Hoàng Sa và Trường Sa là của Việt Nam!</span>
        </div>

        <Logo className="mt-4" />

        {/* Social Icons */}
        <div className="flex-center mt-8 w-fit cursor-pointer gap-5">
          {socialIcons.map((item, index) => (
            <div key={index} className="hover:bg-main-color/60 flex-center h-10 w-10 rounded-full bg-gray-700">
              {item.icon}
            </div>
          ))}
        </div>

        {/* Fake Links */}
        <div className="mt-6 flex w-fit cursor-pointer flex-wrap justify-center gap-4 text-sm font-medium sm:gap-6">
          <div className="hover:text-main-text">Hỏi-Đáp</div>
          <div className="hover:text-main-text">Chính sách bảo mật</div>
          <div className="hover:text-main-text">Điều khoản sử dụng</div>
          <div className="hover:text-main-text">Giới thiệu</div>
          <div className="hover:text-main-text">Liên hệ</div>
        </div>

        {/* Description */}
        <p className="text-base-color mx-auto mt-6 max-w-2xl text-sm">
          PopcornFlix - Trang xem phim online chất lượng cao miễn phí Vietsub, thuyết minh, lồng tiếng chất lượng cao.
          Kho phim mới không lỡ, phim chiếu rạp, phim bộ, phim lẻ từ nhiều quốc gia như Việt Nam, Hàn Quốc, Trung Quốc,
          Thái Lan, Nhật Bản, Âu Mỹ... đa dạng thể loại. Khám phá nền tảng xem phim hay nhất 2025.
        </p>

        {/* Copyright */}
        <span className="text-base-color mt-5 text-sm">© 2025 PopcornFlix</span>
      </div>
    </footer>
  )
}

export default Footer
