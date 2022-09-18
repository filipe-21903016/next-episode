import { TvObserver } from "./TvObserver.ts"

export interface TvObservable{
    subscribe(observer: TvObserver): void
    unsubscribe(observer: TvObserver): void
    notify(...args: unknown[]): void
}