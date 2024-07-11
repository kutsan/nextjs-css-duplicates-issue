'use client'

import { type ReactElement } from 'react'

import styles from './RootRoute.module.css'

export function RootRoute(): ReactElement {
  return (
    <section>
      <h1 className={styles.title}>
        Inspect this title, styles are duplicated
      </h1>
    </section>
  )
}
