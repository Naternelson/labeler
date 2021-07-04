class UidParamsController < ApplicationController
    def index 
        pars = UidParam.all
        render json: UidParamSerializer.new(pars)
    end 
end
