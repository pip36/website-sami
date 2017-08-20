class OrderItem < ApplicationRecord
  belongs_to :product
  belongs_to :cart

  validates :product_id, presence: true
  validates :quantity, presence: true, numericality: {greater_than: 0}
  validate :product_in_stock

  def subtotal
    @subtotal = product.unit_price * quantity
  end

  def product_in_stock
    if product.stock < 1
      self.errors.add(:order_item, "Product is out of stock")
    end
  end
end
