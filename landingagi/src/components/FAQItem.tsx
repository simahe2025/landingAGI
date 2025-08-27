import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

export function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200 min-h-[44px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg text-gray-900 pr-4">
          {question}
        </span>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          )}
        </div>
      </button>
      
      {isOpen && (
        <div className="pb-6 pl-0">
          <p className="text-gray-600 leading-relaxed text-base">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export function FAQSection() {
  const faqs = [
    {
      question: '你们支持上门吗？',
      answer: '支持，季华园3-5公里内可上门，费用¥30-60，现场检测当场报价。包括祖庙、同济路、张槎、石湾等区域。'
    },
    {
      question: '苹果Mac能修吗？',
      answer: '支持常见系统/硬件问题，包括macOS系统重装、硬件故障诊断等，需现场评估备件周期。'
    },
    {
      question: '数据恢复能保证吗？',
      answer: '无法100%保证，先评估签署保密协议与风险告知，再决定是否尝试。成功率依据损坏程度而定。'
    },
    {
      question: '检测费用如何收取？',
      answer: '到店检测完全免费，当场故障诊断并报价，只有同意维修才收费，检测不收任何费用。'
    },
    {
      question: '硬件升级价格如何计算？',
      answer: 'SSD、内存等硬件按实际采购价收费，不加价，另收工时费¥100，包含安装调试和数据迁移。'
    },
    {
      question: '营业时间是什么时候？',
      answer: '正常营业时间：9:00-12:00，14:00-17:00，特殊情况可按需调整，建议提前电话预约。'
    },
    {
      question: '是否提供发票？',
      answer: '提供正规发票，个人可开普通发票，企业可开增值税发票，请在服务时说明开票需求。'
    },
    {
      question: '如何保障数据安全？',
      answer: '所有涉及数据的服务都会签署保密协议，严格保护客户隐私，技师均有职业操守培训。'
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* 标题区域 */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl text-gray-900 mb-4">
            常见问题
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            这里整理了客户最关心的问题，如果您还有其他疑问，欢迎随时联系我们的客服
          </p>
        </div>

        {/* FAQ列表 */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="px-6 md:px-8">
              {faqs.map((faq, index) => (
                <FAQItem key={index} {...faq} />
              ))}
            </div>
          </div>
        </div>

        {/* 联系客服 */}
        <div className="text-center mt-12 md:mt-16">
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl text-gray-900 mb-4">
              还有其他问题？
            </h3>
            <p className="text-gray-600 mb-6">
              我们的客服团队随时为您解答疑问，提供专业的咨询服务
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:11323452123" 
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors min-h-[44px]"
              >
                电话咨询
              </a>
              <button className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors min-h-[44px]">
                微信咨询
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}