import React from 'react'
import { useAuthStore } from "../store/useAuthStore"

const ProfilePage = () => {
  useAuthStore()
  return <div>ProfilePage</div>
    
  
}

export default ProfilePage