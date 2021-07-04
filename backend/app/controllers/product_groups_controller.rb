class ProductGroupsController < ApplicationController
  def index
    productgroups = ProductGroup.all
    render json: ProductGroupSerializer.new(productgroups)
  end
end
