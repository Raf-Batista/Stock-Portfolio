class StocksController < ApplicationController
    def index 
        user = User.find_by(id: params[:user_id].to_i)
        
        render json: {stocks: user.stocks, balance: user.balance}
    end 

    def create 
        if params[:qty] =~ /\A\d+\.\d+\z/ 
            return render json: {error: 'Please use whole numbers for QTY'}
        end 

        user = User.find_by(id: params[:user_id].to_i)
 
        if (user.balance - params[:stock][:latestPrice] * params[:qty].to_i) < 0 
            return render json: {error: "Balance not enough"}
        else 
            user.balance -= (params[:stock][:latestPrice] * params[:qty].to_i)
            user.save
            stock = user.stocks.find_or_create_by(symbol: params[:stock][:symbol])
            stock.shares += params[:qty].to_i
            stock.value = params[:stock][:latestPrice]
        end  
        

        if(stock.save) 
            Transaction.create(user_id: user.id, stock_id: user.stocks.last.id, shares: params[:qty].to_i, symbol: params[:stock][:symbol], value: params[:stock][:latestPrice])
            render json: {success: "Stock bought"}
        else 
            render json: {error: user_stock.errors.full_messages}
        end 

    end 
end
