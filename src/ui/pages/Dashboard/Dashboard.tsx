import React from 'react'
import Button from '@mui/material/Button'
import AuthedAppLayout from 'ui/layout/AuthedAppLayout'

export default function DashboardPage() {
  return (
    <AuthedAppLayout>
      <Button variant="contained">Hello World</Button>
    </AuthedAppLayout>
  )
}
