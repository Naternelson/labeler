class ProductSerializer
  include JSONAPI::Serializer
  extend SerializerHelper 

  #Attributes
  attributes :name, :description, :sales_price, :purchase_price
  attribute :batches, if: includes(:batches)
  attribute :components, if: includes(:components)
  attribute :item_count do |obj|
    obj.items.count 
  end

  #Relationships
  has_many :batches
  has_many :components, serializer: :product

  #Key Transform
  set_key_transform :camel_lower 
end
