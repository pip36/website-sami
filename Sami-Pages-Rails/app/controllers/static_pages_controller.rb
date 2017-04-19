class StaticPagesController < ApplicationController

def index

end

def about

end

def contact

end

def cane
  @caneproducts = Product.where({category: "cane"})
  @cart = current_cart
  @order_item = Cart.first.order_items.new
end

def cases
  @caseproducts = Product.where({category: "case"})
  @cart = current_cart
  @order_item = Cart.first.order_items.new
end

end
