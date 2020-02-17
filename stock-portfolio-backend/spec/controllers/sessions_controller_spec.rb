require 'rails_helper'

RSpec.describe SessionsController, type: :controller do
    it "successfully logs in" do
        User.create(email: 'test@email.com', name: 'test', password: 'test123')
        post :create, params: {user: {email: 'test@email.com', name: 'test', password: 'test123'}}
        json_response = JSON.parse(response.body)
        expect(json_response["token"]).to be_truthy
    end

    it "returns JSON with errors if user did not log in" do
        User.create(email: 'test@email.com', name: 'test', password: 'test123')
        post :create, params: {user: {email: '', name: '', password: ''}}
        json_response = JSON.parse(response.body)
        expect(json_response["error"]).to be_truthy
      end
end
