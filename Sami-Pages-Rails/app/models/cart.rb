class Cart < ApplicationRecord
  has_many :order_items
  has_many :products, through: :order_items

  def total
    @sum = 0
    order_items.each do |order|
      @sum += order.subtotal
    end
    return @sum
  end
end
