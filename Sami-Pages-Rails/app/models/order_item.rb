class OrderItem < ApplicationRecord
  belongs_to :product
  belongs_to :cart

  validates :product_id, presence: true
  validates :quantity, presence: true, numericality: {greater_than: 0}

  def subtotal
    @subtotal = product.unit_price * quantity
  end
end
