import { ReactElement } from "react"

export interface StatCard {
    label: string,
    value: number,
    change: number
}

export interface ActivityItem {
    icon: ReactElement,
    description: string,
    timestamp: string
}

export type Theme = 'light' | 'dark';