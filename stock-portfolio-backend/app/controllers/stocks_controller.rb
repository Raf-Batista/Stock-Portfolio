class StocksController < ApplicationController
    def index 
        stocks = User.find_by(id: params[:user_id].to_i).stocks 
        
        render json: stocks
    end 

    def create 
        # params[:stock]["Global Quote"]
        binding.pry
    end 
end
