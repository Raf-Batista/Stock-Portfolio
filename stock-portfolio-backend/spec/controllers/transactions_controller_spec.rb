require 'rails_helper'

RSpec.describe TransactionsController, type: :controller do
    describe '#index' do 
        it 'returns an array of transactions' do
            User.create(email: 'test@email.com', name: 'test', password: 'test123')
            User.last.stocks.create(symbol: 'Test', shares: '5', value: 500).save 
            get :index, params: {user_id: User.last.id}
            json_response = JSON.parse(response.body)
            expect(json_response.class).to eq(Array)
        end
    end 
end
