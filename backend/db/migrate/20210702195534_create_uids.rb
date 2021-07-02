class CreateUids < ActiveRecord::Migration[6.1]
  def change
    create_table :uids do |t|
      t.integer :item_id
      t.integer :uid_param_id
      t.string :item_value

      t.timestamps
    end
  end
end
