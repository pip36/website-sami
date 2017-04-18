# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

products = Product.create([
  {name: 'Rouche', unit_price: '1.80',
    description:'Flexible cane from south france with a lovely warm tone'},
  {name: 'Neuranter', unit_price: '1.80',
    description:'Otherwise known as magic cane, this cane is in high demand!'}
  ])
