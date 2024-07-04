'use client'

import React, { useState } from 'react'
import { PayloadAdminBar, PayloadAdminBarProps, PayloadMeUser } from 'payload-admin-bar'

import { Gutter } from '../Gutter'

const Title: React.FC = () => <span>Dashboard</span>

export const AdminBarClient: React.FC<PayloadAdminBarProps> = props => {
  const [user, setUser] = useState<PayloadMeUser>()

  return (
    <div>
      <Gutter>
        <PayloadAdminBar
          {...props}
          logo={<Title />}
          cmsURL={process.env.NEXT_PUBLIC_PAYLOAD_URL}
          onPreviewExit={async () => {
            await fetch(`/api/exit-preview`)
            window.location.reload()
          }}
          onAuthChange={setUser}
          // className={}
          // classNames={{
          //   user: classes.user,
          //   logo: classes.logo,
          //   controls: classes.controls,
          // }}
          style={{
            position: 'relative',
            zIndex: 'unset',
            padding: 0,
            backgroundColor: 'transparent',
          }}
        />
      </Gutter>
    </div>
  )
}
