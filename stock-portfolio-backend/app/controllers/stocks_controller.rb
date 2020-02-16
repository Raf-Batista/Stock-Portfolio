class StocksController < ApplicationController
    def index 
        stocks = User.find_by(id: params[:user_id].to_i).stocks 
        user = User.find_by(id: params[:user_id].to_i)
        
        render json: {stocks: stocks, balance: user.balance}
    end 

    def create 
        user = User.find_by(id: params[:user_id].to_i)
        user_stock = Stock.find_or_create_by(symbol: params[:stock][:symbol])
      #  binding.pry
        if (user.balance - params[:stock][:latestPrice] * params[:qty].to_i) < 0 
            render json: {error: "Balance not enough"}
        else 
            user.balance -= (params[:stock][:latestPrice] * params[:qty].to_i)
        end  
        
        user.save 
        user_stock.shares += params[:qty].to_i
        user_stock.value = params[:stock][:latestPrice]
        user_stock.user = user 

        if(user_stock.save) 
            Transaction.create(user_id: user.id, stock_id: user.stocks.last.id, shares: user_stock.shares, symbol: user_stock.symbol, value: user_stock.value)
            render json: {success: "Stock bought"}
        else 
            render json: {error: user_stock.errors.full_messages}
        end 

    end 
end
