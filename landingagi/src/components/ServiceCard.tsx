import { LucideIcon } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  price: string;
  originalPrice?: string;
  image: string;
  alt: string;
}

export function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  price, 
  originalPrice, 
  image, 
  alt 
}: ServiceCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
      {/* 服务图片 */}
      <div className="relative overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={alt}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        {originalPrice && (
          <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            限时优惠
          </div>
        )}
      </div>

      <CardHeader className="pb-4">
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* 服务特点 */}
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>

        {/* 价格信息 */}
        <div className="flex items-baseline gap-2 pt-2">
          <span className="text-2xl text-primary">{price}</span>
          {originalPrice && (
            <span className="text-lg text-gray-400 line-through">{originalPrice}</span>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <Button className="w-full min-h-[44px] group-hover:bg-primary/90 transition-colors">
          立即预约
        </Button>
      </CardFooter>
    </Card>
  );
}