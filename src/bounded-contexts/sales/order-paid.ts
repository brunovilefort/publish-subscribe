import { DomainEvent } from '../../core/domain-event'
import { Order } from './order'

export class OrderPaidEvent implements DomainEvent {
  public order: Order
  public createdAt: Date

  constructor(order: Order) {
    this.order = order
    this.createdAt = new Date()
  }

  getEntityId(): string {
    return this.order.id!
  }
}
