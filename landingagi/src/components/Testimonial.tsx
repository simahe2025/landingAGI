import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

interface TestimonialProps {
  name: string;
  location: string;
  avatar?: string;
  rating: number;
  comment: string;
  service: string;
  date: string;
}

export function Testimonial({ name, location, avatar, rating, comment, service, date }: TestimonialProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        {/* 引用图标 */}
        <div className="mb-4">
          <Quote className="w-8 h-8 text-primary/20" />
        </div>

        {/* 评分 */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < rating 
                  ? 'text-yellow-400 fill-current' 
                  : 'text-gray-300'
              }`}
            />
          ))}
          <span className="text-sm text-gray-500 ml-2">({rating}.0分)</span>
        </div>

        {/* 评论内容 */}
        <p className="text-gray-700 leading-relaxed mb-6 text-base">
          {comment}
        </p>

        {/* 服务信息 */}
        <div className="mb-4 pb-4 border-b border-gray-100">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">服务项目</span>
            <span className="text-primary">{service}</span>
          </div>
          <div className="flex justify-between items-center text-sm mt-2">
            <span className="text-gray-500">服务时间</span>
            <span className="text-gray-600">{date}</span>
          </div>
        </div>

        {/* 用户信息 */}
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="bg-primary/10 text-primary">
              {name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm text-gray-900">{name}</p>
            <p className="text-xs text-gray-500">{location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function TestimonialsSection() {
  const testimonials = [
    {
      name: '王先生',
      location: '季华园',
      rating: 5,
      comment: '电脑突然蓝屏，师傅很快就诊断出是内存条问题，当场更换解决，收费很合理，服务专业。',
      service: '蓝屏故障排除',
      date: '2024-01-15'
    },
    {
      name: '李女士',
      location: '祖庙',
      rating: 5,
      comment: '系统重装服务很满意，师傅把常用软件都帮我装好了，还教我一些使用技巧，很贴心。',
      service: '系统重装',
      date: '2024-01-12'
    },
    {
      name: '张先生',
      location: '张槎',
      rating: 5,
      comment: 'SSD升级后电脑快了很多，师傅技术专业，数据迁移过程很顺利，没有丢失任何文件。',
      service: 'SSD升级',
      date: '2024-01-10'
    },
    {
      name: '陈女士',
      location: '同济路',
      rating: 4,
      comment: '打印机一直连不上，师傅上门后很快就解决了，还帮我设置了网络共享打印，很方便。',
      service: '打印机故障',
      date: '2024-01-08'
    },
    {
      name: '刘先生',
      location: '石湾',
      rating: 5,
      comment: '硬盘数据恢复成功了，重要的工作文件都找回来了，师傅很专业，还签了保密协议。',
      service: '数据恢复',
      date: '2024-01-05'
    },
    {
      name: '赵女士',
      location: '季华园',
      rating: 5,
      comment: '公司10台电脑批量维护，师傅很负责，系统都重装优化了，价格也给了优惠，很满意。',
      service: '批量维护',
      date: '2024-01-03'
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 标题区域 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            客户真实评价
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            超过3,000台电脑成功修复，98.5%的客户满意度，本地工程师用心服务每一位客户
          </p>
        </div>

        {/* 统计数据 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 md:mb-16">
          <div className="text-center">
            <div className="text-2xl md:text-3xl text-primary mb-2">3,000+</div>
            <div className="text-sm text-gray-600">成功修复</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl text-primary mb-2">98.5%</div>
            <div className="text-sm text-gray-600">客户满意度</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl text-primary mb-2">4.8</div>
            <div className="text-sm text-gray-600">平均评分</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl text-primary mb-2">30min</div>
            <div className="text-sm text-gray-600">响应时间</div>
          </div>
        </div>

        {/* 评价卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>

        {/* 更多评价CTA */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-lg text-gray-600 mb-6">
            查看更多客户评价，了解我们的服务品质
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors min-h-[44px]">
              查看全部评价
            </button>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors min-h-[44px]"
            >
              立即体验服务
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}