import { Phone, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* 顶部联系栏 - 桌面显示 */}
        <div className="hidden md:flex justify-between items-center py-2 border-b border-border">
          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground">营业时间：9:00-12:00 14:00-17:00</span>
            <span className="text-sm text-muted-foreground">佛山禅城区季华园</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:11323452123" className="flex items-center gap-2 text-sm hover:text-primary">
              <Phone className="w-4 h-4" />
              113-2345-2123
            </a>
          </div>
        </div>

        {/* 主导航 */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-8">
            <h1 className="text-xl md:text-2xl text-primary">
              LandingAGI电脑快修
            </h1>
            
            {/* 桌面导航 */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#services" className="text-foreground hover:text-primary transition-colors">服务项目</a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors">价格透明</a>
              <a href="#cases" className="text-foreground hover:text-primary transition-colors">成功案例</a>
              <a href="#area" className="text-foreground hover:text-primary transition-colors">服务范围</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">联系预约</a>
            </nav>
          </div>

          {/* 桌面端CTA按钮 */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="outline" className="min-h-[44px]">
              在线咨询
            </Button>
            <Button className="min-h-[44px]">
              <Phone className="w-4 h-4 mr-2" />
              立即预约
            </Button>
          </div>

          {/* 移动端按钮 */}
          <div className="flex md:hidden items-center gap-2">
            <Button variant="outline" size="sm" className="min-h-[44px]">
              <Phone className="w-4 h-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              className="min-h-[44px] min-w-[44px]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* 移动端导航菜单 */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border pt-4">
            <div className="flex flex-col gap-4">
              <a href="#services" className="py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>服务项目</a>
              <a href="#pricing" className="py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>价格透明</a>
              <a href="#cases" className="py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>成功案例</a>
              <a href="#area" className="py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>服务范围</a>
              <a href="#contact" className="py-2 text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>联系预约</a>
              <div className="pt-4 border-t border-border">
                <Button className="w-full min-h-[44px]">
                  <Phone className="w-4 h-4 mr-2" />
                  立即预约
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}