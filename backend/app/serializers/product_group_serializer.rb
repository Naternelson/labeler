class ProductGroupSerializer
  include JSONAPI::Serializer
  extend SerializerHelper

  #Attributes
  attributes :name, :weight, :color, :length, :width, :height, :material 
  attribute :products if: includes(:products)

  #Relationships
  has_many :products

  #Key Transformation
  set_key_transform :camel_lower
end
