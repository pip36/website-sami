# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

products = Product.create([
  {name: 'Rouche Cane', image_path:'1489520659_square-twitter.png', category: 'cane', unit_price: '1.80',
    description:'Flexible cane from south france with a lovely warm tone'},

  {name: 'Neuranter Cane', image_path:'1489520704_square-facebook.png', category: 'cane', unit_price: '1.80',
    description:'Otherwise known as magic cane, this cane is in high demand!'},

    {name: 'Recorder Case', image_path:'1489520659_square-twitter.png', category: 'case', unit_price: '15.00',
      description:'A single recorder case'},

      {name: 'Oboe Case', image_path:'1489520659_square-twitter.png', category: 'case', unit_price: '35.00',
        description:'an oboe case'},

        {name: "Double Oboe/D'Amore Case", image_path:'1489520659_square-twitter.png', category: 'case', unit_price: '50.00',
          description:'A large double case in red!'}
  ])
