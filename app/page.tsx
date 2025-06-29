import Image from "next/image"
import {
  Menu,
  Search,
  ShoppingCart,
  User,
  CreditCard,
  Smartphone,
  Share2,
  MessageCircle,
  Linkedin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function STCKuwaitArabic() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Header */}
      <header className="bg-gray-50 text-purple-700">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-purple-700">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-purple-700 ">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-purple-700 ">
              <Search className="h-5 w-5" />
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <img src="/stc_logo_a.webp" alt="liog" className="text-2xl font-bold" width={50}/>
            <Button variant="ghost" size="icon" className="text-purple-700 ">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <div className="px-4 py-6">
          <div className="mb-6">
            <Image
              src="/img.webp"
              alt="جهاز الدفع الإلكتروني"
              width={400}
              height={250}
              className="w-full h-auto rounded-lg"
              priority
            />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-8 text-center">خدمات دفع الفواتير وإعادة التعبئة</h1>

          {/* Quick Pay Section */}
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">الدفع السريع</h2>
            <p className="text-gray-600 text-sm mb-4">رقم الهاتف (الرقم المدني أو رقم العقد)</p>

            <div className="space-y-4">
              <Input
              type="tel"
              maxLength={8}
                placeholder="أدخل رقم الهاتف"
                className="w-full p-3 border border-gray-300 rounded-lg text-right"
              />
              <Button className="w-full bg-pink-400 hover:bg-pink-500 text-white py-3 rounded-lg font-medium">
                متابعة
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-full border-pink-400 text-pink-400 hover:bg-pink-50 bg-transparent"
              >
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-6">
            {/* Pay your bill */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CreditCard className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">ادفع فاتورتك</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      ادفع فواتيرك بشكل أسرع وأكثر أماناً مع الدفع السريع من stc! استمتع بالخدمة وخذ تجربتك إلى المستوى
                      التالي.
                    </p>
                    <Button className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-lg font-medium">
                      ادفع الآن
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recharge your line */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Smartphone className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">أعد تعبئة خطك</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      أعد تعبئة خط الصوت أو الإنترنت الخاص بك في خطوات بسيطة واستمتع بتجربة مدفوعة مسبقاً سلسة مع stc.
                    </p>
                    <Button className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-lg font-medium">
                      أعد التعبئة الآن
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Terminated Lines Payment */}
            <Card className="border border-gray-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Smartphone className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">دفع الخطوط المنتهية</h3>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      لا تفوت الفرصة، ادفع الآن لإعادة تشغيل خدماتك مرة أخرى.
                    </p>
                    <Button className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-lg font-medium">
                      ادفع الآن
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-purple-900 text-white mt-12">
          <div className="px-4 py-8">
            {/* Footer Links Grid */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              {/* About stc */}
              <div>
                <h4 className="font-bold text-white mb-4">حول stc</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-purple-200 hover:text-white">
                      نظرة عامة
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-200 hover:text-white">
                      الرؤية والرسالة والقيم
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-200 hover:text-white">
                      علاقات المستثمرين
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-200 hover:text-white">
                      علاقات الموردين
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-200 hover:text-white">
                      الحوكمة المؤسسية
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-200 hover:text-white">
                      المسؤولية الاجتماعية للشركات
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-200 hover:text-white">
                      غرفة الأخبار
                    </a>
                  </li>
                </ul>
              </div>

              {/* Help center */}
              <div>
                <h4 className="font-bold text-white mb-4">مركز المساعدة</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-purple-200 hover:text-white">
                      المدفوعات
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-200 hover:text-white">
                      أمانك
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-200 hover:text-white">
                      تغطية الشبكة
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-200 hover:text-white">
                      اعثر علينا
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-200 hover:text-white">
                      وسائل التواصل الاجتماعي
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-200 hover:text-white">
                      اتصل بنا
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-200 hover:text-white">
                      خريطة الموقع
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Additional Links */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-purple-200 hover:text-white">
                      الشركات التابعة للمجموعة
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-200 hover:text-white">
                      مجموعة stc
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-200 hover:text-white">
                      stc السعودية
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-200 hover:text-white">
                      stc البحرين
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-200 hover:text-white">
                      stc pay
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-200 hover:text-white">
                      stc pay البحرين
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-purple-200 hover:text-white">
                      الوظائف
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-200 hover:text-white">
                      وظائف stc
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-purple-200 hover:text-white">
                      الفرص المتاحة
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* STC Logo */}
            <div className="text-center mb-8">
              <img src="vercel.svg" className="text-4xl font-bold mb-4 text"/>
              <p className="text-purple-200 text-sm max-w-xs mx-auto leading-relaxed">
                رائد رقمي عالمي المستوى يقدم خدمات ومنصات مبتكرة لعملائنا في الكويت.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-4 mb-8">
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-500 text-white"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-500 text-white"
              >
                <Phone className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-500 text-white"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-500 text-white"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-500 text-white"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="w-10 h-10 rounded-full bg-purple-600 hover:bg-purple-500 text-white"
              >
                <Youtube className="h-5 w-5" />
              </Button>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-purple-600 pt-6">
              <div className="flex flex-col gap-4 text-center">
                <div className="flex justify-center gap-6 text-xs">
                  <a href="#" className="text-purple-200 hover:text-white">
                    سياسة الخصوصية
                  </a>
                  <a href="#" className="text-purple-200 hover:text-white">
                    الشروط والأحكام
                  </a>
                  <a href="#" className="text-purple-200 hover:text-white">
                    CITRA إلغاء الاشتراك
                  </a>
                </div>
                <p className="text-purple-200 text-xs">حقوق الطبع والنشر © 2025 stc. جميع الحقوق محفوظة.</p>
              </div>
            </div>
          </div>
        </footer>
      </main>

      {/* WhatsApp Float Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button size="icon" className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg">
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  )
}
