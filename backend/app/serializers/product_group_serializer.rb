class ProductGroupSerializer
  include JSONAPI::Serializer
  attributes :name, :weight, :color, :length, :width, :height, :material 
  has_many :products
end
