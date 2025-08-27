import { MapPin, Navigation, Phone } from 'lucide-react';
import { Button } from './ui/button';

export function MapBlock() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* 标题区域 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            服务范围
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            覆盖佛山市禅城区季华园周边3-5公里，为您提供便捷的到店/上门服务
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* 地图区域 */}
          <div className="relative">
            <div className="bg-gray-100 rounded-2xl h-64 md:h-80 lg:h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">服务区域地图</p>
                <p className="text-sm text-gray-400 mt-2">
                  佛山禅城区季华园周边3-5公里
                </p>
              </div>
            </div>
            
            {/* 覆盖区域标识点 */}
            <div className="absolute top-6 left-6 bg-white shadow-lg rounded-lg p-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">服务覆盖区域</span>
              </div>
            </div>
          </div>

          {/* 服务区域信息 */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl text-gray-900 mb-4">
                本地工程师，快速响应
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                我们的门店位于佛山市禅城区季华园，覆盖周边3-5公里服务范围，30分钟快速响应，提供到店快修和上门服务。
              </p>
            </div>

            {/* 主要服务区域 */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="text-base text-gray-900">主要服务区域</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    朝阳区
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    海淀区
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    西城区
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    东城区
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="text-base text-gray-900">扩展服务区域</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    丰台区
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    石景山区
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    通州区
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    大兴区
                  </li>
                </ul>
              </div>
            </div>

            {/* 响应时间 */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h4 className="text-base text-gray-900 mb-3">服务响应时间</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl text-primary mb-1">30分钟</div>
                  <div className="text-xs text-gray-600">预约响应</div>
                </div>
                <div>
                  <div className="text-2xl text-primary mb-1">1小时</div>
                  <div className="text-xs text-gray-600">紧急上门</div>
                </div>
              </div>
            </div>

            {/* 导航按钮 */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="min-h-[44px]">
                <Navigation className="w-4 h-4 mr-2" />
                高德地图导航
              </Button>
              <Button variant="outline" className="min-h-[44px]">
                <Navigation className="w-4 h-4 mr-2" />
                百度地图导航
              </Button>
            </div>

            {/* 联系电话 */}
            <div className="border-t border-gray-200 pt-6">
              <p className="text-gray-600 mb-3">
                确认服务区域或有疑问？
              </p>
              <a 
                href="tel:400-123-4567" 
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <Phone className="w-4 h-4" />
                400-123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}