# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do
  Todo.destroy_all

  p "Creating todos..."

  homework = Todo.create!(title: 'homework', body: 'do homework', done: false)
  home = Todo.create!(title: 'home', body: 'do home', done: false)
  studying = Todo.create!(title: 'studying', body: 'do studying', done: true)
  sleep = Todo.create!(title: 'sleep', body: 'do sleep', done: false)
  buyfood = Todo.create!(title: 'buy food', body: 'do buy food', done: false)

end