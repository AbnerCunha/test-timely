import { EventImage } from "./eventImage.model";

export interface Event {
    title: string
    images: EventImage[]
    end_datetime: string
    start_datetime: string
    description_short: string
}