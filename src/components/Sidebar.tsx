
import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Receipt, 
  ShoppingBag, 
  TrendingUp, 
  FileText,
  ArrowDownCircle,
  X
} from 'lucide-react';
import { Button } from './ui/button';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'produk', label: 'Produk', icon: Package },
  { id: 'kasir', label: 'Kasir', icon: ShoppingCart },
  { id: 'transaksi', label: 'Transaksi', icon: Receipt },
  { id: 'pembelian', label: 'Pembelian', icon: ShoppingBag },
  { id: 'beban', label: 'Beban & Pengeluaran', icon: ArrowDownCircle },
  { id: 'jurnal', label: 'Jurnal', icon: TrendingUp },
  { id: 'laporan', label: 'Laporan', icon: FileText },
];

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, isOpen = true, onClose }) => {
  const handleMenuClick = (tab: string) => {
    setActiveTab(tab);
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && onClose && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40 animate-fade-in"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside 
        className={`
          fixed md:static inset-y-0 left-0 z-50
          w-64 bg-white shadow-lg h-full flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
          animate-slide-in
        `}
      >
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-800">Finsera</h2>
            <p className="text-sm text-gray-600 mt-1">Finance Nusantara</p>
          </div>
          {onClose && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="md:hidden hover:bg-gray-100"
            >
              <X className="h-5 w-5" />
            </Button>
          )}
        </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id} className="animate-fade-in" style={{ animationDelay: `${menuItems.indexOf(item) * 0.05}s` }}>
                <button
                  onClick={() => handleMenuClick(item.id)}
                  className={`
                    w-full flex items-center px-4 py-3 text-left rounded-lg 
                    transition-all duration-200 hover:bg-gray-50 hover:scale-[1.02]
                    ${activeTab === item.id
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700 font-medium shadow-sm'
                      : 'text-gray-700 hover:text-gray-900'
                    }
                  `}
                >
                  <Icon className={`mr-3 h-5 w-5 transition-transform duration-200 ${
                    activeTab === item.id ? 'text-blue-700 scale-110' : 'text-gray-500'
                  }`} />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      
        <div className="p-4 border-t border-gray-200">
          <div className="text-center">
            <p className="text-xs text-gray-500">© 2024 Finsera</p>
            <p className="text-xs text-gray-400">Finance Nusantara v1.0</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
