Thread.new do
  while true do
    OrderItem.where("created_at <= ?", 1.hour.ago).destroy_all
    Cart.where("created_at <= ?", 1.hour.ago).destroy_all
    sleep 30.minutes
  end
end
