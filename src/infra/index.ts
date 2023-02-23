import { Order } from '../bounded-contexts/sales/order'
import { OrderCreatedEvent } from '../bounded-contexts/sales/order-created'
import { DomainEvents } from '../core/domain-events'

// Subscriber
DomainEvents.registerSubscriber(OrderCreatedEvent.name, (event) => {
  console.log(event)
})

// Publisher
const order = Order.create({
  customerId: 'customer-01',
  productId: 'product-01',
  amountInCents: 1000,
  status: 'pending',
  createdAt: new Date(),
})

// Dentro da camada de persistência: "finalização do processo de venda".
DomainEvents.dispatchEventsForEntity(order.id!)
