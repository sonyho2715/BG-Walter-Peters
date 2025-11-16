import { Translations } from '@/types';

export const vi: Translations = {
  common: {
    next: 'Tiếp theo',
    previous: 'Quay lại',
    markComplete: 'Đánh dấu hoàn thành',
    completed: 'Đã hoàn thành',
    progress: 'Tiến độ',
    settings: 'Cài đặt',
    logout: 'Đăng xuất',
    items: 'mục',
    videoTutorials: 'Video Hướng Dẫn',
    watchVideo: 'Xem Video',
    hideVideo: 'Ẩn Video',
    faqs: 'Câu Hỏi Thường Gặp',
    goodToKnow: 'Điều Cần Biết',
  },
  dashboard: {
    title: 'AI Trading',
    onboarding: 'Hướng Dẫn Nhập Môn',
    nextSession: 'Phiên Giao Dịch Tiếp Theo',
    timeUntil: 'Thời gian đến phiên tiếp theo:',
    tradingTimes: 'Thời Gian Giao Dịch (Giờ Địa Phương Của Bạn',
    yourLocalTime: 'Giờ Địa Phương Của Bạn',
    autoConverted: 'Tất cả thời gian được tự động chuyển đổi từ EST sang múi giờ của bạn',
    importantReminder: 'Lưu Ý Quan Trọng Về Thời Gian',
    reminderText: 'Tất cả thời gian hệ thống đều theo múi giờ EST (Florida/New York). Thời gian hiển thị ở trên đã được tự động chuyển đổi sang múi giờ địa phương của bạn. Hãy nhớ đặt báo thức cho tất cả thời gian giao dịch và tín hiệu thưởng!',
  },
  tutorials: [
    {
      title: "Tạo Tài Khoản",
      duration: "5 phút",
      icon: "👤",
      description: "Thiết lập tài khoản DSJ và bắt đầu",
      videos: [],
      sections: [
        {
          heading: "Bước 1: Đăng Ký Tài Khoản Mới",
          content: [
            "Sử dụng mã mời và link hiển thị ở trên",
            "Mở link mời trong Safari hoặc Chrome",
            "Bạn có thể đăng ký bằng Email hoặc Số Điện Thoại",
            "Điền địa chỉ email và nhận mã xác nhận",
            "Nhập mã (nếu là phép tính như '9-5=?' chỉ cần nhập kết quả)",
            "Tạo và xác nhận mật khẩu của bạn",
            "Nhấp Đăng ký"
          ]
        },
        {
          heading: "Bước 2: Đăng Nhập",
          content: [
            "Nhập email và mật khẩu trên màn hình đăng nhập",
            "Nhấp 'Lưu Mật Khẩu' để truy cập dễ dàng sau này",
            "Nhấp 'Đăng Nhập' để truy cập DSJ Exchange"
          ]
        }
      ]
    },
    {
      title: "Nạp Tiền & Thiết Lập Tài Sản",
      duration: "10 phút",
      icon: "💰",
      description: "Thêm tiền vào tài khoản giao dịch của bạn",
      videos: [],
      sections: [
        {
          heading: "Lấy Thông Tin Nạp Tiền",
          content: [
            "Nhấp Tài sản (góc dưới bên phải)",
            "Nhấp Nạp tiền",
            "Chụp ảnh màn hình mã QR",
            "Sao chép link nạp tiền",
            "Gửi cả hai cho người giới thiệu"
          ]
        },
        {
          heading: "Gửi Tiền Qua Zelle",
          content: [
            "Chờ thông tin Zelle của người bán",
            "Gửi thanh toán qua Zelle",
            "Chụp ảnh màn hình bằng chứng thanh toán",
            "Gửi ảnh chụp màn hình cho người giới thiệu",
            "Chờ người bán nạp crypto vào tài khoản DSJ của bạn"
          ]
        },
        {
          heading: "Xác Minh Khoản Nạp",
          content: [
            "Vào Tài sản và kiểm tra số dư",
            "Bạn sẽ thấy số tiền nạp trong tài khoản",
            "Nếu nạp từ $500+, bạn sẽ thấy tiền thưởng",
            "Bạn đã sẵn sàng cho bước tiếp theo!"
          ]
        }
      ]
    },
    {
      title: "Tham Gia BonChat",
      duration: "8 phút",
      icon: "💬",
      description: "Kết nối với cộng đồng trên BonChat",
      videos: [
        { title: "Video Thiết Lập BonChat", url: "https://youtube.com/embed/YUu-bGnu5SI" }
      ],
      sections: [
        {
          heading: "Tải BonChat",
          content: [
            "Nhấp: https://www.bonchat.live/?id=d333666",
            "HOẶC tìm 'BonChat' trên App Store (iPhone) hoặc Google Play (Android)",
            "Tải và mở ứng dụng"
          ]
        },
        {
          heading: "Nhập 'Server ID'",
          content: [
            "Mở ứng dụng BonChat",
            "Bạn sẽ thấy trường 'Server ID/Domain'",
            "Cho Mỹ: Nhập D333666",
            "Cho Việt Nam/Châu Âu/Châu Phi/Châu Á: Nhập S333666",
            "Nhấp Tham gia"
          ]
        },
        {
          heading: "Tạo Tài Khoản",
          content: [
            "Nhấp 'Đăng ký' ở phía dưới",
            "Chọn quốc gia của bạn",
            "Nhập số điện thoại",
            "Nhấp 'Gửi' để nhận mã 'SMS'",
            "Nhập mã vào trường 'SMS Code'",
            "Đánh dấu cả hai ô xác nhận",
            "Nhấp 'Tiếp tục'"
          ]
        },
        {
          heading: "Thiết Lập Hồ Sơ & Thêm Liên Hệ",
          content: [
            "Tạo Biệt Danh",
            "Tạo và xác nhận mật khẩu",
            "Nhấp 'Tiếp tục'",
            "Nhấp biểu tượng người (góc dưới bên phải) để thêm ảnh đại diện",
            "'BonChat ID' của bạn bắt đầu bằng 'u' (hiển thị trong biểu tượng người)"
          ]
        },
        {
          heading: "Thêm Giáo Sư & Trợ Lý",
          content: [
            "Mỹ & Quốc Tế: Thêm Stephen03 & Elena03",
            "Chỉ Việt Nam: Thêm Stephen001 & RosaRosa8",
            "Tìm kiếm từng tên, nhấp, nói 'Xin chào' và nhấp 'Gửi Yêu Cầu'",
            "Chờ phê duyệt"
          ]
        }
      ]
    },
    {
      title: "Hoàn Thành Mẫu Đăng Ký",
      duration: "5 phút",
      icon: "📋",
      description: "Điền thông tin hồ sơ của bạn",
      videos: [],
      sections: [
        {
          heading: "Câu Hỏi Của Elena",
          content: [
            "Elena sẽ hỏi: 'Bạn đăng ký bằng email hay điện thoại?'",
            "Nếu bạn dùng email cho DSJ: Cung cấp email của bạn",
            "Nếu bạn dùng điện thoại cho DSJ: Cung cấp số điện thoại"
          ]
        },
        {
          heading: "Điền Mẫu BG-Wealth",
          content: [
            "Họ Tên Đầy Đủ: Tên đầy đủ của bạn",
            "Quốc Gia/Khu Vực: Vị trí của bạn",
            "Ngày Tham Gia: Ngày hôm nay",
            "Số Tiền Nạp: Số tiền bạn đã nạp",
            "'New Account ID': 'Account ID' DSJ của bạn (Trang chủ → Biểu tượng người → ID → Sao chép)",
            "'Recommended Account ID': 'Account ID' DSJ của người giới thiệu"
          ]
        },
        {
          heading: "Câu Hỏi Của Giáo Sư Stephen",
          content: [
            "Tên Của Bạn: Họ tên đầy đủ",
            "Quy Trình Giao Dịch: 'Chưa, tôi đang học'",
            "Tuổi: Tuổi của bạn",
            "Khoản Nạp Ban Đầu: ví dụ: '1000 USDT'",
            "'DSJEX Account': 'Account ID' DSJ của bạn",
            "Tên Người Giới Thiệu: Tên người giới thiệu",
            "Khu Vực: ví dụ: 'Hoa Kỳ'"
          ]
        }
      ]
    },
    {
      title: "Chuyển Tiền & Bắt Đầu Giao Dịch",
      duration: "3 phút",
      icon: "📊",
      description: "Di chuyển tiền và bắt đầu giao dịch",
      videos: [],
      sections: [
        {
          heading: "Chuyển Vào Tài Khoản Giao Dịch",
          content: [
            "Đăng nhập vào tài khoản DSJ",
            "Nhấp Tài sản (góc dưới bên phải)",
            "Nhấp 'Chuyển'",
            "Chọn 'Tất cả' để chuyển mọi thứ",
            "Chuyển tiền từ Sàn giao dịch → Tài khoản Giao dịch",
            "Bạn đã sẵn sàng để giao dịch! 🥳"
          ]
        },
        {
          heading: "Lịch Giao Dịch",
          content: [
            "Thời gian giao dịch (EST): 1:20 PM và 7:20 PM",
            "Bạn có 10 phút để thực hiện mỗi giao dịch",
            "ĐẶT BÁO THỨC cho múi giờ địa phương của bạn",
            "Tín hiệu thưởng bắt đầu từ Ngày 2",
            "Nạp ngày đầu từ $500+ = 6 tín hiệu thưởng trong 1.5 ngày"
          ]
        }
      ]
    },
    {
      title: "Cách Theo Tín Hiệu Thưởng",
      duration: "4 phút",
      icon: "🎯",
      description: "Học cách thực hiện giao dịch tín hiệu thưởng",
      videos: [
        { title: "Hướng Dẫn Giao Dịch Thưởng", url: "https://youtube.com/embed/5ZaTrGK70iw" },
        { title: "Mẹo Giao Dịch Nâng Cao", url: "https://youtube.com/embed/wH89VHy9Fec" }
      ],
      sections: [
        {
          heading: "Quy Trình Giao Dịch Thưởng",
          content: [
            "KHÔNG CẦN MÃ cho các giao dịch thưởng",
            "Chỉ cần nhấp: Hợp đồng tương lai → Mời tôi → Xác nhận theo lệnh",
            "Bạn có 10 phút sau khi tín hiệu được gửi",
            "Thưởng có sẵn 2-3 phút trước thời gian chính thức"
          ]
        },
        {
          heading: "Thời Gian Thưởng Ngày 1 (EST)",
          content: [
            "2:00 PM",
            "2:30 PM",
            "8:30 PM",
            "9:00 PM"
          ]
        },
        {
          heading: "Thời Gian Thưởng Ngày 2 (EST)",
          content: [
            "2:00 PM",
            "2:30 PM",
            "Sau đó kỳ thưởng kết thúc"
          ]
        },
        {
          heading: "Lưu Ý Quan Trọng",
          content: [
            "Thời gian hệ thống là EST (Florida/New York)",
            "Chuyển đổi sang múi giờ địa phương của bạn",
            "Đặt báo thức cho tất cả thời gian giao dịch & thưởng",
            "Nếu bỏ lỡ tín hiệu, không thể khôi phục",
            "Nếu có lỗi kỹ thuật, chụp ảnh màn hình và gửi cho Elena/Stephen"
          ]
        }
      ]
    }
  ],
  faqs: [
    {
      question: "Điều gì xảy ra nếu tôi bỏ lỡ tín hiệu giao dịch?",
      answer: "Thật không may, nếu bạn bỏ lỡ tín hiệu giao dịch, nó không thể khôi phục được. Hãy đặt báo thức cho tất cả thời gian giao dịch theo múi giờ địa phương của bạn để tránh bỏ lỡ tín hiệu."
    },
    {
      question: "Làm sao để biết mình đang ở đúng múi giờ?",
      answer: "Tất cả thời gian giao dịch hiển thị trên bảng điều khiển đều được tự động chuyển đổi sang múi giờ địa phương của bạn. Chỉ cần đảm bảo đồng hồ hệ thống của thiết bị được đặt chính xác."
    },
    {
      question: "Số tiền nạp tối thiểu là bao nhiêu?",
      answer: "Bạn có thể bắt đầu với bất kỳ số tiền nào, nhưng nạp từ $500 trở lên vào ngày đầu tiên sẽ cho bạn 6 tín hiệu thưởng trong 1,5 ngày."
    },
    {
      question: "Tôi nên liên hệ với ai nếu gặp sự cố kỹ thuật?",
      answer: "Chụp ảnh màn hình sự cố và gửi cho Elena03 hoặc Stephen03 trên BonChat. Họ sẽ giúp bạn giải quyết mọi vấn đề kỹ thuật."
    },
    {
      question: "Mất bao lâu để khoản nạp của tôi xuất hiện?",
      answer: "Sau khi bạn gửi thanh toán qua Zelle và cung cấp bằng chứng cho người giới thiệu, khoản nạp crypto thường xuất hiện trong tài khoản DSJ của bạn trong vòng vài phút đến vài giờ tùy thuộc vào người bán."
    },
    {
      question: "Tôi có cần mã cho tín hiệu thưởng không?",
      answer: "Không! Đối với tín hiệu thưởng, chỉ cần nhấp: Hợp đồng tương lai → Mời tôi → Xác nhận theo lệnh. Không cần mã."
    }
  ],
  goodToKnow: [
    {
      title: "Khung Thời Gian Giao Dịch",
      content: "Bạn có chính xác 10 phút để thực hiện mỗi giao dịch sau khi tín hiệu được gửi. Đặt nhiều báo thức để đảm bảo không bỏ lỡ."
    },
    {
      title: "Tín Hiệu Thưởng Có Sẵn",
      content: "Tín hiệu thưởng có sẵn 2-3 phút trước thời gian chính thức. Điều này cho bạn thêm thời gian để chuẩn bị."
    },
    {
      title: "Múi Giờ Rất Quan Trọng",
      content: "Tất cả thời gian hệ thống theo EST (Giờ Chuẩn Miền Đông). Bảng điều khiển này tự động chuyển đổi thời gian sang múi giờ của bạn, nhưng luôn kiểm tra lại đồng hồ thiết bị của bạn chính xác."
    },
    {
      title: "Lưu Mật Khẩu",
      content: "Sử dụng trình quản lý mật khẩu của trình duyệt hoặc ứng dụng an toàn để lưu mật khẩu DSJ và BonChat. Bạn sẽ cần truy cập nhanh trong khung thời gian giao dịch."
    },
    {
      title: "Chụp Ảnh Màn Hình Mọi Thứ",
      content: "Giữ ảnh chụp màn hình của: mã QR nạp tiền, xác nhận thanh toán, bất kỳ lỗi nào và các giao dịch thành công. Những thứ này giúp giải quyết vấn đề nhanh chóng."
    },
    {
      title: "BonChat Là Thiết Yếu",
      content: "Tất cả tín hiệu giao dịch và cập nhật quan trọng đều đến qua BonChat. Đảm bảo thông báo được bật và bạn đã thêm đúng giáo sư và trợ lý."
    },
    {
      title: "Chuyển Vào Tài Khoản Giao Dịch",
      content: "Nhớ chuyển tiền từ tài khoản Sàn giao dịch sang tài khoản Giao dịch trước khi bắt đầu giao dịch. Sử dụng nút 'Tất cả' để chuyển mọi thứ cùng lúc."
    },
    {
      title: "Thưởng Ngày Đầu Tiên",
      content: "Nếu bạn nạp từ $500+ vào ngày đầu tiên, bạn nhận được 6 tín hiệu giao dịch thưởng trong 1,5 ngày. Những tín hiệu này ngoài thời gian giao dịch thường xuyên."
    }
  ]
};
