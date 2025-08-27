import { Phone, Star, Clock, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-white/20"></div>
      
      <div className="container mx-auto px-4 py-12 md:py-20 relative">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* 文字内容 */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl text-gray-900 leading-tight">
                禅城区·季华园电脑维修
                <br />
                <span className="text-blue-600">30分钟响应</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                不开机/蓝屏、系统重装、SSD升级、数据恢复、网络打印机故障；到店与上门均可，本地工程师快速解决
              </p>
            </div>

            {/* 特色标签 */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2">
                <Clock className="w-5 h-5 text-green-500" />
                <span className="text-sm">30分钟响应</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-sm">本地工程师</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 rounded-full px-4 py-2">
                <Shield className="w-5 h-5 text-blue-500" />
                <span className="text-sm">数据保密</span>
              </div>
            </div>

            {/* CTA按钮 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="min-h-[48px] text-base px-8">
                <Phone className="w-5 h-5 mr-2" />
                立即致电预约
              </Button>
              <Button variant="outline" size="lg" className="min-h-[48px] text-base px-8">
                到店快修/上门服务
              </Button>
            </div>

            {/* 联系信息 */}
            <div className="bg-white/90 rounded-lg p-4 md:p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">联系电话/微信</p>
                  <a href="tel:11323452123" className="text-xl text-primary hover:underline">
                    113-2345-2123
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">门店地址</p>
                  <p className="text-xl text-primary">佛山禅城区季华园</p>
                </div>
              </div>
            </div>
          </div>

          {/* 图片区域 */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576613109753-27804de2cba8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHJlcGFpciUyMHRlY2huaWNpYW4lMjB3b3JraW5nfGVufDF8fHx8MTc1NjI3Mzc5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="专业电脑维修工程师在工作"
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
              />
              
              {/* 浮动卡片 */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">成功修复</p>
                    <p className="text-2xl text-primary">3,000+</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">客户满意度</p>
                    <p className="text-2xl text-primary">98.5%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 装饰元素 */}
            <div className="hidden lg:block absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full"></div>
            <div className="hidden lg:block absolute -bottom-4 -left-4 w-16 h-16 bg-green-500/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}