# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create(name: 'test', email: 'test@email.com', password: 'test123')

user.stocks.create(symbol: 'A', shares: 5, value: 150.25)

Transaction.create(user_id: user.id, stock_id: user.stocks.last.id, shares: user.stocks.last.shares, value: user.stocks.last.value, symbol: user.stocks.last.symbol)

user.stocks.create(symbol: 'AAPL', shares: 10, value: 250.00)

Transaction.create(user_id: user.id, stock_id: user.stocks.last.id, shares: user.stocks.last.shares, value: user.stocks.last.value, symbol: user.stocks.last.symbol)