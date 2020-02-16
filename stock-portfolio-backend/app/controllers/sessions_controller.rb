class SessionsController < ApplicationController
    def create
        user = User.find_by(email: params[:user][:email])
        if user && user.authenticate(params[:user][:password]) 
            token = login(user)
            render json: {name: user.name, email: user.email, id: user.id, token: token}
        else 
            render json: {error: 'Email or Password is incorrect.'}
        end     
    end

end
