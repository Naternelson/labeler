class ItemSerializer
  include JSONAPI::Serializer
  extend SerializerHelper 

  #Attributes
  attributes :status, :location, :represents, :uids, :uid_params
  attribute :batch, if: includes(:batch)

  #Relationships
  belongs_to :batch 
  has_many :uids 
  has_many :uid_params

  #Key Transform
  set_key_transform :camel_lower 
end
