import CustomerHeader from '../../components/layout/CustomerHeader'
import CustomerFooter from '../../components/layout/CustomerFooter'

function CustomerLayout({ children, customerName, onLogout }) {
  return (
    <div className="flex min-h-screen flex-col">
      <CustomerHeader customerName={customerName} onLogout={onLogout} />
      <main className="flex-1">{children}</main>
      <CustomerFooter />
    </div>
  )
}

export default CustomerLayout