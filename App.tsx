/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Plane, 
  Hotel, 
  Map, 
  Ship, 
  Sun, 
  Smartphone, 
  Calendar, 
  Users,
  ChevronLeft,
  Search,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const SECTIONS = [
  { id: 1, title: "حجوزات الطيران", icon: Plane, color: "bg-[#4a2e82]", image: "https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=2070&auto=format&fit=crop" },
  { id: 2, title: "الفنادق والشقق", icon: Hotel, color: "bg-[#f39c12]", image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop" },
  { id: 3, title: "الجولات السياحية", icon: Map, color: "bg-[#3498db]", image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=1974&auto=format&fit=crop" },
  { id: 4, title: "السفر بالكروز", icon: Ship, color: "bg-[#2980b9]", image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2054&auto=format&fit=crop" },
  { id: 5, title: "عروض صيف 2026", icon: Sun, color: "bg-[#e67e22]", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop" },
  { id: 6, title: "الشرائح الالكترونية", icon: Smartphone, color: "bg-[#8e44ad]", image: "https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=2070&auto=format&fit=crop" },
  { id: 7, title: "خطط رحلتك", icon: Calendar, color: "bg-[#2c3e50]", image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=2068&auto=format&fit=crop" },
  { id: 8, title: "شركاء النجاح", icon: Users, color: "bg-[#27ae60]", image: "https://storage.googleapis.com/source-ai-artifacts-us-east1/k6xvshbgtwyqadlierxs4i/artifact_1745939828.png" },
];

function LogoComponent({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center overflow-hidden rounded-full border-2 border-[#f39c12] bg-[#351e60] shadow-xl ${className}`}>
      <img 
        src="https://storage.googleapis.com/source-ai-artifacts-us-east1/k6xvshbgtwyqadlierxs4i/artifact_1745937365.png" 
        alt="Bfly Logo" 
        className="w-[90%] h-[90%] object-contain"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home"); // 'home', 'flights', 'hotels', 'tours', 'plan', 'whatsapp'
  const [hotelRegion, setHotelRegion] = useState<string | null>(null);

  const WHATSAPP_NUMBER = "966556162264";
  const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

  const openWhatsApp = () => window.open(WHATSAPP_LINK, "_blank");

  const RenderHome = () => (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540339832862-47452993c66b?q=80&w=2070&auto=format&fit=crop" 
            className="w-full h-full object-cover opacity-15" 
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 to-slate-50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-[#351e60] mb-6 tracking-tight leading-tight">
              اكتشف العالم مع <span className="text-[#f39c12] relative">
                Bfly
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#3498db] rounded-full opacity-50 scale-x-75"></div>
              </span> لحجوزات السفر
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 font-medium">
              الخيار الأول لحجوزات الطيران، الفنادق، والكروز. كل ما تحتاجه في عالم السفر بلمسة واحدة.
            </p>
          </motion.div>

          {/* New WhatsApp Focused Search/Action */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-xl mx-auto"
          >
            <button 
              onClick={openWhatsApp}
              className="w-full bg-[#27ae60] hover:bg-[#219150] text-white font-black py-5 px-12 rounded-3xl transition-all shadow-xl hover:shadow-green-200 flex items-center justify-center gap-4 transform active:scale-95 group"
            >
              <Smartphone size={28} className="group-hover:rotate-12 transition-transform" />
              <span className="text-xl">تواصل معنا واحجز الآن عبر الواتساب</span>
            </button>
            <p className="mt-4 text-slate-400 font-bold text-sm italic">خدمة عملاء على مدار الساعة لتلبية كافة طلباتكم</p>
          </motion.div>
        </div>
      </section>

      {/* Grid Section - Categories */}
      <section className="max-w-7xl mx-auto px-4 py-8 relative -mt-8 z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SECTIONS.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group relative h-80 rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 cursor-pointer"
              onClick={() => {
                if (section.id === 1) setCurrentPage("flights");
                else if (section.id === 2) setCurrentPage("hotels");
                else if (section.id === 7) setCurrentPage("plan");
                else setCurrentPage("whatsapp_redirect");
              }}
            >
              {/* Background Image per Section */}
              <div className="absolute inset-0">
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-115"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#351e60]/95 via-[#351e60]/40 to-transparent" />
              </div>

              {/* Float Effect Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-between p-8 text-center">
                <div /> {/* Spacer */}
                
                <div className="flex flex-col items-center">
                  <motion.div 
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className={`${section.color} p-5 rounded-[28px] text-white shadow-2xl mb-6 relative z-30 ring-4 ring-white/20`}
                  >
                    <section.icon size={36} strokeWidth={2.5} />
                  </motion.div>
                  <h3 className="text-white text-2xl font-black mb-1 group-hover:text-[#f39c12] transition-colors">{section.title}</h3>
                  <div className="w-12 h-1 bg-[#3498db] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-x-0 group-hover:scale-x-100" />
                </div>

                <motion.button 
                  className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-6 py-2.5 rounded-2xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-[#f39c12] hover:border-transparent"
                >
                  استكشف الآن
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Offers Banner */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="bg-[#351e60] rounded-[50px] p-12 relative overflow-hidden shadow-3xl">
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-20">
              <img src="https://images.unsplash.com/photo-1544016768-982d1554f0b9?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Offers" />
          </div>
          <div className="relative z-10 text-right md:w-2/3">
              <span className="inline-block bg-[#f39c12] text-white px-4 py-1.5 rounded-full text-xs font-black mb-6 animate-pulse">حصري لفترة محدودة</span>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">عروض الصيف المنتظرة 2026</h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed max-w-xl">
                وفر حتى 40% على حجوزاتك الأولى لهذا الصيف. وجهات سياحية ساحرة بانتظاركم في كل أنحاء العالم.
              </p>
          </div>
        </div>
      </section>

      {/* Success Partners Logos */}
      <section className="bg-slate-100/50 py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-black text-[#351e60] text-center mb-12">شركاء النجاح</h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 hover:opacity-100 transition-all">
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl font-bold text-slate-800">viator</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl font-bold text-slate-800">GetTransfer</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-slate-800">Daytrip</span>
            </div>
            <div className="flex flex-col items-center text-[#e91e63]">
              <span className="text-2xl font-bold">Holafly</span>
            </div>
            <div className="flex flex-col items-center text-slate-900">
              <span className="text-2xl font-bold italic">Airalo</span>
              <span className="text-[10px] font-bold text-[#f39c12] -mt-1">وكيل رسمي</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const RenderFlights = () => (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="max-w-7xl mx-auto px-4 pt-32 pb-20"
    >
      <div className="flex justify-start mb-6">
        <button 
          onClick={() => setCurrentPage("home")}
          className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100 text-[#351e60] font-black hover:bg-slate-50 transition-all"
        >
          <ChevronLeft size={20} className="rotate-180" />
          <span>العودة للرئيسية</span>
        </button>
      </div>

      <div className="bg-white rounded-[40px] shadow-3xl overflow-hidden border border-slate-100 min-h-[500px] flex flex-col items-center justify-center p-12 text-center">
        <motion.div 
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="bg-[#27ae60] p-8 rounded-full text-white shadow-2xl mb-8"
        >
          <Smartphone size={64} />
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-black text-[#351e60] mb-8 leading-tight">للحجز أو الاستفسار عن الرحلات</h2>
        <p className="text-xl text-slate-500 mb-10 font-bold">يرجى الضغط على الزر أدناه للتواصل مباشرة مع فريق العمل عبر الواتساب</p>
        <button 
          onClick={openWhatsApp}
          className="bg-[#27ae60] hover:bg-[#219150] text-white px-12 py-5 rounded-3xl font-black text-2xl shadow-xl flex items-center gap-4 transform active:scale-95 transition-all"
        >
          <span>تواصل عبر الواتساب</span>
          <ChevronLeft size={28} />
        </button>
      </div>
    </motion.div>
  );

  const RenderHotels = () => {
    const REGIONS = [
      { id: 'gcc', title: "دول الخليج", icon: Hotel },
      { id: 'arab', title: "الدول العربية", icon: Map },
      { id: 'europe', title: "دول اوروبا", icon: Sun },
      { id: 'sa', title: "اميركا الجنوبية", icon: Ship },
      { id: 'na', title: "اميركا الشمالية", icon: Plane },
      { id: 'asia', title: "اسيا", icon: Calendar },
      { id: 'africa', title: "افريقيا", icon: Smartphone },
      { id: 'australia', title: "استراليا", icon: Users },
    ];

    return (
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        className="max-w-7xl mx-auto px-4 pt-32 pb-20"
      >
        <div className="flex justify-start mb-8">
          <button 
            onClick={() => setCurrentPage("home")}
            className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100 text-[#351e60] font-black hover:bg-slate-50 transition-all"
          >
            <ChevronLeft size={20} className="rotate-180" />
            <span>العودة للرئيسية</span>
          </button>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-[#351e60] mb-4">احجز فندقك أو شقتك</h2>
          <p className="text-slate-500 font-bold">اختر الوجهة التي تريد البحث فيها</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {REGIONS.map((region) => (
            <motion.button
              key={region.id}
              whileHover={{ y: -10, scale: 1.05 }}
              onClick={() => { setHotelRegion(region.title); setCurrentPage("whatsapp_redirect"); }}
              className="bg-white p-8 rounded-[40px] shadow-xl border border-slate-100 flex flex-col items-center gap-4 group"
            >
              <div className="bg-slate-50 p-6 rounded-3xl text-[#f39c12] group-hover:bg-[#f39c12] group-hover:text-white transition-all transform group-hover:rotate-12">
                <region.icon size={40} />
              </div>
              <span className="text-xl font-black text-[#351e60]">{region.title}</span>
            </motion.button>
          ))}
        </div>
      </motion.div>
    );
  };

  const RenderWhatsAppRedirect = () => (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="max-w-7xl mx-auto px-4 pt-32 pb-20 text-center"
    >
      <div className="flex justify-start mb-8">
        <button 
          onClick={() => { setCurrentPage("home"); setHotelRegion(null); }}
          className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100 text-[#351e60] font-black hover:bg-slate-50 transition-all"
        >
          <ChevronLeft size={20} className="rotate-180" />
          <span>العودة للرئيسية</span>
        </button>
      </div>

      <div className="bg-white p-20 rounded-[50px] shadow-3xl border border-slate-100">
        <motion.div 
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
          className="text-[#27ae60] mb-8 flex justify-center"
        >
          <Smartphone size={100} />
        </motion.div>
        <h2 className="text-4xl font-black text-[#351e60] mb-6">سيتم تحويلك للواتساب</h2>
        <p className="text-xl text-slate-500 mb-12 font-bold leading-relaxed">
          {hotelRegion ? `لقد اخترت البحث في: ${hotelRegion}` : "لإتمام الحجز واستقبال العروض الحصرية"}
          <br />
          اضغط على الزر أدناه لبدء المحادثة
        </p>
        <button 
          onClick={() => { openWhatsApp(); setHotelRegion(null); }}
          className="bg-[#27ae60] text-white px-16 py-6 rounded-3xl font-black text-2xl shadow-xl hover:scale-105 transition-all flex items-center gap-4 mx-auto"
        >
          <span>افتح الواتساب الآن</span>
          <ChevronLeft size={28} />
        </button>
      </div>
    </motion.div>
  );

  const RenderPlanTrip = () => (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      className="max-w-7xl mx-auto px-4 pt-32 pb-20"
    >
      <div className="flex justify-start mb-12">
        <button 
          onClick={() => setCurrentPage("home")}
          className="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl shadow-sm border border-slate-100 text-[#351e60] font-black hover:bg-slate-50 transition-all"
        >
          <ChevronLeft size={20} className="rotate-180" />
          <span>العودة للرئيسية</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-right space-y-8">
          <h2 className="text-5xl font-black text-[#351e60] leading-tight">خطط لرحلتك <br /><span className="text-[#f39c12]">بلمسة احترافية</span></h2>
          <p className="text-xl text-slate-600 leading-relaxed font-medium bg-white p-8 rounded-[30px] border-r-8 border-[#3498db] shadow-lg">
            اجعل رحلتك القادمة ذكرى لا تُنسى. فريقنا المتخصص يساعدك في اختيار أفضل المسارات، الفنادق، والأنشطة التي تناسب شغفك وميزانيتك.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-slate-100 p-6 rounded-3xl text-right">
              <Sun className="text-[#f39c12] mb-3" />
              <h4 className="font-black text-[#351e60] mb-1">أفضل التوقيتات</h4>
              <p className="text-xs text-slate-500 font-bold">نخبرك بأفضل وقت لزيارة وجهتك</p>
            </div>
            <div className="bg-slate-100 p-6 rounded-3xl text-right">
              <Map className="text-[#3498db] mb-3" />
              <h4 className="font-black text-[#351e60] mb-1">مسارات حصرية</h4>
              <p className="text-xs text-slate-500 font-bold">أماكن لا يعرفها السياح العاديون</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-12 rounded-[50px] shadow-3xl border border-slate-100">
          <h3 className="text-2xl font-black text-[#351e60] mb-8 text-center">صف لنا رحلة أحلامك</h3>
          <div className="space-y-6">
            <div className="relative group">
              <textarea 
                placeholder="اكتب هنا تفاصيل رحلتك، الوجهة، عدد الأشخاص، وأي رغبات خاصة..."
                className="w-full h-64 bg-slate-50 border-2 border-transparent focus:border-[#f39c12] rounded-[30px] p-8 text-right outline-none font-bold text-slate-600 transition-all placeholder:text-slate-300"
              />
              <div className="absolute top-6 left-6 text-slate-300 group-focus-within:text-[#f39c12]">
                <Map size={24} />
              </div>
            </div>
            <button 
              onClick={openWhatsApp}
              className="w-full bg-[#f39c12] text-white py-6 rounded-[30px] font-black text-xl shadow-xl transform active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              <span>أرسل وأكمل التخطيط عبر الواتساب</span>
              <Smartphone size={24} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-slate-50 font-arabic selection:bg-[#f39c12] selection:text-white">
      {/* Header - Fixed */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Navigation */}
          <div className="flex items-center gap-8">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 lg:hidden hover:bg-slate-100 rounded-xl transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
            <nav className="hidden lg:flex items-center gap-8">
              <button onClick={() => setCurrentPage("home")} className={`transition-all font-bold border-b-2 pb-1 ${currentPage === 'home' ? 'text-[#4a2e82] border-[#f39c12]' : 'text-slate-600 border-transparent hover:text-[#4a2e82]'}`}>الرئيسية</button>
              <button className="text-slate-600 hover:text-[#4a2e82] transition-all font-bold border-b-2 border-transparent hover:border-[#f39c12] pb-1">من نحن</button>
              <button 
                onClick={openWhatsApp}
                className="bg-[#27ae60] text-white px-5 py-2 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-all"
              >
                <Smartphone size={18} />
                <span>تواصل معنا</span>
              </button>
            </nav>
          </div>

          {/* Logo and Text */}
          <div className="flex items-center gap-4 cursor-pointer" onClick={() => setCurrentPage("home")}>
            <div className="hidden sm:flex flex-col items-end translate-y-[-2px]">
              <span className="text-xl md:text-2xl font-black text-[#4a2e82] leading-none">Bfly <span className="text-[#f39c12]">لحجوزات السفر</span></span>
              <span className="text-[10px] font-black text-slate-400 tracking-[0.2em] mt-1 uppercase">Travel Booking</span>
            </div>
            <LogoComponent className="w-16 h-16" />
          </div>
          
        </div>
      </header>

      {/* Main Content Area */}
      <main>
        {currentPage === "home" && <RenderHome />}
        {currentPage === "flights" && <RenderFlights />}
        {currentPage === "hotels" && <RenderHotels />}
        {currentPage === "plan" && <RenderPlanTrip />}
        {currentPage === "whatsapp_redirect" && <RenderWhatsAppRedirect />}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 text-right">
            <div className="col-span-1 md:col-span-1 border-l border-slate-50 pr-4">
              <div className="flex items-center gap-4 justify-end mb-8">
                <div className="text-right">
                  <span className="text-3xl font-black text-[#351e60] leading-none mb-1">Bfly</span>
                  <div className="h-1 w-full bg-[#f39c12] rounded-full"></div>
                </div>
                <LogoComponent className="w-16 h-16" />
              </div>
              <p className="text-slate-500 leading-relaxed font-medium">
                بوابتك الأولى لجميع الحجوزات السياحية بخدمات تليق بك. نحن نهتم بكل تفاصيل رحلتك.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-black text-[#351e60] mb-8">الدعم الفني</h4>
              <ul className="space-y-4 text-slate-500 font-bold">
                <li><button onClick={openWhatsApp} className="hover:text-[#f39c12] transition-colors flex items-center gap-2 justify-end w-full text-right">
                  مركز المساعدة (واتساب) <Smartphone size={16} className="text-[#27ae60]" />
                </button></li>
                <li><button onClick={openWhatsApp} className="hover:text-[#f39c12] transition-colors">تواصل معنا</button></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-black text-[#351e60] mb-8">كن أول من يعلم</h4>
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  window.location.href = "mailto:info@bflys.net";
                }}
                className="bg-slate-50 p-2 rounded-2xl flex border border-slate-100 shadow-sm"
              >
                <button type="submit" className="bg-[#351e60] text-white px-6 py-3 rounded-xl font-bold hover:bg-[#4a2e82] transition-all">اشترك</button>
                <input type="email" placeholder="بريدك الإلكتروني" required className="flex-1 bg-transparent px-4 text-right border-none outline-none font-medium text-slate-600" />
              </form>
              <p className="mt-3 text-xs text-slate-400 font-bold">سيصل اشتراكك إلى: info@bflys.net</p>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8 text-slate-400 font-semibold text-sm">
            <div className="flex items-center gap-6">
              <a 
                href="https://instagram.com/trv7701" 
                target="_blank" 
                rel="noreferrer" 
                className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#e1306c] hover:text-white transition-all shadow-sm hover:shadow-pink-100 hover:-translate-y-1"
                title="Instagram"
              >
                <div className="w-6 h-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
              </a>
              <a 
                href="https://x.com/bfly100" 
                target="_blank" 
                rel="noreferrer" 
                className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-black hover:text-white transition-all shadow-sm hover:shadow-slate-200 hover:-translate-y-1"
                title="X (Twitter)"
              >
                <div className="w-5 h-5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"/><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/></svg>
                </div>
              </a>
              <a 
                href="https://snapchat.com/add/trv770" 
                target="_blank" 
                rel="noreferrer" 
                className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-[#fffc00] hover:text-black transition-all shadow-sm hover:shadow-yellow-100 hover:-translate-y-1"
                title="Snapchat"
              >
                <div className="w-6 h-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3c-1.3 0-2 .6-2.5 1.5-1-.2-1.4.1-1.5.5A2 2 0 0 1 7 6l-1.5 1.5S4 9 4 11s2 3 2 4c0 1-1.5 2-1.5 2S4 18 4 19s2 1 4 1c0 0 .5 2 4 2s4-2 4-2c2 0 4-1 4-2s-.5-1-1.5-2-1.5-1-1.5-2c0-1 2-2 2-4s-1.5-3.5-1.5-3.5L18 7.5A2 2 0 0 1 17 6c-.1-.4-.5-.7-1.5-.5-.5-.9-1.2-1.5-2.5-1.5z"></path></svg>
                </div>
              </a>
              <a 
                href="https://tiktok.com/@bfly1000" 
                target="_blank" 
                rel="noreferrer" 
                className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-black hover:text-white transition-all shadow-sm hover:shadow-slate-200 hover:-translate-y-1"
                title="TikTok"
              >
                <div className="w-6 h-6">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
                </div>
              </a>
            </div>
            <p className="font-bold text-slate-400">جميع الحقوق محفوظة © {new Date().getFullYear()} Bfly Luxury Booking</p>
          </div>
        </div>
      </footer>

      {/* Floating Support Button - WhatsApp Focused */}
      <motion.button
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        onClick={openWhatsApp}
        className="fixed bottom-10 left-10 w-20 h-20 bg-[#27ae60] text-white rounded-[32px] shadow-[0_20px_50px_rgba(39,174,96,0.4)] flex items-center justify-center z-50 border-4 border-white transform hover:rotate-12 transition-transform group"
      >
        <div className="relative">
          <Smartphone size={36} />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-black"
          >
            1
          </motion.div>
        </div>
      </motion.button>
    </div>
  );
}

