class ProductsController < ApplicationController
  def index

    @products = Product.all
    @cart = current_cart
    @order_item = Cart.first.order_items.new
  end
end
