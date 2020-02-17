require 'rails_helper'

RSpec.describe UsersController, type: :controller do
    it 'successfully creates a user' do 
        post :create, params: { user: {email: 'test@email.com', name: 'test', password: 'test123'} }
        expect(User.all.size).to eq(1)
    end 
end
