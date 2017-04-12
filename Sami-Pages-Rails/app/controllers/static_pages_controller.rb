class StaticPagesController < ApplicationController

def index

end

def about

end

def contact

end

def cane
  @products = Product.all;
  @order_item = current_cart.order_items.new
end


end
