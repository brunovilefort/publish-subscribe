import { randomUUID } from 'crypto'

import { DomainEvent } from './domain-event'
import { DomainEvents } from './domain-events'

export abstract class Entity<Props = any> {
  protected props: Props
  protected readonly _id: string | undefined
  private _domainEvents: DomainEvent[] = []

  protected constructor(props: Props, id?: string) {
    this.props = props
    this._id = id ?? randomUUID()
  }

  get id() {
    return this._id
  }

  get domainEvents() {
    return this._domainEvents
  }

  protected addDomainEvent(domainEvent: DomainEvent) {
    this._domainEvents.push(domainEvent)
    DomainEvents.markEntityForDispatch(this)
  }

  public clearEvents() {
    this._domainEvents = []
  }
}
