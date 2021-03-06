class CartsController < ApplicationController

  def show
    @cart = current_cart
    @orders = @cart.order_items
    @products = @cart.products

    respond_to do |format|
      format.html
      format.json { render json: {orders: @orders, products: @products} }
    end
  end

  def purchase
    respond_to do |format|
      format.js
    end
  end

end
