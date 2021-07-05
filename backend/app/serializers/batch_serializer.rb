class BatchSerializer
  include JSONAPI::Serializer
  extend SerializerHelper 

  #Attributes
  attributes :mfg, :exp, :created_at
  attribute :sub_components, if: excludes(:sub_components), serializer: :batch
  attribute :parent_components, if: includes(:parent_components), serializer: :batch
  attribute :items, if: includes(:items)

  #Relationships
  has_many :sub_components, serializer: :batch
  has_many :parent_components, serializer: :batch
  has_many :items

  #Key Transform
  set_key_transform :camel_lower 
end
