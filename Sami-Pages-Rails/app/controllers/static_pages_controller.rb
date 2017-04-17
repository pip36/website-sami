class StaticPagesController < ApplicationController

def index

end

def about

end

def contact

end

def cane
  @products = Product.all
  @cart = current_cart
  @order_item = Cart.first.order_items.new
end


end
