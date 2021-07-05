class UidSerializer
  include JSONAPI::Serializer
  # extend SerializerHelper 

  #Attributes
  attributes :item_value, :uid_param

  #Relationships
  belongs_to :uid_param

  #Key Transform
  set_key_transform :camel_lower 
end
