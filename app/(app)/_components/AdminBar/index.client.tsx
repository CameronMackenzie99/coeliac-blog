'use client'

import React, { useState } from 'react'
// import { PayloadAdminBar, PayloadAdminBarProps, PayloadMeUser } from 'payload-admin-bar'

const Title: React.FC = () => <span>Dashboard</span>

export const AdminBarClient: React.FC<PayloadAdminBarProps> = props => {
  const [user, setUser] = useState<PayloadMeUser>()

  return (
    <div>
      <PayloadAdminBar
        {...props}
        logo={<Title />}
        cmsURL={process.env.NEXT_PUBLIC_PAYLOAD_URL}
        onPreviewExit={async () => {
          await fetch(`/api/exit-preview`)
          window.location.reload()
        }}
        onAuthChange={setUser}
        style={{
          position: 'relative',
          zIndex: 'unset',
          padding: 0,
          backgroundColor: 'gray',
        }}
      />
    </div>
  )
}
