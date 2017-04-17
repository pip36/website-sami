class ProductsController < ApplicationController
  def cane
    @products = Product.all
    @cart = current_cart
    @order_item = Cart.first.order_items.new
  end
end
