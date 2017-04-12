class OrderItem < ApplicationRecord
  belongs_to :product
  belongs_to :cart

  def subtotal
    @subtotal = product.unit_price * quantity
  end
end
