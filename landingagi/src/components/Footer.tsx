import { Phone, Mail, MapPin, Clock, Smartphone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* 主要内容区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* 公司信息 */}
          <div className="space-y-4">
            <h3 className="text-xl text-white mb-4">
              优选家政
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              专业的家政维修服务提供商，致力于为客户提供优质、便捷、可靠的家庭服务解决方案。
            </p>
            
            {/* 资质认证 */}
            <div className="space-y-2">
              <p className="text-xs text-gray-400">资质认证</p>
              <div className="flex gap-2">
                <span className="text-xs bg-gray-800 px-2 py-1 rounded">营业执照</span>
                <span className="text-xs bg-gray-800 px-2 py-1 rounded">服务许可</span>
              </div>
            </div>
          </div>

          {/* 服务项目 */}
          <div className="space-y-4">
            <h4 className="text-lg text-white">服务项目</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors">家电维修</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">深度清洁</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">水管维修</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">电路维修</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">家具安装</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">保洁托管</a></li>
            </ul>
          </div>

          {/* 快速链接 */}
          <div className="space-y-4">
            <h4 className="text-lg text-white">快速链接</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#services" className="hover:text-white transition-colors">服务项目</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">价格套餐</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">客户评价</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">常见问题</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">联系我们</a></li>
              <li><a href="#" className="hover:text-white transition-colors">服务条款</a></li>
            </ul>
          </div>

          {/* 联系信息 */}
          <div className="space-y-4">
            <h4 className="text-lg text-white">联系方式</h4>
            <div className="space-y-3">
              {/* NAP信息 */}
              <div className="space-y-2">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-300">24小时服务热线</p>
                    <a href="tel:400-123-4567" className="text-white hover:text-blue-400 transition-colors">
                      400-123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Smartphone className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-300">微信咨询</p>
                    <p className="text-white">youxuan_service</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-300">服务区域</p>
                    <p className="text-white">北京市六环内</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-0.5 text-gray-400 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-300">营业时间</p>
                    <p className="text-white">8:00-20:00 全年无休</p>
                  </div>
                </div>
              </div>

              {/* 微信二维码 */}
              <div className="pt-4 border-t border-gray-700">
                <p className="text-sm text-gray-300 mb-2">微信扫码咨询</p>
                <div className="w-20 h-20 bg-gray-800 rounded border-2 border-gray-600 flex items-center justify-center">
                  <Smartphone className="w-8 h-8 text-gray-500" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部版权信息 */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              <p>© 2024 优选家政. 保留所有权利.</p>
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">隐私政策</a>
              <a href="#" className="hover:text-white transition-colors">服务条款</a>
              <a href="#" className="hover:text-white transition-colors">用户协议</a>
              <a href="#" className="hover:text-white transition-colors">退款政策</a>
            </div>
          </div>

          {/* 备案信息 */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              京ICP备XXXXXXXX号-1 | 京公网安备XXXXXXXXXX号
            </p>
          </div>
        </div>
      </div>

      {/* 快速联系悬浮按钮 - 移动端显示 */}
      <div className="fixed bottom-6 right-6 md:hidden z-50">
        <a
          href="tel:400-123-4567"
          className="bg-primary hover:bg-primary/90 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center min-w-[56px] min-h-[56px]"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </footer>
  );
}