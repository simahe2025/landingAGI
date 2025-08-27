import { Check, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface PriceCardProps {
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  isRecommended?: boolean;
}

export function PriceCard({ 
  title, 
  description, 
  price, 
  originalPrice, 
  period, 
  features, 
  isPopular = false,
  isRecommended = false 
}: PriceCardProps) {
  return (
    <Card className={`relative overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
      isPopular 
        ? 'border-primary shadow-xl scale-105' 
        : 'border-border shadow-lg hover:shadow-xl'
    }`}>
      {/* 推荐标签 */}
      {isPopular && (
        <div className="absolute top-0 left-0 right-0 bg-primary text-white text-center py-2">
          <Badge variant="secondary" className="bg-white/20 text-white border-0">
            <Star className="w-3 h-3 mr-1 fill-current" />
            最受欢迎
          </Badge>
        </div>
      )}

      {isRecommended && !isPopular && (
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
            推荐
          </Badge>
        </div>
      )}

      <CardHeader className={`text-center ${isPopular ? 'pt-12' : 'pt-8'}`}>
        <CardTitle className={`text-xl ${isPopular ? 'text-primary' : 'text-gray-900'}`}>
          {title}
        </CardTitle>
        <CardDescription className="text-base mt-2">
          {description}
        </CardDescription>

        {/* 价格展示 */}
        <div className="mt-6">
          <div className="flex items-baseline justify-center gap-2">
            <span className={`text-4xl ${isPopular ? 'text-primary' : 'text-gray-900'}`}>
              {price}
            </span>
            <span className="text-lg text-gray-500">{period}</span>
          </div>
          {originalPrice && (
            <div className="flex items-center justify-center gap-2 mt-2">
              <span className="text-lg text-gray-400 line-through">{originalPrice}</span>
              <Badge variant="destructive" className="text-xs">
                限时优惠
              </Badge>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="px-6">
        {/* 功能列表 */}
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                isPopular ? 'text-primary' : 'text-green-500'
              }`} />
              <span className="text-sm text-gray-600 leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="px-6 pb-6">
        <Button 
          className={`w-full min-h-[44px] ${
            isPopular 
              ? 'bg-primary hover:bg-primary/90' 
              : 'bg-gray-900 hover:bg-gray-800'
          }`}
        >
          选择套餐
        </Button>
      </CardFooter>
    </Card>
  );
}