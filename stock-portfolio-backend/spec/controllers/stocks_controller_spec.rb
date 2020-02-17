require 'rails_helper'

RSpec.describe StocksController, type: :controller do
    describe '#index' do 
        it "returns a user's array of stocks" do 
            User.create(email: 'test@email.com', name: 'test', password: 'test123')
            get :index, params: {user_id: User.last.id}
            json_response = JSON.parse(response.body)
            expect(json_response["stocks"].class).to eq(Array)
        end 

        it "returns a user's balance of 5000" do 
            User.create(email: 'test@email.com', name: 'test', password: 'test123')
            get :index, params: {user_id: User.last.id}
            json_response = JSON.parse(response.body)
            expect(json_response["balance"].to_f).to eq(5000.00)
        end 
    end 

    describe '#create' do 
        it 'successfully creates a stock' do 
            User.create(email: 'test@email.com', name: 'test', password: 'test123')
            post :create, params: {user_id: User.last.id, stock: {symbol: 'Test', latestPrice: 500}, qty: '5'}
            json_response = JSON.parse(response.body)
            expect(json_response["success"]).to be_truthy
        end 

        it 'returns an error if quantity is not a whole number' do 
            User.create(email: 'test@email.com', name: 'test', password: 'test123')
            post :create, params: {user_id: User.last.id, stock: {symbol: 'Test', latestPrice: 500}, qty: '5.5'}
            json_response = JSON.parse(response.body)
            expect(json_response["error"]).to be_truthy
        end 

        it 'returns an error if user does not have enough balance' do 
            User.create(email: 'test@email.com', name: 'test', password: 'test123')
            post :create, params: {user_id: User.last.id, stock: {symbol: 'Test', latestPrice: 5000}, qty: '2'}
            json_response = JSON.parse(response.body)
            expect(json_response["error"]).to be_truthy
        end 
    end 
end
