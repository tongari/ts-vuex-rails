# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

category_list = [
  :ruby,
  :javascript
]

item_list = [
  {
    category_name: :rails,
    category_id: 1,
  },
  {
    category_name: :sinatra,
    category_id: 1,
  },
  {
    category_name: :react,
    category_id: 2,
  },
  {
    category_name: :vue,
    category_id: 2,
  },
  {
    category_name: :backbone,
    category_id: 2,
  }
]

category_list.each do |category|
  Category.create!(name: category)
end

item_list.each do |item|
  Item.create!(name: item[:category_name], category_id: item[:category_id])
end
