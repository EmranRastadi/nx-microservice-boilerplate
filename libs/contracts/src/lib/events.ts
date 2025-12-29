/*
 ** TOPIC NAME STRUCTURE
 ** <bounded-context>.<event-name>.v<version>
 */

export const Events = {
  // ORDER TOPIC NAME
  ORDER_CREATED: 'order.created.v1',
  ORDER_UPDATED: 'order.updated.v1',
  ORDER_FAILED: 'order.failed.v1',

  // PRODUCT TOPIC NAME
  PRODUCT_CREATED: 'product.created.v1',
  PRODUCT_UPDATED: 'product.updated.v1',
  PRODUCT_RESERVED: 'product.reserved.v1',

  // PRODUCT TOPIC NAME
  USER_CREATED: 'user.created.v1',
  USER_UPDATED: 'user.updated.v1',

  // PAYMENT TOPIC NAME
  PAYMENT_COMPLETED: 'payment.completed.v1',
} as const;

export type EventName = (typeof Events)[keyof typeof Events];
