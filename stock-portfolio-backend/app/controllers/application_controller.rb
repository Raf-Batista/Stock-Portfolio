require 'jwt'
class ApplicationController < ActionController::Base
    protect_from_forgery

    def login user
        payload = {id: user.id, name: user.name, email: user.email}
        token = JWT.encode payload, ENV["HMAC_SECRET"], 'HS256'
    end 
end
