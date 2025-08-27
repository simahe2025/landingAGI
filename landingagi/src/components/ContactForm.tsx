import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    address: '',
    description: '',
    preferredTime: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里处理表单提交逻辑
    console.log('Form submitted:', formData);
    alert('预约提交成功！我们会在30分钟内联系您确认服务时间。');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 标题区域 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            联系我们
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            提交您的服务需求，我们将在30分钟内联系您，为您安排最合适的服务时间
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* 联系信息 */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">联系方式</CardTitle>
                <CardDescription>
                  多种联系方式，随时为您提供服务
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-base text-gray-900 mb-1">24小时服务热线</h4>
                    <a href="tel:400-123-4567" className="text-primary hover:underline text-lg">
                      400-123-4567
                    </a>
                    <p className="text-sm text-gray-500 mt-1">紧急服务随时拨打</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-base text-gray-900 mb-1">微信咨询</h4>
                    <p className="text-lg text-gray-700">youxuan_service</p>
                    <p className="text-sm text-gray-500 mt-1">工作时间内即时回复</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-base text-gray-900 mb-1">服务区域</h4>
                    <p className="text-gray-700">北京市六环内所有区域</p>
                    <p className="text-sm text-gray-500 mt-1">部分郊区需确认服务范围</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-base text-gray-900 mb-1">营业时间</h4>
                    <p className="text-gray-700">8:00 - 20:00</p>
                    <p className="text-sm text-gray-500 mt-1">全年无休，节假日正常服务</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 微信二维码区域 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">微信扫码咨询</CardTitle>
                <CardDescription>
                  扫描二维码添加客服微信，获取更多服务信息
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="w-48 h-48 bg-gray-100 rounded-lg mx-auto flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gray-300 rounded-lg mx-auto mb-2"></div>
                    <p className="text-sm text-gray-500">微信二维码</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-4">
                  扫描添加客服微信：youxuan_service
                </p>
              </CardContent>
            </Card>
          </div>

          {/* 预约表单 */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">在线预约</CardTitle>
              <CardDescription>
                填写以下信息，我们将尽快与您联系安排服务
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-700 mb-2 block">姓名 *</label>
                    <Input
                      placeholder="请输入您的姓名"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-700 mb-2 block">联系电话 *</label>
                    <Input
                      type="tel"
                      placeholder="请输入您的手机号"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm text-gray-700 mb-2 block">邮箱地址</label>
                  <Input
                    type="email"
                    placeholder="请输入您的邮箱（选填）"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-700 mb-2 block">服务类型 *</label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="请选择您需要的服务" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="appliance">家电维修</SelectItem>
                      <SelectItem value="cleaning">深度清洁</SelectItem>
                      <SelectItem value="plumbing">水管维修</SelectItem>
                      <SelectItem value="electrical">电路维修</SelectItem>
                      <SelectItem value="furniture">家具安装</SelectItem>
                      <SelectItem value="housekeeping">保洁托管</SelectItem>
                      <SelectItem value="other">其他服务</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm text-gray-700 mb-2 block">服务地址 *</label>
                  <Input
                    placeholder="请输入详细的服务地址"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-700 mb-2 block">首选服务时间</label>
                  <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="请选择您的首选时间" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">上午 (8:00-12:00)</SelectItem>
                      <SelectItem value="afternoon">下午 (12:00-18:00)</SelectItem>
                      <SelectItem value="evening">晚上 (18:00-20:00)</SelectItem>
                      <SelectItem value="urgent">紧急服务</SelectItem>
                      <SelectItem value="flexible">时间灵活</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm text-gray-700 mb-2 block">问题描述</label>
                  <Textarea
                    placeholder="请详细描述您遇到的问题或服务需求..."
                    rows={4}
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                  />
                </div>

                <Button type="submit" className="w-full min-h-[44px]">
                  <Send className="w-4 h-4 mr-2" />
                  提交预约
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  提交后我们将在30分钟内联系您确认服务详情
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}