/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
import configPromise from '@payload-config'
import config from '@payload-config'
import '@payloadcms/next/css'
import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts'
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import React from 'react'
import { importMap } from './admin/importMap.js'
import './custom.scss'
import { ServerFunctionClient } from 'payload'

type Args = {
  children: React.ReactNode
}
const serverFunction: ServerFunctionClient = async function (args) {
  'use server'
  return handleServerFunctions({
    ...args,
    config,
    importMap,
  })
}

const Layout = ({ children }: Args) => <RootLayout serverFunction={serverFunction} config={configPromise} importMap={importMap}>{children}</RootLayout>

export default Layout
