# Sistem Akuntansi Indonesia

Aplikasi web akuntansi modern yang dirancang khusus untuk membantu usaha kecil dan menengah (UKM) di Indonesia mengelola keuangan mereka dengan mudah dan efisien.

## 📋 Deskripsi Umum

**Sistem Akuntansi Indonesia** adalah platform terintegrasi yang menggabungkan sistem Point of Sale (POS), manajemen inventori, dan pembukuan akuntansi dalam satu aplikasi. Aplikasi ini memudahkan pemilik bisnis untuk mencatat transaksi, mengelola stok, dan menghasilkan laporan keuangan secara real-time.

## 🎯 Tujuan Aplikasi

1. **Mempermudah Pencatatan Keuangan**: Menyediakan antarmuka intuitif untuk mencatat semua transaksi bisnis
2. **Otomasi Pembukuan**: Menghasilkan jurnal akuntansi secara otomatis dari setiap transaksi
3. **Manajemen Stok Real-time**: Memantau persediaan barang dan memberikan peringatan stok minimum
4. **Laporan Keuangan Instan**: Menghasilkan laporan laba rugi, neraca, dan arus kas secara real-time
5. **Efisiensi Operasional**: Mengurangi kesalahan manual dan menghemat waktu dalam proses akuntansi

## ✨ Fitur Utama

### 1. Dashboard 📊
- Ringkasan keuangan real-time (pendapatan, pengeluaran, laba bersih)
- Kartu metrik untuk aset, liabilitas, dan ekuitas
- Visualisasi data menggunakan chart dan grafik
- Status stok produk yang perlu restock

### 2. Manajemen Produk 📦
- CRUD lengkap untuk produk (Create, Read, Update, Delete)
- Informasi detail: nama, kategori, harga jual, harga beli, stok, supplier
- Sistem peringatan stok minimum
- Tracking inventory secara otomatis

### 3. Sistem Kasir (POS) 💳
- Interface point-of-sale yang user-friendly
- Pencarian produk cepat
- Keranjang belanja dengan kalkulasi otomatis
- Multiple metode pembayaran (Tunai, Transfer, Kredit)
- Kalkulasi kembalian otomatis untuk transaksi tunai
- Cetak struk atau invoice

### 4. Transaksi Penjualan 🧾
- Riwayat lengkap semua transaksi penjualan
- Status pembayaran (Lunas/Belum Lunas)
- Detail transaksi per item
- Filter dan pencarian transaksi
- Update stok otomatis saat penjualan

### 5. Pembelian 🛒
- Pencatatan pembelian dari supplier
- Multi-item purchase orders
- Tracking status pembayaran
- Update stok otomatis saat pembelian
- Link ke jurnal akuntansi otomatis

### 6. Beban & Pengeluaran 💰
- Pencatatan berbagai jenis beban operasional
- Kategori: Operasional, Administrasi, Penjualan, Lainnya
- Status pembayaran
- Integrasi otomatis ke jurnal umum

### 7. Jurnal Akuntansi 📚
- Sistem double-entry bookkeeping (debit-kredit)
- Jurnal otomatis dari transaksi, pembelian, dan beban
- Jurnal manual untuk adjustment
- Reference tracking ke dokumen sumber
- Validasi keseimbangan debit-kredit

### 8. Laporan Keuangan 📈
- **Laporan Laba Rugi**: Revenue, COGS, Gross Profit, Operating Expenses, Net Income
- **Neraca**: Aset (Kas, Piutang, Persediaan, Peralatan), Liabilitas, Ekuitas
- **Laporan Arus Kas**: Aktivitas operasi, investasi, dan pendanaan
- Filter berdasarkan periode waktu
- Export ke PDF atau Excel (dapat ditambahkan)

## 🛠 Teknologi yang Digunakan

### Frontend Framework
- **React 18.3.1**: Library JavaScript untuk membangun user interface
- **TypeScript**: Superset JavaScript dengan static typing untuk kode yang lebih aman
- **Vite**: Build tool modern yang cepat untuk development dan production

### UI & Styling
- **Tailwind CSS**: Utility-first CSS framework untuk styling
- **shadcn/ui**: Komponen UI yang dapat dikustomisasi berdasarkan Radix UI
- **Lucide React**: Icon library modern dan konsisten
- **Recharts**: Library untuk visualisasi data (charts dan grafik)

### State Management & Routing
- **React Context API**: Global state management untuk data aplikasi
- **React Router v6**: Client-side routing
- **TanStack Query (React Query)**: Data fetching dan caching

### Form Handling
- **React Hook Form**: Library untuk form management yang performant
- **Zod**: Schema validation untuk TypeScript

### UI Components
- **Radix UI**: Unstyled, accessible components
- **Date-fns**: Library untuk manipulasi tanggal
- **Sonner**: Toast notifications

## 🏗 Arsitektur Aplikasi

### Structure Overview

