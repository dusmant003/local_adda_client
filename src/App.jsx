import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LayOut from './assets/components/LayOut/LayOut'
import Home from './assets/pages/Home/Home'

const App = () => {
  return (
    <Routes>
      {/* Public Layout Routes */}
      <Route path="/" element={<LayOut />}>
        <Route index element={<Home />} />
      </Route>

      {/* Admin Panel Routes under AdminLayout */}
      {/* <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AdminDashBoard />} />
        <Route path="profile" element={<ManageProfile />} />
        <Route path="staff" element={<ManageStaff />} />
        <Route path="events" element={<ManageEvent />} />
        <Route path="news" element={<ManageNewsNotification />} />
        <Route path="gallery" element={<ManageGallery />} />
        <Route path="help" element={<Help />} />
        <Route path="my-profile" element={<MyProfile />} />
      </Route> */}
    </Routes>
  )
}

export default App