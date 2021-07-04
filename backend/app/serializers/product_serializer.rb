class ProductSerializer
  include JSONAPI::Serializer
  attributes :name, :description, :sales_price, :purchase_price
  has_many :batches 

  attribute :item_count {|obj| obj.items.count}
end