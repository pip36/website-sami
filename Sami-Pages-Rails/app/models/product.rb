class Product < ApplicationRecord
  has_many :order_items
  validates_uniqueness_of :name
end
