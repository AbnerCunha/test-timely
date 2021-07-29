import { Event } from "./event.model";

export interface EventsObj {
    from: number
    size: number
    total: number
    items: Event[]
    has_next: boolean
    has_prior: boolean
}