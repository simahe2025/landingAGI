import { AlertTriangle, RefreshCw, HardDrive, Wifi, Database, Building } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export function Services() {
  const services = [
    {
      icon: AlertTriangle,
      title: '电脑不开机/蓝屏排错',
      description: '快速诊断启动故障，蓝屏死机等系统问题',
      features: [
        '主板、电源、内存故障检测',
        '蓝屏死机原因排查',
        '硬件兼容性问题解决',
        '现场检测当场报价'
      ],
      price: '检测费¥0',
      originalPrice: '',
      image: 'https://images.unsplash.com/photo-1562136935-2c010ce547b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMG5vdCUyMHN0YXJ0aW5nJTIwcmVwYWlyfGVufDF8fHx8MTc1NjI3Mzg2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: '电脑故障诊断维修'
    },
    {
      icon: RefreshCw,
      title: '系统重装与环境配置',
      description: '支持Windows/macOS系统重装及软件环境配置',
      features: [
        'Windows 10/11 正版系统',
        'macOS 系统重装与恢复',
        '驱动程序自动安装',
        '常用软件配置优化'
      ],
      price: '¥80-120',
      image: 'https://images.unsplash.com/photo-1689465572230-99b497b6402d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx3aW5kb3dzJTIwaW5zdGFsbGF0aW9uJTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzU2MjczODYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: '系统重装服务'
    },
    {
      icon: HardDrive,
      title: 'SSD升级/内存扩容/散热清灰',
      description: '硬件升级服务，提升电脑运行速度与稳定性',
      features: [
        'SSD固态硬盘升级安装',
        '内存条扩容升级',
        'CPU风扇清灰维护',
        '硬件价格透明+工时费'
      ],
      price: '硬件实价+¥100',
      image: 'https://images.unsplash.com/photo-1662348316292-e995266081b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNzc2QlMjB1cGdyYWRlJTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzU2MjczODYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: 'SSD和内存升级服务'
    },
    {
      icon: Wifi,
      title: '局域网与打印机故障/上网问题',
      description: '网络连接故障排除，打印机安装配置',
      features: [
        '无线网络连接问题',
        '打印机安装与共享设置',
        '网络打印机配置',
        '局域网共享文件设置'
      ],
      price: '¥80-150',
      image: 'https://images.unsplash.com/photo-1576613109753-27804de2cba8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHJlcGFpciUyMHRlY2huaWNpYW4lMjB3b3JraW5nfGVufDF8fHx8MTc1NjI3Mzc5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: '网络和打印机故障维修'
    },
    {
      icon: Database,
      title: '数据恢复',
      description: '签署保密协议，专业数据恢复服务',
      features: [
        '硬盘数据恢复',
        'U盘/存储卡数据找回',
        '误删文件恢复',
        '签署数据保密协议'
      ],
      price: '按容量评估',
      originalPrice: '',
      image: 'https://images.unsplash.com/photo-1581725645170-9a619a339553?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwcmVjb3ZlcnklMjBoYXJkJTIwZHJpdmV8ZW58MXx8fHwxNzU2MjczODYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: '数据恢复服务'
    },
    {
      icon: Building,
      title: '企业/学校批量维护与保养',
      description: '企业级电脑维护服务，批量处理更优惠',
      features: [
        '批量电脑系统维护',
        '定期清灰保养服务',
        '企业网络环境配置',
        '长期合作价格优惠'
      ],
      price: '批量优惠',
      originalPrice: '',
      image: 'https://images.unsplash.com/photo-1576613109753-27804de2cba8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHJlcGFpciUyMHRlY2huaWNpYW4lMjB3b3JraW5nfGVufDF8fHx8MTc1NjI3Mzc5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      alt: '企业级电脑维护服务'
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 标题区域 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            专业电脑维修服务
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            本地工程师，明码标价，到店快修/上门服务，提供发票，数据保密协议保障
          </p>
        </div>

        {/* 服务卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* 底部CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-lg text-gray-600 mb-6">
            没找到您需要的服务？
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:11323452123" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors min-h-[44px]"
            >
              立即致电咨询
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors min-h-[44px]"
            >
              在线预约
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}