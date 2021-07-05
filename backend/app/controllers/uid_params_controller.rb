class UidParamsController < ApplicationController
  def index
    uParams = UidParam.all 
    render json: UidParamSerializer.new(uParams)
  end
end