```
src/
├── components/           # Komponen UI modular
│   ├── Dashboard.tsx    # Halaman utama dengan metrics
│   ├── Kasir.tsx       # POS interface
│   ├── Produk.tsx      # Product management
│   ├── Transaksi.tsx   # Transaction history
│   ├── Pembelian.tsx   # Purchase management
│   ├── Beban.tsx       # Expense tracking
│   ├── Jurnal.tsx      # Journal entries
│   ├── Laporan.tsx     # Financial reports
│   ├── Sidebar.tsx     # Navigation
│   └── ui/             # Reusable UI components (shadcn)
├── contexts/
│   └── AppContext.tsx  # Global state management
├── pages/
│   ├── Index.tsx       # Main app page
│   ├── Auth.tsx        # Authentication (login)
│   └── NotFound.tsx    # 404 page
└── App.tsx             # Root component dengan routing
```

### State Management

**AppContext** mengelola semua state global:
- `products[]`: Array semua produk
- `transactions[]`: Riwayat transaksi penjualan
- `purchases[]`: Riwayat pembelian
- `journalEntries[]`: Entri jurnal akuntansi
- `expenses[]`: Pencatatan beban

**Functions yang tersedia**:
- CRUD operations untuk setiap entity
- `getFinancialSummary()`: Menghitung metrik keuangan
- `getAccountsData()`: Menghitung saldo akun untuk neraca

### Data Flow

```
User Action (Sale/Purchase/Expense)
    ↓
Update State (Add Transaction/Purchase/Expense)
    ↓
Auto-generate Journal Entry (Debit & Credit)
    ↓
Update Product Stock (if applicable)
    ↓
Recalculate Financial Summary
    ↓
Update Dashboard & Reports
```

## 📊 Konsep Akuntansi

### Double-Entry Bookkeeping

Setiap transaksi menghasilkan jurnal dengan debit dan kredit yang seimbang:

**Contoh Penjualan**:
```
Debit: Kas (Asset) = +Rp 100,000
Credit: Pendapatan Penjualan (Revenue) = +Rp 100,000
```

**Contoh Pembelian**:
```
Debit: Persediaan (Asset) = +Rp 50,000
Credit: Kas (Asset) = -Rp 50,000
```

**Contoh Beban**:
```
Debit: Beban Operasional (Expense) = +Rp 10,000
Credit: Kas (Asset) = -Rp 10,000
```

### Rumus Akuntansi

**Persamaan Akuntansi**:
```
Assets = Liabilities + Equity
```

**Laba Rugi (Income Statement)**:
```
Gross Profit = Revenue - COGS (Cost of Goods Sold)
Net Income = Gross Profit - Operating Expenses
```

**Neraca (Balance Sheet)**:
```
Assets:
  - Kas (Cash)
  - Piutang (Accounts Receivable)
  - Persediaan (Inventory)
  - Peralatan (Equipment)

Liabilities:
  - Hutang Usaha (Accounts Payable)
  - Hutang Bank (Bank Loans)

Equity:
  - Modal (Capital) = Assets - Liabilities
```

## 🚀 Quick Start

### Prerequisites

- Node.js & npm installed ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Installation

```bash
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## ⚠️ Important Notes

### Current Data Storage

**⚠️ PENTING**: Aplikasi saat ini menggunakan **in-memory storage** melalui React State:
- Data disimpan dalam browser memory
- Data akan **hilang** saat page di-refresh
- Tidak ada persistensi data

### Recommended Upgrade

**🔄 Solusi**: Enable **Lovable Cloud** untuk mendapatkan:
- ✅ Data persisten (PostgreSQL database)
- ✅ Authentication untuk multi-user
- ✅ Backup otomatis
- ✅ Skalabilitas untuk data besar
- ✅ API untuk integrasi dengan sistem lain

## 🗺 Roadmap

### Short-term
- [ ] Add Database (Lovable Cloud) - Persistensi data
- [ ] Authentication - Multi-user dengan role-based access
- [ ] Export Reports - PDF/Excel export untuk laporan

### Medium-term
- [ ] Multi-Business Support - Mengelola beberapa bisnis
- [ ] Advanced Reporting - Filter custom, perbandingan periode
- [ ] Invoice Generation - Cetak invoice profesional
- [ ] Email Notifications - Alert untuk low stock, unpaid invoices

### Long-term
- [ ] Mobile App - React Native atau PWA
- [ ] API Integration - Connect ke e-commerce platforms
- [ ] Tax Calculation - Otomasi PPh dan PPN
- [ ] Multi-currency Support

## 📱 Deployment

### Deploy with Lovable

1. Click the **Publish** button (top-right on desktop)
2. Choose your deployment settings
3. Click **Update** to deploy frontend changes

### Custom Domain

Connect your custom domain in **Project > Settings > Domains**

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

For questions or support, please visit:
- [Lovable Documentation](https://docs.lovable.dev/)
- [Lovable Discord Community](https://discord.com/channels/1119885301872070706/1280461670979993613)

## 🔗 Links

- **Project URL**: https://lovable.dev/projects/f8a0d32b-db8d-48ba-8a7d-278e761e9e6e
- **Documentation**: https://docs.lovable.dev/

---

**Built with ❤️ using [Lovable](https://lovable.dev)** - The AI-powered app builder
