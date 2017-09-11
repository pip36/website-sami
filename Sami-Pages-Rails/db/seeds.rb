# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

products = Product.create([
  {name: 'Rouche Cane', image_path:'rouche-cane.jpg', category: 'cane', unit_price: '1.80',
    description:'Flexible cane from south france with a lovely warm tone', stock: 10000},

  {name: 'Neuranter Cane', image_path:'nuer-cane.jpg', category: 'cane', unit_price: '1.80',
    description:'Otherwise known as magic cane, this cane is in high demand!', stock: 10000},

    {name: 'Recorder Case', image_path:'1-t-recorder.jpg', category: 'case', unit_price: '15.00',
      description:'A single recorder case', stock: 3},

      {name: 'Oboe Case', image_path:'2-ob-damore.jpg', category: 'case', unit_price: '35.00',
        description:'an oboe case', stock: 1},

        {name: "Double Oboe/D'Amore Case", image_path:'1-ob-damore-1.jpg', category: 'case', unit_price: '50.00',
          description:'A large double case in red!', stock: 1}
  ])
