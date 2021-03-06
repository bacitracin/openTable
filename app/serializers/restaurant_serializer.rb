class RestaurantSerializer < ActiveModel::Serializer
 
  attributes :id, :ot_id, :name, :address, :city, :state, :postal_code, :phone, :image_url, :reserve_url, :price

  has_many :reviews
  has_many :users, :through => :reviews
  
end
