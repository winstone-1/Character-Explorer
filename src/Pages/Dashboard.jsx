import { Outlet } from 'react-router-dom'
import Sidebar from '../Components/Sidebar'  
export default function Dashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '1rem' }}>
        <Outlet />
      </main>
    </div>
  )
}