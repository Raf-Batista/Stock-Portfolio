class StocksController < ApplicationController
    def index 
        stocks = User.find_by(id: params[:user_id].to_i).stocks 
        user = User.find_by(id: params[:user_id].to_i)
        
        render json: {stocks: stocks, balance: user.balance}
    end 

    def create 
        # refactor this into a method that returns a hash to pass it into user_stock
        stock = params[:stock]["Global Quote"]
        symbol = stock["01. symbol"]
        value = stock["05. price"].to_f
        shares = params[:qty].to_i

        user = User.find_by(id: params[:user_id].to_i)
        user_stock = Stock.find_or_create_by(symbol: symbol)
    
        if user.balance - value < 0 
            render json: {error: "Balance not enough for purchase"}
        else 
            user.balance -= value 
            user.save
        end 
       
        user_stock.value = value 
        user_stock.shares += shares
        user_stock.user = user


        if(user_stock.save) 
            Transaction.create(user_id: user.id, stock_id: user.stocks.last.id, shares: shares, symbol: symbol, value: value)
            render json: {success: "Stock bought"}
        end 
    end 

    private 

   
end
