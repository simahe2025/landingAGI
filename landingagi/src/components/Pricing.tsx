import { PriceCard } from './PriceCard';

export function Pricing() {
  const pricingPlans = [
    {
      title: '基础服务',
      description: '单次维修服务，透明定价',
      price: '¥0',
      period: '检测费',
      features: [
        '到店检测完全免费',
        '当场故障诊断报价',
        '系统重装 ¥80-120',
        '清灰除尘 ¥80-150',
        '同意维修再收费',
        '明码标价无隐藏费用'
      ],
      isRecommended: false
    },
    {
      title: '硬件升级',
      description: 'SSD/内存升级，性能提升',
      price: '硬件实价',
      originalPrice: '',
      period: '+¥100工时',
      features: [
        'SSD固态硬盘升级',
        '内存条扩容安装',
        '含系统数据迁移',
        '硬件按实际成本收费',
        '工时费仅收¥100',
        '升级后性能测试'
      ],
      isPopular: true
    },
    {
      title: '上门服务',
      description: '季华园3-5公里内可上门',
      price: '¥30-60',
      originalPrice: '',
      period: '+维修费',
      features: [
        '季华园3公里内上门',
        '现场检测当场报价',
        '上门费¥30-60',
        '维修费用另计',
        '无法修复不收维修费',
        '数据保密协议保障'
      ],
      isRecommended: true
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* 标题区域 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            透明定价，明码标价
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            检测免费，维修才收费，硬件按实价，无隐藏费用，提供正规发票
          </p>
        </div>

        {/* 价格卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <PriceCard key={index} {...plan} />
          ))}
        </div>

        {/* 补充说明 */}
        <div className="mt-12 md:mt-16">
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl text-gray-900 mb-4 text-center">
              服务说明
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">💰</span>
                </div>
                <h4 className="text-sm text-gray-900 mb-2">收费说明</h4>
                <p className="text-xs text-gray-600">到店检测免费，硬件按实价，工时费透明</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">⏰</span>
                </div>
                <h4 className="text-sm text-gray-900 mb-2">营业时间</h4>
                <p className="text-xs text-gray-600">9:00-12:00 14:00-17:00（可按需调整）</p>
              </div>
              <div className="text-center">
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">🔒</span>
                </div>
                <h4 className="text-sm text-gray-900 mb-2">数据保密</h4>
                <p className="text-xs text-gray-600">签署数据保密协议，保护客户隐私</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl">📞</span>
                </div>
                <h4 className="text-sm text-gray-900 mb-2">联系方式</h4>
                <p className="text-xs text-gray-600">电话/微信：113-2345-2123</p>
              </div>
            </div>
          </div>
        </div>

        {/* 底部CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-lg text-gray-600 mb-6">
            还有疑问？联系我们获取专属服务方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:11323452123" 
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors min-h-[44px]"
            >
              立即咨询
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors min-h-[44px]"
            >
              获取报价
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}