class TransactionsController < ApplicationController
    def index 
        transactions = User.find_by(id: params[:user_id]).transactions

        render json: transactions
    end 
end
